// ─────────────────────────────────────────────────────────────
//  Dai Lab Tracker — cross-device sync configuration
// ─────────────────────────────────────────────────────────────
// Leave FIREBASE_CONFIG = null to keep the app local-only (this device only).
// To turn on shared sync across your Mac, iPhone, and lab members:
//
//   1. Go to https://console.firebase.google.com  → Add project (free).
//   2. In the project, open  Build → Firestore Database → Create database
//      (start in *test mode* for a quick start; lock it down later).
//   3. Project settings (gear icon) → "Your apps" → Web app ( </> ) →
//      register an app → copy the firebaseConfig object it shows you.
//   4. Paste that object below (replace the null), and set a shared doc id.
//   5. Everyone who opens the app with this same config sees the same data.
//
// The SAME config in BOTH the website file and the iPhone file keeps them
// in sync. Keep this file next to the .html files (or paste the same block
// into the offline builds).

window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyDx7N0EUv1vLYEWzEWnsiqLqKWfLSiGi4Y",
  authDomain: "lab-tracker-fe35b.firebaseapp.com",
  projectId: "lab-tracker-fe35b",
  storageBucket: "lab-tracker-fe35b.firebasestorage.app",
  messagingSenderId: "18872337938",
  appId: "1:18872337938:web:7a6c4f1c83e7eca84cbacb",
  measurementId: "G-JJ5EQPTP0D"
};

// Example (delete the /* */ and fill in your real values):
/*
window.FIREBASE_CONFIG = {
  apiKey: "AIza…",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project",
  appId: "1:1234567890:web:abcdef",
};
*/

// One shared document holds the whole lab's data. Change only if you want
// separate datasets (e.g. "dai-lab-2027").
window.LAB_DOC_ID = "dai-lab";
