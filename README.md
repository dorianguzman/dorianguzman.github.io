# dorianguzman.github.io

Personal site of Dorian Guzman: AI systems builder, co-founder and operator. One page that shows both sides: technical work (agentic AI, data science, quantitative research) and strategy, operations and go-to-market.

**Live:** https://dorianguzman.github.io

## Stack

- Static HTML, CSS and vanilla JavaScript. No build step.
- GSAP 3.12.5 + ScrollTrigger, vendored in `js/vendor/` (no CDN at runtime).
- Inter from Google Fonts. Hosted on GitHub Pages from `main`.

## How the code is organised

- `css/style.css`: every colour, size, spacing and duration is a token in `:root`.
- `js/main.js`: the contact form and all motion. Timings live in one `MOTION` object; each effect is one small function.
- Motion is opt-in from the markup:
  - `data-split`: headline rises word by word
  - `data-rise`: block fades up as it enters
  - `.count` with `data-to`: number counts up
- With reduced motion or without JavaScript, everything is simply visible.

## Assets

- `assets/favicon.svg` is the single source for the favicon PNGs and the Apple touch icon.
- `assets/images/og-image.png` (1200 x 630) is rendered from the site's own stylesheet.
- `assets/cv/dorian-guzman-cv.pdf` is the CV linked from the page.
- `llms.txt` summarises the page for AI crawlers; keep it in sync with the copy.

## Run locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy

Push to `main`. GitHub Pages publishes within a minute or two.

## Links

- LinkedIn: https://www.linkedin.com/in/dorianguzmanrazo/
- GitHub: https://github.com/dorianguzman
