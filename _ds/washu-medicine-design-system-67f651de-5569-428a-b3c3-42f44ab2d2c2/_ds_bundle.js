/* @ds-bundle: {"format":3,"namespace":"WashUMedicineDesignSystem_67f651","components":[],"sourceHashes":{"ui_kits/washu-medicine-web/components/App.jsx":"4a0c67aa1740","ui_kits/washu-medicine-web/components/Components.jsx":"afddc82bbcca"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.WashUMedicineDesignSystem_67f651 = window.WashUMedicineDesignSystem_67f651 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/washu-medicine-web/components/App.jsx
try { (() => {
/* global React, ReactDOM */
const {
  useState
} = React;
const {
  Header,
  HeroEditorial,
  HeroGradient,
  StoriesSection,
  Stats,
  PullQuote,
  CalloutBand,
  Footer
} = window;
function App() {
  const [hero, setHero] = useState('editorial');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    current: "Home"
  }), hero === 'editorial' ? /*#__PURE__*/React.createElement(HeroEditorial, null) : /*#__PURE__*/React.createElement(HeroGradient, null), /*#__PURE__*/React.createElement(StoriesSection, null), /*#__PURE__*/React.createElement(Stats, null), /*#__PURE__*/React.createElement(PullQuote, null), /*#__PURE__*/React.createElement(CalloutBand, null), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      bottom: 16,
      right: 16,
      zIndex: 50,
      background: '#000',
      color: '#fff',
      borderRadius: 4,
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      display: 'flex',
      overflow: 'hidden',
      boxShadow: '0 4px 14px rgba(0,0,0,.2)'
    }
  }, [['editorial', 'Editorial hero'], ['gradient', 'Gradient hero']].map(([k, l]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => setHero(k),
    style: {
      background: hero === k ? 'var(--washu-red)' : 'transparent',
      color: '#fff',
      border: 'none',
      padding: '10px 14px',
      fontWeight: 700,
      letterSpacing: '.03em',
      textTransform: 'uppercase',
      fontSize: 11,
      cursor: 'pointer'
    }
  }, l))));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/washu-medicine-web/components/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/washu-medicine-web/components/Components.jsx
try { (() => {
/* global React */
const {
  useState
} = React;

// ───────────────────────────────────────────────────────────────
//  Atoms — aligned to WashU Medicine Brand Guidelines V1.0
// ───────────────────────────────────────────────────────────────

const Eyebrow = ({
  children,
  color = 'var(--washu-red)',
  style
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 700,
    fontSize: 12,
    letterSpacing: '.05em',
    textTransform: 'uppercase',
    color,
    ...style
  }
}, children);

// Headline with italic emphasis — the brand signature move.
// Pass `emphasis` for the serif-italic-red word(s), rest is Sans Bold.
const Headline = ({
  before,
  emphasis,
  after,
  size = 48,
  color = '#000',
  style
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 700,
    fontSize: size,
    lineHeight: 1.1,
    letterSpacing: '-0.01em',
    color,
    ...style
  }
}, before, emphasis && /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: 'var(--font-serif)',
    fontStyle: 'italic',
    fontWeight: 400,
    color: 'var(--washu-red)'
  }
}, emphasis), after);
const Button = ({
  children,
  variant = 'primary',
  href = '#',
  onClick
}) => {
  const base = {
    display: 'inline-block',
    fontFamily: 'var(--font-sans)',
    fontWeight: 700,
    fontSize: 16,
    textDecoration: 'none',
    padding: '12px 24px',
    borderRadius: 4,
    cursor: 'pointer',
    border: 'none',
    transition: 'all .2s ease-in-out',
    whiteSpace: 'nowrap'
  };
  const styles = {
    primary: {
      ...base,
      background: 'var(--washu-red)',
      color: '#fff'
    },
    secondary: {
      ...base,
      background: 'transparent',
      color: 'var(--washu-red)',
      border: '2px solid var(--washu-red)',
      padding: '10px 22px'
    },
    reverse: {
      ...base,
      background: '#fff',
      color: 'var(--washu-red)'
    }
  };
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    style: styles[variant]
  }, children);
};

