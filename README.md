# dorianguzman.github.io

Tech-focused single-page CV website for Dorian Guzman showcasing expertise in agentic AI systems, quantitative research, and AI product development.

**Live Site:** https://dorianguzman.github.io

## Tech Stack
- **Frontend:** Vanilla HTML5, CSS3, JavaScript
- **Animations:** GSAP 3.12.5 + ScrollTrigger
- **Design:** Terminal aesthetic with cyberpunk influences (dark slate + green accent)
- **Deployment:** GitHub Pages (auto-deploy from main branch)

## Features
- Terminal typing effect on hero section
- Animated profile image with rotating glowing border
- Grid background pattern + scan line animation
- Email wall for CV download (localStorage-based)
- GSAP scroll animations with progress bar
- Mobile-responsive design
- Print-optimized styles
- Accessibility features (semantic HTML, ARIA labels)

## Local Development
```bash
# Serve locally
cd /Users/dorianguzman/Work/repo/dorianguzman.github.io
python3 -m http.server 8000
# Visit http://localhost:8000
```

## Deployment
Push to `main` branch → auto-deploys to GitHub Pages (live in 1-2 minutes)

## Project Structure
```
dorianguzman.github.io/
├── index.html           # Main CV page
├── css/style.css        # Styles (dark slate + green accent theme)
├── js/main.js          # GSAP animations + email wall
├── assets/
│   ├── images/profile.png
│   └── pdf/            # CV PDF (to be added)
└── tasks/              # Project management docs
```
