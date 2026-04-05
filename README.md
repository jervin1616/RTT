# Recovery Transparency — Individual Landing Page

Individual-facing marketing site for **Transparency Technologies LLC**.

Built with pure HTML, CSS, and vanilla JavaScript. No frameworks. No dependencies. No tracking.

---

## Brand Colors

| Token | Hex | Usage |
|---|---|---|
| Navy Deep | `#0d2444` | CTA section background |
| Brand Blue | `#1a3f72` | Primary brand color, borders, principles text |
| Interactive | `#3a7fd4` | Interactive elements |
| Sky | `#6aaee8` | Eyebrows, accents, nav links |
| Frost | `#b8d8f4` | Hero H1 em, ghost button text |
| Pale | `#deedf8` | Card backgrounds, step circles |
| Amber | `#c8783a` | RTI score, primary amber |
| Amber Light | `#e09858` | Hero H1 strong, amber highlights |
| Gold | `#c8a040` | Accent gold |
| Night | `#080f1a` | Hero + features + footer background |
| Deep | `#0f1e2e` | Feature cells |
| Slate | `#162840` | Philosophy strip, RTI widget |
| Paper | `#f4f1eb` | Potential equation section |
| Warm | `#ede9e0` | How It Works section |
| White | `#fdfcfa` | Testimonials, cards |
| Text Dark | `#0d1e2e` | Body text |
| Text Mid | `#3a5268` | Secondary body text |
| Text Soft | `#6a88a0` | Muted text, feature copy |

## Font Stack

- **Display / Headings:** Lora (Google Fonts) — serif, italic for emphasis
- **Body:** Karla (Google Fonts) — weights 300, 400, 500, 600
- Fallbacks: Georgia (Lora), Helvetica Neue (Karla)

## File Structure

```
/
├── index.html                  Main landing page
├── css/
│   └── styles.css              All styles — brand tokens, animations, responsive
├── js/
│   └── main.js                 Scroll reveal, nav behavior, carousel, smooth scroll
├── assets/
│   └── images/
│       ├── logo.png            ← Place logo file here (transparent PNG recommended)
│       └── screenshots/
│           ├── screen-insights.png     ← Insights / Recovery Overview screen
│           ├── screen-assess.png       ← RTI Assessment results screen
│           ├── screen-checkin.png      ← Meeting Attendance GPS check-in screen
│           └── screen-step4.png        ← Fourth Step Inventory screen
├── .gitignore
└── README.md
```

## Adding App Screenshots (Phone Carousel)

The hero section phone mockup is a 4-slide carousel driven by real screenshots.

1. Save your screenshots to `assets/images/screenshots/`
2. Use these exact filenames (or update the `src` attributes in `index.html`):
   - `screen-insights.png` — Insights / Recovery Overview
   - `screen-assess.png` — RTI Assessment with category scores
   - `screen-checkin.png` — GPS Meeting Attendance clock-in
   - `screen-step4.png` — Fourth Step Inventory

Screenshots should be portrait orientation at the phone's native resolution. The carousel will crop from the top.

## Logo Notes

The nav and footer both reference `assets/images/logo.png`.

- **Nav:** Logo displays at `height: 42px` on the dark navy background. For best results, use a **transparent PNG** version of the logo (the light-background version will show a box around it on dark backgrounds).
- **Footer:** Logo is rendered white via `filter: brightness(0) invert(1); opacity: 0.45` — this works correctly with a transparent PNG of the original colored logo.

## GitHub Pages Setup

To serve this site via GitHub Pages:

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **Deploy from a branch**
4. Choose branch: `main` (or your current branch), folder: `/ (root)`
5. Click **Save**
6. Your site will be live at `https://<username>.github.io/<repo-name>/`

> Note: Google Fonts require an internet connection to load. The site renders correctly without them using serif/sans-serif fallbacks.

## Maintenance Notes

**To update App Store links:**
Find the `#download` section in `index.html` and replace `href="#"` on both download buttons with your App Store and Google Play URLs.

**To add real testimonials:**
Find `.test-grid` in `index.html` and replace the three placeholder `.test-card` blocks with real testimonials. Update the avatar initials, quote text, name, and byline.

**To add app screenshots:**
Replace the `<img>` tags inside each `.screen-slide` in the hero section of `index.html`, pointing them to `assets/images/screenshots/<filename>.png`. Screenshots are auto-rotated every 3.2 seconds.

**To add more carousel slides:**
Duplicate a `.screen-slide` div in `index.html`, add a corresponding `.screen-dot` button, and the JS will handle it automatically.

---

*Recovery Transparency is a voluntary recovery accountability tool and is not a medical service or clinical platform.*