// Shield silhouette — used for rippling effect
const ShieldPath = "M130 30 C 180 30, 215 60, 215 110 L 215 150 C 215 195, 180 225, 130 245 C 80 225, 45 195, 45 150 L 45 110 C 45 60, 80 30, 130 30 Z";
const RipplingShield = ({
  size = 320,
  color = 'var(--washu-red)',
  opacity = 1
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 260 260",
  style: {
    display: 'block'
  }
}, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("path", {
  id: `rs-${color.replace(/[^a-z0-9]/gi, '')}`,
  d: ShieldPath
})), /*#__PURE__*/React.createElement("g", {
  fill: "none",
  stroke: color,
  opacity: opacity
}, [{
  s: 0.35,
  w: 6,
  o: 1.0
}, {
  s: 0.55,
  w: 5,
  o: 0.85
}, {
  s: 0.75,
  w: 4,
  o: 0.6
}, {
  s: 0.95,
  w: 3,
  o: 0.4
}, {
  s: 1.15,
  w: 2,
  o: 0.22
}].map((r, i) => /*#__PURE__*/React.createElement("path", {
  key: i,
  d: ShieldPath,
  transform: `translate(130 135) scale(${r.s}) translate(-130 -135)`,
  strokeWidth: r.w,
  opacity: r.o
}))));

// ───────────────────────────────────────────────────────────────
//  Header — utility red bar + logo + nav
// ───────────────────────────────────────────────────────────────

const Header = ({
  current = 'Home',
  onNav
}) => /*#__PURE__*/React.createElement("header", {
  style: {
    fontFamily: 'var(--font-sans)',
    borderBottom: '1px solid #e5e5e5'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    background: 'var(--washu-red)',
    color: '#fff'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1280,
    margin: '0 auto',
    padding: '10px 24px',
    display: 'flex',
    justifyContent: 'flex-end',
    gap: 28,
    fontSize: 13,
    fontWeight: 600,
    letterSpacing: '.03em',
    textTransform: 'uppercase'
  }
}, /*#__PURE__*/React.createElement("a", {
  href: "#",
  style: {
    color: '#fff',
    textDecoration: 'none',
    opacity: .9
  }
}, "For Patients"), /*#__PURE__*/React.createElement("a", {
  href: "#",
  style: {
    color: '#fff',
    textDecoration: 'none',
    opacity: .9
  }
}, "For Faculty & Staff"), /*#__PURE__*/React.createElement("a", {
  href: "#",
  style: {
    color: '#fff',
    textDecoration: 'none',
    opacity: .9
  }
}, "Give"), /*#__PURE__*/React.createElement("a", {
  href: "#",
  style: {
    color: '#fff',
    textDecoration: 'none',
    opacity: .9
  }
}, "Search"))), /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1280,
    margin: '0 auto',
    padding: '22px 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
}, /*#__PURE__*/React.createElement("a", {
  href: "#",
  onClick: e => {
    e.preventDefault();
    onNav && onNav('Home');
  }
}, /*#__PURE__*/React.createElement("img", {
  src: "../../assets/logos/washu-medicine-1l-rgb.svg",
  alt: "WashU Medicine",
  style: {
    height: 42,
    display: 'block'
  }
})), /*#__PURE__*/React.createElement(Button, null, "Give now")), /*#__PURE__*/React.createElement("nav", {
  style: {
    borderTop: '1px solid #e5e5e5',
    background: '#fff'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1280,
    margin: '0 auto',
    padding: '0 24px',
    display: 'flex',
    gap: 0
  }
}, ['Home', 'Research', 'Education', 'Patient Care', 'About'].map(item => /*#__PURE__*/React.createElement("a", {
  key: item,
  href: "#",
  onClick: e => {
    e.preventDefault();
    onNav && onNav(item);
  },
  style: {
    padding: '18px 20px',
    fontSize: 15,
    fontWeight: 600,
    color: current === item ? 'var(--washu-red)' : '#000',
    textDecoration: 'none',
    borderBottom: current === item ? '3px solid var(--washu-red)' : '3px solid transparent',
    marginBottom: -1,
    whiteSpace: 'nowrap'
  }
}, item)))));

// ───────────────────────────────────────────────────────────────
//  Hero variants
// ───────────────────────────────────────────────────────────────

