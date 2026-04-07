# Project Plan - dorianguzman.github.io

Last updated: 2026-04-07

## Goal

Build a minimalistic, professional, C-level personal CV website with Apple-style scroll-driven video transitions.

## Status: Phase 2 - Core Build (In Progress)

### Phase 1: Foundation ✅ COMPLETE
- [x] Project setup (README, CLAUDE.md, .gitignore, tasks/)
- [x] Tech stack selected (Vanilla HTML/CSS/JS, GSAP, GitHub Pages)
- [x] Initial design direction (CHANGED - was terminal, now minimalistic)

### Phase 2: Design & Build 🔄 IN PROGRESS
- [x] Redesign to minimalistic/professional/C-level aesthetic
- [x] Light mode implementation (white, clean, generous spacing)
- [x] HTML structure (hero, expertise, experience, education, contact)
- [x] CSS styling (light mode, Archivo + Space Grotesk)
- [x] Basic GSAP animations (subtle fade-ins, scroll reveals)
- [x] Email wall with localStorage (for CV download)
- [x] Responsive design (mobile-first)
- [x] Generate keyframe images for video transitions (Cloudflare Flux)
- [ ] **→ Receive 5 Gemini-generated transition videos** (BLOCKED - waiting for user)
- [ ] Implement scroll-driven video playback (GSAP ScrollTrigger)
- [ ] Canvas rendering for smooth 60fps video scrubbing
- [ ] Performance optimization (preloading, lazy loading)

### Phase 3: Polish & Assets ⏳ NOT STARTED
- [ ] Create favicon (Cloudflare Flux or canvas-design)
- [ ] Create OpenGraph image (Cloudflare Flux or canvas-design)
- [ ] Add meta tags (favicon links, OG tags, Twitter Card)
- [ ] Create PDF CV
- [ ] Link PDF to download button
- [ ] Final testing (desktop, mobile, print)

### Phase 4: Deploy ⏳ NOT STARTED
- [ ] Commit all changes to git
- [ ] Push to main branch
- [ ] Verify GitHub Pages deployment
- [ ] Test live site at https://dorianguzman.github.io
- [ ] Update LinkedIn/GitHub with new CV link

### Phase 5: Iterate ⏳ NOT STARTED
- [ ] Gather feedback
- [ ] Performance optimizations
- [ ] Add analytics (if desired - Cloudflare Web Analytics or none)
- [ ] Content updates as needed

## Video Transition Workflow

**Concept:** Seamless scroll-driven video background across entire site

**Sections & Videos:**
1. **Hero** - Single point → Network (emergence)
2. **Expertise** - Network → Organized streams (systematization)
3. **Experience** - Streams → Complex patterns (growth)
4. **Education** - Patterns → Geometric foundation (foundation)
5. **Contact** - Foundation → Dispersing particles (opening)

**Implementation:**
- Use GSAP ScrollTrigger to scrub videos based on scroll position
- Pin each section while its video plays
- Canvas rendering for smooth playback
- Preload videos for instant scrubbing

**Status:** Waiting for user to generate 5 videos with Gemini

## Skill Pipeline

**Creative Studio:**
- UI UX Pro Max → Design direction (minimalistic/professional)
- Cloudflare Flux → Keyframe images ✅ (10 images generated)
- Gemini (external) → Video transitions (pending)
- GSAP + ScrollTrigger → Scroll-driven playback (next)

## Notes

- Original design (terminal aesthetic) was rejected
- Redesigned to minimalistic/professional/C-level
- Remotion videos were rejected (quality insufficient)
- User will provide Gemini-generated videos instead
- Site is ready for video integration once videos are received
