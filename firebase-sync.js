// ─────────────────────────────────────────────────────────────
//  Dai Lab Tracker — Firestore sync engine  (window.LabSync)
// ─────────────────────────────────────────────────────────────
// Plain classic script. Attaches window.LabSync with:
//   LabSync.enabled                      -> true if a config was provided
//   await LabSync.init()                 -> connects (no-op if disabled)
//   LabSync.subscribe(fn)                -> fn(data) called on every remote change
//   LabSync.save(data)                   -> debounced push to the cloud
//   LabSync.status                       -> 'off' | 'connecting' | 'live' | 'error'
//
// Falls back silently to local-only when no FIREBASE_CONFIG is set.

(function () {
  var VER = "10.12.2";
  var app = null, db = null, ref = null;
  var subs = [];
  var saveTimer = null, pendingData = null;
  var skipEcho = false;          // ignore the save that would echo a remote update
  var API = {
    enabled: false,
    status: "off",
    _initPromise: null,
  };

  function cfg() {
    return (typeof window !== "undefined" && window.FIREBASE_CONFIG) || null;
  }
  function docId() {
    return (typeof window !== "undefined" && window.LAB_DOC_ID) || "dai-lab";
  }

  API.init = function () {
    if (API._initPromise) return API._initPromise;
    var c = cfg();
    if (!c) { API.status = "off"; return (API._initPromise = Promise.resolve(false)); }
    API.enabled = true;
    API.status = "connecting";
    API._initPromise = (async function () {
      try {
        var appMod = await import("https://www.gstatic.com/firebasejs/" + VER + "/firebase-app.js");
        var fs = await import("https://www.gstatic.com/firebasejs/" + VER + "/firebase-firestore.js");
        app = appMod.initializeApp(c);
        db = fs.getFirestore(app);
        ref = fs.doc(db, "labTracker", docId());
        API._fs = fs;
        // live listener
        fs.onSnapshot(ref, function (snap) {
          if (!snap.exists()) return;
          var data = snap.data();
          if (data && data.payload) {
            skipEcho = true;
            subs.forEach(function (fn) { try { fn(data.payload); } catch (e) {} });
            setTimeout(function () { skipEcho = false; }, 0);
          }
        }, function (err) {
          API.status = "error";
          console.warn("[LabSync] listener error", err);
        });
        API.status = "live";
        return true;
      } catch (e) {
        API.status = "error";
        console.warn("[LabSync] init failed", e);
        return false;
      }
    })();
    return API._initPromise;
  };

  API.subscribe = function (fn) {
    if (typeof fn === "function") subs.push(fn);
    return function () { subs = subs.filter(function (f) { return f !== fn; }); };
  };

  API.save = function (data) {
    if (!API.enabled) return;
    if (skipEcho) return;                 // don't write back a change we just received
    pendingData = data;
    if (saveTimer) clearTimeout(saveTimer);
    saveTimer = setTimeout(async function () {
      saveTimer = null;
      if (!ref || !API._fs || pendingData == null) return;
      try {
        await API._fs.setDoc(ref, { payload: pendingData, updatedAt: Date.now() });
      } catch (e) {
        console.warn("[LabSync] save failed", e);
      }
    }, 600);
  };

  window.LabSync = API;

  // Auto-connect as soon as this script loads (config is loaded just before us).
  // Harmless if there is no config — init() no-ops and status stays 'off'.
  try { API.init(); } catch (e) {}
})();