// Hero A — Warm Gray editorial hero with rippling shield
const HeroEditorial = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: 'var(--warm-gray)',
    position: 'relative',
    overflow: 'hidden'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'absolute',
    right: -80,
    top: -40,
    opacity: 0.5
  }
}, /*#__PURE__*/React.createElement(RipplingShield, {
  size: 520,
  color: "#ba0c2f"
})), /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1280,
    margin: '0 auto',
    padding: '96px 24px',
    position: 'relative'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 720
  }
}, /*#__PURE__*/React.createElement(Eyebrow, null, "Discovery \xB7 Neurology"), /*#__PURE__*/React.createElement(Headline, {
  before: /*#__PURE__*/React.createElement(React.Fragment, null, "A diagnosis changes", /*#__PURE__*/React.createElement("br", null)),
  emphasis: "everything",
  after: ".",
  size: 72,
  style: {
    marginTop: 16
  }
}), /*#__PURE__*/React.createElement("p", {
  style: {
    fontFamily: 'var(--font-sans)',
    fontSize: 21,
    lineHeight: 1.5,
    marginTop: 24,
    marginBottom: 32,
    color: '#000',
    maxWidth: 560
  }
}, "WashU Medicine researchers are reshaping what happens after the hardest conversation \u2014 turning diagnosis into direction, and direction into hope."), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    gap: 12
  }
}, /*#__PURE__*/React.createElement(Button, null, "Read the story"), /*#__PURE__*/React.createElement(Button, {
  variant: "secondary"
}, "All research")))));

// Hero B — Gradient Field hero (photo-free cover treatment)
const HeroGradient = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: 'linear-gradient(135deg, #ba0c2f 0%, #ba0c2f 45%, #ff6d6a 62%, #f1b434 78%, #b5e3d8 92%, #007d8a 100%)',
    color: '#fff',
    position: 'relative',
    overflow: 'hidden'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1280,
    margin: '0 auto',
    padding: '120px 24px 100px'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 760
  }
}, /*#__PURE__*/React.createElement(Eyebrow, {
  color: "#fff",
  style: {
    opacity: .9
  }
}, "Our Promise"), /*#__PURE__*/React.createElement(Headline, {
  before: /*#__PURE__*/React.createElement(React.Fragment, null, "Bring the brightest", /*#__PURE__*/React.createElement("br", null), "minds together to do", /*#__PURE__*/React.createElement("br", null)),
  emphasis: "better",
  after: ".",
  size: 72,
  color: "#fff",
  style: {
    marginTop: 16
  }
}))));

// ───────────────────────────────────────────────────────────────
//  Article / story cards
// ───────────────────────────────────────────────────────────────

const StoryCard = ({
  eyebrow,
  title,
  summary,
  placeholder = 'linear-gradient(135deg,#971b2f,#ba0c2f)'
}) => /*#__PURE__*/React.createElement("article", {
  style: {
    background: '#fff',
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    aspectRatio: '4/3',
    background: placeholder,
    position: 'relative',
    overflow: 'hidden'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'absolute',
    right: -40,
    bottom: -60,
    opacity: .25
  }
}, /*#__PURE__*/React.createElement(RipplingShield, {
  size: 240,
  color: "#fff"
}))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, eyebrow), /*#__PURE__*/React.createElement("h3", {
  style: {
    fontFamily: 'var(--font-sans)',
    fontSize: 22,
    fontWeight: 700,
    lineHeight: 1.2,
    color: '#000',
    margin: '10px 0 8px'
  }
}, title), /*#__PURE__*/React.createElement("p", {
  style: {
    fontFamily: 'var(--font-sans)',
    fontSize: 16,
    lineHeight: 1.5,
    color: '#222',
    margin: 0
  }
}, summary)));
const StoriesSection = () => /*#__PURE__*/React.createElement("section", {
  style: {
    padding: '80px 24px',
    maxWidth: 1280,
    margin: '0 auto'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginBottom: 40
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Latest"), /*#__PURE__*/React.createElement(Headline, {
  before: "Stories of ",
  emphasis: "discovery",
  after: ".",
  size: 44,
  style: {
    marginTop: 8
  }
})), /*#__PURE__*/React.createElement("a", {
  href: "#",
  style: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 700,
    fontSize: 15,
    color: 'var(--washu-red)',
    textDecoration: 'none',
    letterSpacing: '.03em',
    textTransform: 'uppercase'
  }
}, "All stories \u2192")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gap: 32
  }
}, /*#__PURE__*/React.createElement(StoryCard, {
  eyebrow: "Alzheimer's \xB7 Research",
  title: "A blood test that sees decades ahead",
  summary: "A team at WashU Medicine has validated a plasma biomarker that detects Alzheimer's pathology up to 20 years before symptoms emerge.",
  placeholder: "linear-gradient(135deg,#13322b,#215732)"
}), /*#__PURE__*/React.createElement(StoryCard, {
  eyebrow: "Oncology \xB7 Clinical Trial",
  title: "Reprogramming the immune system, one patient at a time",
  summary: "Phase II results published this month show durable remission in 68% of participants with refractory lymphoma.",
  placeholder: "linear-gradient(135deg,#ba0c2f,#ff6d6a)"
}), /*#__PURE__*/React.createElement(StoryCard, {
  eyebrow: "Cardiology \xB7 Profile",
  title: "Dr. Elena Navarro on the future of heart care",
  summary: "A conversation with the director of the Cardiovascular Disease Program on translating science into bedside practice.",
  placeholder: "linear-gradient(135deg,#007d8a,#b5e3d8)"
})));

