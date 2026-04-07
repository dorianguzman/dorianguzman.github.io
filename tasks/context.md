# Context & Learnings - dorianguzman.github.io

## Project-Specific Rules

### [2026-04-07] | Design mismatch - tech aesthetic rejected | Always clarify aesthetic direction upfront
- Built entire site with tech/terminal/cyberpunk aesthetic (dark mode, green accents, terminal effects)
- User previewed and rejected - wanted minimalistic/professional/C-level instead
- **Rule**: Before building, explicitly confirm aesthetic direction with examples (Apple vs. Bloomberg vs. hacker)
- **Rule**: "Tech-focused" can mean different things - clarify if it's "developer portfolio" or "executive CV"

### [2026-04-07] | Remotion 3D effects insufficient for high-impact sites | Consider AI video generation for realism
- Created cinematic 3D videos in Remotion with particle systems and camera movements
- User rejected quality - Remotion's programmatic effects look synthetic
- Gemini's AI image-to-video produces more realistic, cinematic transitions
- **Rule**: For high-impact, Apple-level sites, AI video generation (Gemini, Runway) > programmatic animations
- **Rule**: Don't spend time building complex Remotion compositions if AI tools can do better

### [2026-04-07] | Cloudflare Flux replaces nano-banana-pro | Use correct generation + resize methodology
- nano-banana-pro is no longer available
- New tool: Cloudflare Flux at `/Users/dorianguzman/Work/repo/skills/cloudflare-flux`
- **Methodology**: Generate at 512x512 (~26 neurons), then use `--resize WxH` flag for upscaling (free, LANCZOS)
- **Rule**: Always use `--resize` flag for images larger than 512px
- Example: `python3 .../generate_image.py "prompt" output.png --resize 2560x1440 --steps 30`

### [2026-04-07] | Scroll-driven video approach for CV sites | Plan keyframe transitions before video creation
- User wants Apple-style scroll-driven videos across entire site
- Workflow: Design keyframes (start/end per section) → Generate videos → Implement scroll-scrubbing
- Each section transitions: Hero → Expertise → Experience → Education → Contact
- **Rule**: End image of Section N becomes start image of Section N+1 (seamless flow)
- **Rule**: Provide clear video specs (resolution, fps, duration, format) when delegating video creation

### [2026-04-07] | Local server port conflicts | Try alternative ports when 8000 is busy
- Port 8000 was already in use (previous server or another process)
- Had to use port 8001 instead
- **Rule**: If `python3 -m http.server 8000` fails with "Address already in use", try 8001, 8080, 3000

### [2026-04-07] | Video z-index layering confusion | Use position:fixed + low z-index for background video
- Initially tried z-index:-1 which made video disappear behind body
- Spent time debugging when the issue was simple positioning
- **Rule**: Background video needs `position: fixed; z-index: 1;` with content sections at `z-index: 10;`
- **Rule**: Negative z-index values can cause elements to render behind parent containers

### [2026-04-07] | Video scrubbing implementation requires precise setup | Follow working pattern exactly
- Implemented video scrubbing with ScrollTrigger - works when done correctly
- Critical: Must use `getCurrentTime()` utility to calculate normalized progress across total document height
- Critical: ScrollTrigger must pin sections, calculate progress per section, seek video to that progress
- **Rule**: Don't reinvent video scrubbing - the pattern that works is: pin section → calculate progress (0-1) → video.currentTime = progress * duration
- **Rule**: Video must be preloaded and canplaythrough before scrubbing works smoothly

### [2026-04-07] | Text visibility over video background | Color/opacity/contrast issue not yet resolved
- Removed card backgrounds (rgba backgrounds) to try plain text approach
- Text in tech stack, experience, education sections NOT visible over video
- Contact section text IS visible (uses same color/weight)
- **Issue**: Unclear why some sections show text and others don't - not z-index (contact works)
- **Rule**: When text disappears over video, check: (1) color contrast, (2) opacity values, (3) z-index layering, (4) backdrop-filter interference
- **Next session**: Debug by inspecting computed styles on visible vs invisible text to find the difference

---

## Log Format
`[YYYY-MM-DD] | what went wrong | rule to prevent it`
