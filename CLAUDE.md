# Claude Code Instructions - dorianguzman.github.io

> **First:** Read `tasks/handover.md`, `tasks/plan.md`, and `tasks/context.md`

## Project Overview

Personal website and CV for Dorian Guzman - showcasing experience in agentic AI systems, quantitative research, and AI product development.

**Site URL:** https://dorianguzman.github.io

## Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript (vanilla, no frameworks for simplicity)
- **Deployment:** GitHub Pages (auto-deploys from main branch)
- **Design:** Modern, professional, responsive

## Project Structure

```
dorianguzman.github.io/
├── index.html           # Main CV/portfolio page (tech-focused terminal aesthetic)
├── css/
│   └── style.css       # Styles (dark slate + green accent, cyberpunk terminal aesthetic)
├── js/
│   └── main.js         # GSAP animations, email wall, scroll effects
├── assets/
│   ├── images/         # Profile image
│   │   └── profile.png
│   └── pdf/            # Downloadable CV PDF (to be added)
├── tasks/              # Project management docs
├── CLAUDE.md           # This file
└── README.md
```

## Development Workflow

**Local preview:**
```bash
cd /Users/dorianguzman/Work/repo/dorianguzman.github.io
python3 -m http.server 8000
# Visit http://localhost:8000
```

**Deploy:**
```bash
git add .
git commit -m "Update content"
git push origin main
# Live in 1-2 minutes at https://dorianguzman.github.io
```

## Content Guidelines

- **Headline:** Agentic AI Systems end-to-end | Quantitative Research | HSG MBA | PhD in Optimization
- **Focus areas:**
  - Agentic AI & Automation
  - Quantitative Research & Trading Systems
  - Full-Stack AI Product Development
  - AI Transformation
- **LinkedIn:** https://www.linkedin.com/in/dorianguzmanrazo/
- **GitHub:** https://github.com/dorianguzman

## Design Principles

- **Aesthetic:** Sophisticated tech executive meets terminal interface - refined cyberpunk (Bloomberg Terminal meets Matrix)
- **Visual Identity:** Dark slate backgrounds (#0F172A, #1E293B, #020617) with vibrant green accents (#22C55E)
- **Typography:** Archivo (headings) + Space Grotesk (body) from Google Fonts
- **Features:**
  - Animated terminal typing effect ("whoami")
  - Profile image with rotating glowing tech border
  - Grid background pattern + scan line animations
  - Email wall for CV download (localStorage-based)
  - GSAP scroll animations with ScrollTrigger
  - Scroll progress bar
- **Tech Stack:** Vanilla HTML/CSS/JS + GSAP 3.12.5
- Mobile-responsive, printable (CSS print styles), accessible (semantic HTML, ARIA labels)

## Git Safety

- Follow git safety rules from root `/Users/dorianguzman/Work/repo/CLAUDE.md`
- Never commit sensitive information
- Commit project docs (tasks/, CLAUDE.md, README.md)

## Session Management

- **tasks/context.md**: Update immediately after any correction or error fix
- **tasks/handover.md**: Update after completing tasks, before ending session
- **tasks/plan.md**: Only update when the plan actually changed