// ───────────────────────────────────────────────────────────────
//  Stats strip — red band
// ───────────────────────────────────────────────────────────────

const Stats = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: 'var(--washu-red)',
    color: '#fff',
    padding: '72px 24px'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1280,
    margin: '0 auto'
  }
}, /*#__PURE__*/React.createElement(Eyebrow, {
  color: "#fff",
  style: {
    opacity: .85,
    marginBottom: 40
  }
}, "Impact \xB7 FY 2024"), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4,1fr)',
    gap: 40
  }
}, [['$750M+', 'Annual research funding'], ['2,800+', 'Faculty physicians & scientists'], ['1,300+', 'Students enrolled'], ['#3', 'NIH funding among U.S. medical schools']].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
  key: l
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 700,
    fontSize: 56,
    lineHeight: 1
  }
}, n), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: 'var(--font-sans)',
    fontSize: 16,
    lineHeight: 1.4,
    marginTop: 12,
    opacity: .92
  }
}, l))))));

// ───────────────────────────────────────────────────────────────
//  Pull-quote band
// ───────────────────────────────────────────────────────────────

const PullQuote = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: 'var(--warm-gray)',
    padding: '96px 24px'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 900,
    margin: '0 auto'
  }
}, /*#__PURE__*/React.createElement("blockquote", {
  style: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 400,
    fontSize: 32,
    lineHeight: 1.35,
    color: '#000',
    margin: 0,
    padding: '8px 0 8px 32px',
    borderLeft: '3px solid var(--dark-red)'
  }
}, "Our relentless pursuit of cures requires collaboration that ", /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: 'var(--font-serif)',
    fontStyle: 'italic',
    fontWeight: 400,
    color: 'var(--washu-red)'
  }
}, "transcends"), " any single field, department or discipline."), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 24,
    paddingLeft: 35
  }
}, /*#__PURE__*/React.createElement(Eyebrow, {
  color: "#4a4a4a"
}, "\u2014 Dr. David H. Perlmutter \xB7 Dean, WashU Medicine"))));

// ───────────────────────────────────────────────────────────────
//  Callout band (apply / engage)
// ───────────────────────────────────────────────────────────────

