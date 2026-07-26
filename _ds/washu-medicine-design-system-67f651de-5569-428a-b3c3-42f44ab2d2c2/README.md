# WashU Medicine Design System

Compliant with the **WashU Medicine Brand Guidelines V1.0 (March 2025)**.
Reconstructed from the official guidelines PDF and the ICS Component Library
codebase (`lib/`).

## About the brand

WashU Medicine is the unified brand for Washington University School of Medicine —
medical school, research enterprise, and clinical care leader. Per guidelines
pg. 19, all departments, centers, institutes, labs, clinics, and programs
operate under a **single logo and a single brand** — no sub-brands, no custom
lockups.

**Purpose** (pg. 10): "To connect the power of care, education and research
into something greater — because our relentless pursuit of cures requires
collaboration that transcends any single field, department or discipline."

**Promise** (pg. 10): "Bring the brightest minds together to do better and
push further, transforming care for all."

## Personality traits (pg. 7) — all five apply to every piece of work

- **Historically Ambitious** — proud, impact-focused, never self-promotional.
- **Inherently Curious** — disciplined inquiry, ethical, patient-safety first.
- **Objectively Optimistic** — confident but grounded in fact.
- **Intentionally Interconnected** — collaborative, expertise preserved.
- **Undeniably Creative** — poetic precision, unconventional within rigor.

## Voice spectrum (pg. 8)

Shape-shift along these axes for audience, but always recognizable:
Humble ↔ Impactful · Disciplined ↔ Innovative · Realistic ↔ Hopeful ·
Authoritative ↔ Inviting · Audacious ↔ Confident.

## Sources

| Source | What it gave us |
|---|---|
| `uploads/WashU-Medicine-Brand-Guidelines.pdf` | **Authoritative** — voice, logo, naming, typography, color, gradient field, rippling shield, icons, photography. |
| `lib/layouts/styles/tokens.css` | Web-specific scale + spacing + shadow tokens. |
| `lib/layouts/WashUMed*.svelte` | Header / footer / layout composition patterns. |
| `https://medicine.washu.edu/…/washu-medicine-1l-rgb.svg` | Official 1-line horizontal logo (saved to `assets/logos/`). |

## Index

```
assets/               Logos (primary, reverse), icons
colors_and_type.css   CSS tokens — the source of truth for code
fonts/                Typekit loader + Calibri/Georgia fallback notes
preview/              Design System review cards, grouped
ui_kits/
  washu-medicine-web/ React UI kit for medicine.washu.edu
uploads/              Brand guidelines PDF (reference)
SKILL.md              Agent-invocable skill manifest
README.md             You are here
```

---

## Content fundamentals

**Naming (pg. 20–22)** — NON-NEGOTIABLE:
- Use **"WashU Medicine"** on all references. First reference may use
  "Washington University School of Medicine"; subsequent always WashU Medicine.
