# Session Handover - dorianguzman.github.io

Last updated: 2026-04-07

## Current State

**Site Status:** Redesigned, running locally on port 8001, NOT YET DEPLOYED

**What's Done:**
- ✅ Complete redesign: Tech/terminal → Minimalistic/professional/C-level
- ✅ Light mode implementation (white backgrounds, clean executive aesthetic)
- ✅ Typography: Archivo + Space Grotesk
- ✅ Simplified GSAP animations (removed terminal effects, grid, scan lines)
- ✅ Generated 10 keyframe images with Cloudflare Flux
- ✅ Cleaned up assets directory
- ✅ Ready for scroll-driven video implementation

**What's In Progress:**
- ⏳ Waiting for 5 Gemini-generated transition videos from user
- ⏳ Scroll-driven video implementation (deferred until videos ready)

**What's Not Started:**
- ❌ Favicon creation
- ❌ OpenGraph meta tags
- ❌ Git commit and deployment
- ❌ PDF CV creation

## Key Decisions

**Design Direction:**
- **Aesthetic:** Minimalistic/professional/C-level (Apple, Stripe, Linear-level polish)
- **Color Palette:**
  - Background: White (#FFFFFF)
  - Text Primary: Near-black (#0F172A)
  - Text Secondary: Warm slate (#64748B)
  - Accent: Sophisticated blue (#0891B2)
- **Animation Strategy:** Apple-style scroll-driven video transitions across entire site
- **Video Creation Method:** Gemini image-to-video (better than Remotion)
- **Image Generation:** Cloudflare Flux (new tool, replaces nano-banana-pro)

**Technical Decisions:**
- Single-page CV structure (kept)
- Light mode only (no dark mode toggle)
- Generous white space (120px section padding)
- Subtle scroll animations (20px reveals, 0.6-0.8s durations)
- GSAP + ScrollTrigger for video scrubbing
- 5 videos total (one per section)

## Files Overview

**Core Website:**
- `index.html` - Main CV page, light mode, clean structure
- `css/style.css` - Light mode styles, generous spacing, minimal
- `js/main.js` - Simplified GSAP animations
- `assets/images/profile.png` - Profile photo (503 KB)
- `assets/videos/` - Empty, ready for 5 Gemini videos

**Documentation:**
- `CLAUDE.md` - Project instructions (OUTDATED - still describes terminal aesthetic)
- `README.md` - Project overview
- `tasks/plan.md` - Project roadmap
- `tasks/handover.md` - This file
- `tasks/context.md` - Project learnings

**Not Yet Created:**
- `assets/favicon.svg` - Favicon (pending)
- `assets/apple-touch-icon.png` - iOS icon (pending)
- `assets/og-image.png` - OpenGraph preview (pending)
- `assets/pdf/dorian-guzman-cv.pdf` - Downloadable CV (pending)

## Next Session

**Immediate Tasks:**
1. Receive 5 Gemini-generated videos from user
2. Implement scroll-driven video playback with GSAP ScrollTrigger:
   - Pin each section while video scrubs
   - Tie video playback to scroll position
   - Canvas rendering for smooth 60fps
   - Preload videos for performance
3. Test scroll experience on desktop and mobile
4. Optimize video loading and playback

**Then:**
5. Create favicon (Cloudflare Flux or canvas-design)
6. Create OpenGraph image (Cloudflare Flux or canvas-design)
7. Add meta tags to index.html
8. Test locally one more time
9. Commit all changes to git
10. Deploy to GitHub Pages

**Finally:**
11. Create PDF CV
12. Update download button in contact section
13. Final testing and polish

## User Preferences & Corrections

**From This Session:**
- User wants minimalistic/professional/C-level, NOT tech/terminal aesthetic
- User wants high-impact scroll-driven videos (Apple product page quality)
- User prefers Gemini image-to-video over Remotion (better quality)
- User wants light mode (white/neutral, clean, airy)
- User wants subtle scroll effects (not aggressive animations)

## Gotchas

**Technical:**
- Local server uses port 8001 (port 8000 was already in use)
- Cloudflare Flux requires `--resize` flag for images > 512px
- Remotion's 3D particle effects weren't realistic enough
- Gemini image-to-video produces better quality transitions

**Process:**
- Site hasn't been committed or deployed yet - all changes are local
- CLAUDE.md is outdated (still describes old terminal aesthetic)
- User may need instructions for Gemini video generation

## Open Questions

None - clear path forward once videos are ready.