const CalloutBand = () => /*#__PURE__*/React.createElement("section", {
  style: {
    padding: '80px 24px',
    maxWidth: 1280,
    margin: '0 auto'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gap: 24
  }
}, [{
  eye: 'Admissions',
  h: 'Apply to the MD program',
  p: 'Interviews begin September. Early decision deadline August 1.',
  cta: 'Start your application'
}, {
  eye: 'Clinical Care',
  h: 'Refer a patient',
  p: 'Same-day consults with 2,800+ faculty physicians across 40+ specialties.',
  cta: 'Refer now'
}, {
  eye: 'Research',
  h: 'Partner with our labs',
  p: 'Industry collaborations and sponsored research across every therapeutic area.',
  cta: 'Explore partnerships'
}].map(c => /*#__PURE__*/React.createElement("div", {
  key: c.h,
  style: {
    background: '#fff',
    border: '1px solid #d9d9d9',
    borderRadius: 8,
    padding: '28px 28px 32px',
    boxShadow: '0 1px 2px rgba(0,0,0,.05)'
  }
}, /*#__PURE__*/React.createElement(Eyebrow, null, c.eye), /*#__PURE__*/React.createElement("h3", {
  style: {
    fontFamily: 'var(--font-sans)',
    fontSize: 22,
    fontWeight: 700,
    lineHeight: 1.2,
    color: '#000',
    margin: '10px 0 4px'
  }
}, c.h), /*#__PURE__*/React.createElement("div", {
  style: {
    width: 44,
    height: 2,
    background: 'var(--washu-red)',
    margin: '8px 0 14px'
  }
}), /*#__PURE__*/React.createElement("p", {
  style: {
    fontFamily: 'var(--font-sans)',
    fontSize: 16,
    lineHeight: 1.5,
    color: '#000',
    margin: '0 0 18px'
  }
}, c.p), /*#__PURE__*/React.createElement(Button, null, c.cta)))));

// ───────────────────────────────────────────────────────────────
//  Footer
// ───────────────────────────────────────────────────────────────

const Footer = () => /*#__PURE__*/React.createElement("footer", {
  style: {
    background: '#000',
    color: '#fff',
    fontFamily: 'var(--font-sans)'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1280,
    margin: '0 auto',
    padding: '64px 24px 40px'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr 1fr 1fr',
    gap: 40,
    marginBottom: 48
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
  src: "../../assets/logos/washu-medicine-1l-rgb.svg",
  alt: "WashU Medicine",
  style: {
    height: 36,
    filter: 'brightness(0) invert(1)',
    display: 'block',
    marginBottom: 20
  }
}), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 14,
    lineHeight: 1.6,
    opacity: .78,
    maxWidth: 380,
    margin: 0
  }
}, "660 S. Euclid Avenue", /*#__PURE__*/React.createElement("br", null), "St. Louis, MO 63110", /*#__PURE__*/React.createElement("br", null), "(314) 362-6827")), [['Research', ['Institutes & Centers', 'Core Facilities', 'Clinical Trials']], ['Education', ['MD Program', 'Graduate Programs', 'Continuing Education']], ['Patient Care', ['Find a Doctor', 'Make an Appointment', 'Patient Resources']]].map(([h, links]) => /*#__PURE__*/React.createElement("div", {
  key: h
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontWeight: 700,
    fontSize: 13,
    letterSpacing: '.05em',
    textTransform: 'uppercase',
    marginBottom: 16
  }
}, h), links.map(l => /*#__PURE__*/React.createElement("a", {
  key: l,
  href: "#",
  style: {
    display: 'block',
    color: '#fff',
    opacity: .82,
    textDecoration: 'none',
    fontSize: 14,
    padding: '4px 0'
  }
}, l))))), /*#__PURE__*/React.createElement("div", {
  style: {
    borderTop: '1px solid rgba(255,255,255,.15)',
    paddingTop: 24,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 16
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 12,
    opacity: .7
  }
}, "\xA9 ", new Date().getFullYear(), " Washington University School of Medicine \xB7 All rights reserved."), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    gap: 20,
    fontSize: 12
  }
}, ['Privacy', 'Accessibility', 'Notice of Non-Discrimination', 'Marcomm'].map(l => /*#__PURE__*/React.createElement("a", {
  key: l,
  href: "#",
  style: {
    color: '#fff',
    opacity: .7,
    textDecoration: 'none'
  }
}, l))))));

// Export to window so App.jsx can pick them up
Object.assign(window, {
  Eyebrow,
  Headline,
  Button,
  RipplingShield,
  Header,
  HeroEditorial,
  HeroGradient,
  StoryCard,
  StoriesSection,
  Stats,
  PullQuote,
  CalloutBand,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/washu-medicine-web/components/Components.jsx", error: String((e && e.message) || e) }); }

})();