- Owned units: **"WashU Medicine + Unit Name"** (e.g. "WashU Medicine
  Department of Psychiatry", "WashU Medicine Gastroenterology").
- Non-owned / external work: **"…at WashU Medicine"** (e.g. "Gordon Lab at
  WashU Medicine").
- **Never** break "WashU Medicine" across two lines.
- **Never** set "WashU Medicine" in all caps.
- Never use: WUSM, WU, SOM, WUM, or "Washington University" (use "WashU").
- Don't capitalize "the university / the school / the department" when used
  on their own.
- Only **one** WashU logo per layout even when multiple schools participate.

**Voice** — third-person, factual, impact-forward. "WashU Medicine researchers
discovered…". Avoid self-congratulation; let the work speak. Narrative
themes to draw on (pg. 9): *"a diagnosis changes … everything"*, *"too
ambitious for boundaries, too courageous for convention"*, *"there is poetry
in science"*, *"breakthroughs must benefit everyone"*.

**Tone on medical / care communications (pg. 45)**: warmer. Limit WashU Red
as background color; prefer Warm Gray, White, or the Gradient Field.

**Casing**: sentence case for most headlines and body. Eyebrows are all-caps
with +50 tracking. Never set the "WashU Medicine" wordmark itself in caps.

**Emoji**: Never.

**Numbers & stats**: factual, cited, not decorated. Large serif-italic
emphasis is the brand signature for a single powerful word in a headline —
not for stats.

---

## Visual foundations

### Color system (pg. 34–37)

**Primary (always the hero):**
- **WashU Red** `#BA0C2F` — Pantone 200.

**Secondary:**
- **Warm Gray** `#F5F2EE` — Pantone Warm Gray 1c @ 35%. **This replaces the
  "cool `#f5f5f5`" I had previously.** Warm Gray is the dominant neutral
  background in brand work; white and black balance it.
- **White** `#FFFFFF`.
- **Black** `#000000`.
- **Dark Red** `#971B2F` — Pantone 7427.

**Accents (sparingly, never compete with WashU Red):**
| Name | Hex | Pantone |
|---|---|---|
| WashU Green | `#215732` | 350 |
| Teal | `#007D8A` | 7713 |
| Dark Green | `#13322B` | 627 |
| Mint | `#B5E3D8` | 573 |
| Coral | `#FF6D6A` | 2345 |
| Gold | `#F1B434` | 143 |
| Gray | `#D9D9D9` | Cool Gray |

**Color hierarchy (pg. 45):** WashU Red grounds every layout. Warm Gray and
White dominate surfaces. Accents garnish only. In care communications, avoid
WashU Red backgrounds — use Warm Gray, White, or Gradient Field.

**Accessibility (pg. 38):** The guidelines publish a full contrast matrix.
Approved text-on-background combinations only. When in doubt, test.

### Typography (pg. 27–32)

**Brand fonts (Adobe Typekit):**
- **IvyStyle Sans** (Light, Regular, Italic, Semibold, Bold, Italic) —
  headlines, subheadlines, body, eyebrows.
- **IvyPresto Headline** (Regular, Bold) — **italic emphasis only**
  within headlines.

**System fallback (officially sanctioned):**
- **Calibri** → replaces IvyStyle Sans.
- **Georgia Italic** → replaces IvyPresto Headline Italic.

Load Typekit:
```html
<link rel="stylesheet" href="https://use.typekit.net/mav2zlt.css">
```

**Hierarchy (pg. 30):**

| Level | Font / weight | Notes |
|---|---|---|
| Eyebrow / Accent | IvyStyle Sans Bold | All Caps, 50 tracking, min 10pt (~13.33px) |
| Headline | IvyStyle Sans Bold | IvyPresto Headline *Italic* only for emphasis words |
| Subheadline | IvyStyle Sans Bold | — |
| Body | IvyStyle Sans Regular | Bold & Italic as needed, min 10pt |

**Alignment:** left by default. Center reserved for display headlines /
special cases.

**Tracking:** optical (when the design tool supports it).

**Emphasis treatment — the brand's single most recognizable typographic
move:** set the headline in IvyStyle Sans Bold (black), and swap *one or two
final / key words* into IvyPresto Headline Italic in WashU Red. Example:
*"Our patients are <em>powerful</em>."* Used **sparingly**.

**Do not:**
- Set IvyPresto Italic for the whole sentence.
- Mix Adobe fonts with system fonts in the same piece.
- Use a different weight or style of IvyStyle Sans for headlines.
- Break "WashU Medicine" across lines.
- Overuse all caps (limit for legibility).

### Logo (pg. 13–17)

- **Horizontal 1-line logo** (shield + wordmark) is primary.
- **Stacked** logo only when space forbids horizontal.
- **Full color** on light backgrounds.
- **Reverse** (white wordmark + reverse shield) on dark backgrounds.
- **Never** mix full-color shield with white wordmark.
- **Never** use the logo in all red (only full color, black, or white reverse).

**Minimum size:** 30px tall (digital horizontal) or 46px tall (digital stacked).
**Clear space:** equal to shield height/width on all sides.

**The shield alone** may be used as a design element in any single brand
color. The wordmark **never** appears without the shield.

**Misuse to avoid (pg. 16):** don't substitute fonts, add department names
inside the lockup, rotate/stretch, fill the shield with white, or create
custom lockups with entity names.

### Design elements

**Gradient Field (pg. 40–46)** — brand-unique signature:
- Flows from WashU Red (anchored top-left, ≥50% of field) through accent
  colors.
- Use for covers, masks, accents, or behind photography.
- May be rotated counterclockwise up to 90°, cropped, compressed up to 50%.
- Don't: create new gradients, crop to one color, pair with the university
  shield, compress beyond 50%.
- **Text on gradient:** white only. Long-form text not allowed; use solid
  backgrounds for body copy.

**Rippling Shield (pg. 47–51)** — secondary signature:
- Shield outline in radiating lines, WashU Red or White only.
- Min 3 radiating lines. Use as texture, icon, mask, or photo overlap.
- Don't: rotate, multiply, distort, pair with the university shield, or use
  as a containment device for body copy.

### Iconography (pg. 53–56)

- Official icon library is available via WashU Medicine Marcomm.
- **Duotone** (WashU Red + Black) is the primary style. Single-color
  variants allowed in any brand color with accessible contrast.
- **Sizing:** 192×192 canvas · 8px clear space · 8pt stroke weight.
- **Do not:** change shape, add shadows or gradients, use as a logo/lockup.

**Until the official icon library is supplied**, our UI kit uses minimal
inline SVG glyphs (search, chevron, home) matched to the duotone style. Flag
this as a substitution in production handoff.

**Emoji:** never.

### Photography (pg. 58–65)

Four principles (all four can apply to one image):

1. **Compassion Captured** — authentic emotion between providers/patients,
   mentors/students.
2. **Momentous Moments** — strong portraits of researchers and clinicians.
3. **Unique Perspective** — dynamic angles, close-ups, innovative framing.
4. **Collaboration in Action** — shared discovery between minds.

**Look:** vibrant, balanced color. Natural skin tones preserved. No heavy
grading, no B&W filters, no vignettes. Mix of tight detail shots and wide
shots (wide shots leave room for the Rippling Shield overlay).

**Source:** `washumed.photoshelter.com` (WashU Key required).

### Corner radii, shadows, borders

Not spec'd by the guidelines — these are pragmatic web choices anchored to
the existing codebase. Conservative radii (4 / 8 / 12 px). Borders in Gray
`#D9D9D9`. Shadows used sparingly on cards and elevated surfaces.

### Animation

- Subtle Gradient Field motion (WashU Red always dominant, text always in
  high-contrast area).
- Rippling Shield animates outward from center only — never contracts.
- UI hover states: 0.2s ease-in-out. No bounces or springs.
