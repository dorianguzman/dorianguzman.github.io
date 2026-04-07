# Scroll-Driven Background Visual Plans
## CV Website for AI Systems Executive

**Website Context:**
- Aesthetic: Minimalistic, professional, C-level (Apple/Stripe-level quality)
- Color Palette: White backgrounds (#FFFFFF), near-black text (#0F172A), warm slate (#64748B), sophisticated blue accent (#0891B2)
- 5 Sections: Hero → Expertise → Experience → Education → Contact
- Goal: Subtle, elegant depth that enhances professionalism without distraction

---

## PLAN A: DEPTH LAYERS (PARALLAX) - PRIMARY CHOICE

### 1. Scene Description

**The Architectural Space:**
A pristine, minimal architectural interior featuring clean geometric planes at varying depths. Think of a sophisticated gallery space with large-scale minimalist walls and subtle architectural details. The environment uses:

- **Materials**: Smooth matte walls (off-white #FAFAFA to pure white #FFFFFF gradient), soft concrete textures with barely-visible grain
- **Lighting**: Diffused natural light from the upper left, creating soft shadows that define depth without harsh contrast
- **Mood**: Contemplative, sophisticated, spacious - like a modern museum or high-end design studio
- **Key Element**: A subtle vertical accent wall in the mid-ground using the blue accent (#0891B2) with 15% opacity, acting as a sophisticated color field
- **Details**: Minimal geometric elements - thin shadow lines where walls meet, a suggestion of floor plane, perhaps a single horizontal architectural detail line in warm slate (#64748B)

### 2. Layer Breakdown (4 Depth Layers)

**Layer 1 - Far Background (slowest parallax, 0.3x scroll speed):**
- Large white wall plane with subtle gradient (top: #FAFAFA, bottom: #FFFFFF)
- Very soft ambient shadow in upper corners
- Suggestion of architectural space beyond

**Layer 2 - Mid Background (0.5x scroll speed):**
- Vertical accent plane with blue tint (#0891B2 at 15% opacity over white)
- Positioned slightly off-center (60% from left edge)
- Casts a barely-visible soft shadow on Layer 1

**Layer 3 - Mid Foreground (0.7x scroll speed):**
- Clean white wall plane on left side
- Warm slate horizontal detail line (#64748B, 1px thick, 40% opacity) at golden ratio height
- Soft shadow defining the edge where this plane meets the background

**Layer 4 - Foreground (1.0x scroll speed, normal):**
- Subtle floor plane suggestion at bottom (gradient from #FAFAFA to transparent)
- Soft shadow gradient where floor meets walls
- Minimal depth cue - perhaps a thin geometric frame element in extreme foreground

### 3. Color Palette Specifications

**Primary Surfaces:**
- Background walls: #FFFFFF to #FAFAFA gradient (vertical, subtle)
- Floor plane: #FAFAFA with 60% to 0% opacity gradient (bottom to top)

**Accent Elements:**
- Blue accent plane: #0891B2 at 15% opacity over #FFFFFF (results in #F0F9FC)
- Detail lines: #64748B at 30-40% opacity
- Text would sit on this (not part of background): #0F172A

**Shadows:**
- Soft shadows: #0F172A at 3-8% opacity
- Shadow blur radius: 40-80px for soft, diffused quality
- No hard edges

### 4. Scroll Behavior

**Parallax Speed Multipliers:**
- Layer 1 (Far Background): 0.3x - moves very slowly, creates depth
- Layer 2 (Mid Background): 0.5x - subtle movement
- Layer 3 (Mid Foreground): 0.7x - more noticeable shift
- Layer 4 (Foreground): 1.0x - moves with scroll normally

**Effect:**
As user scrolls down, background layers lag behind foreground, creating a sense of moving through a 3D space. The blue accent plane slides across the composition, creating visual interest without distraction.

### 5. Section-by-Section Keyframes

#### SECTION 1: HERO (0% scroll)

**START (Keyframe 1):**
- **Composition**: Symmetrical, centered, spacious
- **Layer 1**: White wall fills frame, soft vignette in corners
- **Layer 2**: Blue accent plane positioned at right edge (80% from left), barely visible
- **Layer 3**: White plane on far left (20% from left), detail line at upper third
- **Layer 4**: Floor gradient just beginning at bottom 15% of frame
- **Camera**: Straight-on, eye-level perspective

**END (Keyframe 2 - transition to Expertise):**
- **Layer 1**: Shifted up slightly (parallax effect beginning)
- **Layer 2**: Blue plane has moved to 60% from left (drifting into view)
- **Layer 3**: White plane now at 30% from left, detail line more prominent
- **Layer 4**: Floor gradient now covers bottom 20%
- **Overall**: Gentle shift creating depth, blue accent starting to emerge

#### SECTION 2: EXPERTISE (25% scroll)

**START (Keyframe 2):**
- Same as Hero END

**END (Keyframe 3 - transition to Experience):**
- **Layer 1**: Continues upward drift, gradient slightly more pronounced
- **Layer 2**: Blue plane at 50% (center-left), now a clear focal element
- **Layer 3**: White plane at 40% from left, detail line shifts to center height
- **Layer 4**: Floor gradient at 25%, shadow definition increases
- **Overall**: Blue accent is now key visual anchor, depth pronounced

#### SECTION 3: EXPERIENCE (50% scroll)

**START (Keyframe 3):**
- Same as Expertise END

**END (Keyframe 4 - transition to Education):**
- **Layer 1**: Upper portion beginning to exit frame top, revealing more ambient space
- **Layer 2**: Blue plane at 40% from left (continuing leftward drift)
- **Layer 3**: White plane at 50% (center), detail line at lower third
- **Layer 4**: Floor gradient at 30%, subtle geometric frame element appears at left edge
- **Overall**: Maximum depth perception, layers clearly separated

#### SECTION 4: EDUCATION (75% scroll)

**START (Keyframe 4):**
- Same as Experience END

**END (Keyframe 5 - transition to Contact):**
- **Layer 1**: Mostly above frame, showing deep background space
- **Layer 2**: Blue plane at 30% from left (continuing journey across frame)
- **Layer 3**: White plane at 60% from left, detail line at bottom third
- **Layer 4**: Floor gradient at 35%, geometric frame more defined
- **Overall**: Sense of having traveled through space, open feeling

#### SECTION 5: CONTACT (100% scroll)

**START (Keyframe 5):**
- Same as Education END

**END (Keyframe 6 - final state):**
- **Layer 1**: Completely above frame, pure ambient background
- **Layer 2**: Blue plane at 20% from left (nearly exited), becoming subtle again
- **Layer 3**: White plane at 70% from left, detail line at bottom
- **Layer 4**: Floor gradient at 40%, geometric frame complete
- **Overall**: Completion of journey, settled elegant composition, symmetry restored

### 6. Asset Specs for Gemini AI

#### Image Assets (Keyframes)

**Resolution & Aspect Ratio:**
- 3840 × 2160px (4K landscape) - allows for parallax movement without quality loss
- Alternative: 2560 × 1440px if file size is concern
- Aspect ratio: 16:9 (standard desktop viewport)

**Number of Keyframes:**
- 6 total keyframe images (start/end of each section)
- Keyframe 1: Hero START (0% scroll)
- Keyframe 2: Hero END / Expertise START (20% scroll)
- Keyframe 3: Expertise END / Experience START (40% scroll)
- Keyframe 4: Experience END / Education START (60% scroll)
- Keyframe 5: Education END / Contact START (80% scroll)
- Keyframe 6: Contact END (100% scroll)

**Layer Export:**
Each keyframe should be exported as:
- **Option A**: Single composite image (easiest for web implementation)
- **Option B**: 4 separate PNG layers with transparency (for maximum parallax control)

If using Option B, export dimensions:
- Layer 1-3: 4200 × 2400px (extra bleed for parallax movement)
- Layer 4: 3840 × 2160px (no extra needed)

#### Video Assets (If Implementing Smooth Transitions)

**Specifications:**
- Resolution: 3840 × 2160px (4K)
- Frame rate: 30fps (smooth, web-optimized)
- Duration: 2-3 seconds per transition (between keyframes)
- Format: MP4 (H.264 codec), WebM (VP9 codec) for fallback
- Compression: High quality, ~15-25 Mbps bitrate
- Total: 5 transition videos (between the 6 keyframes)

**Video Behavior:**
Each video smoothly interpolates between keyframe states, creating fluid parallax motion triggered by scroll position.

#### Gemini AI Prompting Tips

**Architectural/Minimalist Aesthetic:**

```
Core prompt structure:
"Minimalist architectural interior, clean geometric planes at varying depths,
pristine white walls with soft natural lighting from upper left, subtle shadows
defining depth, modern gallery aesthetic, extremely minimal, no decorations,
no furniture, pure architectural forms, professional photography style,
medium format camera, f/4 depth of field, soft focus background"

Color guidance:
"Color palette: pure white (#FFFFFF) primary surfaces, off-white (#FAFAFA)
gradients, single accent plane in subtle cyan-blue (#0891B2 at low opacity),
warm gray (#64748B) minimal detail lines, soft shadows using near-black
(#0F172A) at very low opacity 3-8%"

Composition guidance for each keyframe:
"[Insert specific layer positions from keyframe descriptions above],
horizontal architectural planes, vertical accent wall, perspective view,
eye-level camera, subtle depth of field, ultra-minimal, no texture noise,
smooth matte surfaces, diffused lighting, no harsh shadows"

Style references to include:
"in the style of: Apple product photography, minimalist gallery spaces,
John Pawson architecture, Tadao Ando concrete minimalism, contemporary
art museum interiors, Scandinavian design, less is more philosophy"

Technical quality:
"high resolution, professional architectural photography, perfect white
balance, no grain, no chromatic aberration, sharp focus on mid-ground,
subtle depth of field, natural diffused lighting, no artificial elements"
```

**Prompt for Each Keyframe:**

Keyframe 1 (Hero START):
```
"Minimalist architectural interior, symmetrical composition, large white wall
centered in frame, subtle off-white to pure white gradient, blue accent plane
barely visible at far right edge (80% from left), clean white plane at far
left (20%), thin horizontal detail line in warm gray at upper third, subtle
floor gradient at bottom 15%, soft natural lighting from upper left, minimal
shadows, pristine and spacious, professional architectural photography,
4K resolution, Apple-level minimalism"
```

Keyframe 2 (Expertise START):
```
"Minimalist architectural interior, white wall shifted slightly upward,
blue accent plane (#0891B2 tint) now at 60% from left becoming more visible,
white foreground plane at 30% from left, horizontal detail line prominent,
floor gradient covering bottom 20%, soft shadows defining depth between
layers, natural diffused lighting, sense of depth emerging, ultra-minimal,
professional photography, 4K resolution"
```

[Continue this pattern for Keyframes 3-6 using the layer positions from the detailed keyframe descriptions above]

**Key Gemini Settings:**
- Aspect ratio: 16:9 (landscape)
- Style: Photographic, architectural
- Lighting: Natural, diffused, soft
- Avoid: Textures, decorations, furniture, people, text, logos
- Emphasize: Clean lines, geometric simplicity, subtle depth, professional minimalism

---

## PLAN B: FORWARD GLIDE (CORRIDOR) - FALLBACK OPTION

### 1. Scene Description

**The Architectural Space:**
A sophisticated minimalist corridor or hallway that creates the illusion of moving forward through space as the user scrolls. The perspective creates depth naturally.

- **Materials**: Smooth white walls with subtle concrete texture (barely perceptible grain), matte finish, no reflections
- **Architecture**: Clean rectangular corridor with subtle width variation (gently narrowing in perspective)
- **Lighting**: Diffused skylight effect from above, creating soft gradients on walls, shadow definition at floor-wall junction
- **Mood**: Contemplative journey, forward momentum, sophisticated progression
- **Key Elements**:
  - Blue accent vertical line on right wall (#0891B2), acting as a guide/rail
  - Warm slate horizontal detail bands at regular intervals (#64748B)
  - Subtle depth markers (thin frame elements receding into distance)

**Architectural Details:**
- Floor: Light concrete appearance (#FAFAFA) with center-to-edge gradient
- Ceiling: White (#FFFFFF) with soft shadow suggesting height
- Walls: Pure white with subtle 3D depth from lighting
- End of corridor: Diffused light suggesting opening/destination

### 2. Camera Path (Entrance → Deeper Into Space)

**Path Description:**
A smooth dolly-forward movement through the corridor. Camera maintains eye-level perspective, moving from the entrance deeper into the space.

**Movement Characteristics:**
- Start: Positioned at corridor entrance, seeing full depth
- End: Moved ~70% forward through the space
- Camera height: Consistent eye-level (1.6m / 5'3" from floor)
- Camera angle: Straight ahead, no tilt or pan
- Movement style: Smooth, consistent velocity, no acceleration/deceleration

**Depth Markers:**
As camera moves forward, architectural elements pass by:
- Detail bands on walls recede into distance
- Blue accent line maintains position on right wall
- Floor pattern suggests forward motion
- Distant end of corridor slowly enlarges

### 3. Color Palette Specifications

**Primary Surfaces:**
- Walls: #FFFFFF with subtle gradient from top-lit (#FAFAFA) to pure white (#FFFFFF)
- Floor: #FAFAFA with edge gradient to #F1F5F9 (suggesting depth)
- Ceiling: #FFFFFF with soft shadow (#0F172A at 5% opacity)

**Accent Elements:**
- Blue vertical guide line (right wall): #0891B2 at 60% opacity, 2-3px width
- Horizontal detail bands: #64748B at 25% opacity, 1px height
- Depth marker frames: #64748B at 15% opacity

**Lighting & Shadows:**
- Top-down diffused light: Creates gradient on walls from #FAFAFA (top) to #FFFFFF (center)
- Floor-wall junction shadow: #0F172A at 8% opacity, 20px blur
- Perspective shadow at vanishing point: #0F172A at 12% opacity

### 4. Scroll Behavior

**Camera Movement Mapping:**
- 0% scroll (Hero START) → Camera at entrance (position 0)
- 100% scroll (Contact END) → Camera at 70% into corridor (position 0.7)

**Scroll-to-Position Formula:**
Camera Z-position = (scroll_percentage / 100) × 0.7 × corridor_length

**Visual Effect:**
- Walls appear to slide backward past camera
- Blue accent line maintains right-wall position but appears to "extend" from distance
- Detail bands pass by at regular intervals
- Floor tiles (if present) recede into distance
- End-of-corridor light gradually enlarges and brightens

**Speed Perception:**
- Smooth, consistent forward glide
- No easing (constant velocity feels professional, not animated)
- Architectural elements provide motion reference

### 5. Section-by-Section Keyframes

#### SECTION 1: HERO (0% scroll)

**START (Keyframe 1 - Camera at Position 0):**
- **Viewpoint**: Entrance of corridor, maximum depth visible
- **Left Wall**: White plane extending into distance, top-lit gradient, detail band at 2m, 4m, 6m, 8m
- **Right Wall**: White plane with blue accent line running full depth, detail bands matching left
- **Floor**: Light concrete, center brightest (#FAFAFA), edges slightly darker (#F1F5F9), perspective grid subtle
- **Ceiling**: White, soft shadow defining height
- **Distance**: End of corridor visible as diffused bright area ~10m away
- **Overall Feeling**: Standing at threshold, invitation to enter

**END (Keyframe 2 - Camera at Position 0.14, ~1.4m forward):**
- **Viewpoint**: Just inside corridor
- **Left Wall**: First detail band (originally at 2m) now at 0.6m (passing by)
- **Right Wall**: Blue line closer, more defined, first detail band at 0.6m
- **Floor**: Perspective shifted, first ~1.4m now "below" camera
- **Ceiling**: Shadow definition subtle shift
- **Distance**: End of corridor slightly larger, detail bands now at 0.6m, 2.6m, 4.6m, 6.6m from camera
- **Overall Feeling**: Beginning of journey, motion established

#### SECTION 2: EXPERTISE (25% scroll)

**START (Keyframe 2 - Camera at Position 0.14):**
- Same as Hero END

**END (Keyframe 3 - Camera at Position 0.28, ~2.8m forward):**
- **Viewpoint**: Quarter way through corridor
- **Left Wall**: Detail bands now at: -0.8m (behind camera), 1.2m, 3.2m, 5.2m
- **Right Wall**: Blue line prominent, detail bands matching left
- **Floor**: First 2.8m passed, perspective more pronounced
- **Ceiling**: Consistent
- **Distance**: End of corridor at ~7.2m, noticeably larger
- **Overall Feeling**: In motion, depth clear, professional progression

#### SECTION 3: EXPERIENCE (50% scroll)

**START (Keyframe 3 - Camera at Position 0.28):**
- Same as Expertise END

**END (Keyframe 4 - Camera at Position 0.42, ~4.2m forward):**
- **Viewpoint**: Approaching midpoint
- **Left Wall**: Detail bands now at: -2.2m, -0.2m (behind), 1.8m, 3.8m
- **Right Wall**: Blue line strong presence, detail bands matching
- **Floor**: Significant depth traversed, pattern clear
- **Ceiling**: Shadow subtle change
- **Distance**: End of corridor at ~5.8m, filling more of frame
- **Overall Feeling**: Deep into space, momentum, confidence

#### SECTION 4: EDUCATION (75% scroll)

**START (Keyframe 4 - Camera at Position 0.42):**
- Same as Experience END

**END (Keyframe 5 - Camera at Position 0.56, ~5.6m forward):**
- **Viewpoint**: More than halfway through
- **Left Wall**: Detail bands now at: -3.6m, -1.6m (behind), 0.4m, 2.4m
- **Right Wall**: Blue line very prominent, detail bands matching
- **Floor**: Majority of corridor passed
- **Ceiling**: Consistent
- **Distance**: End of corridor at ~4.4m, beginning to dominate view
- **Overall Feeling**: Approaching destination, journey substantial

#### SECTION 5: CONTACT (100% scroll)

**START (Keyframe 5 - Camera at Position 0.56):**
- Same as Education END

**END (Keyframe 6 - Camera at Position 0.7, ~7m forward):**
- **Viewpoint**: Deep into corridor, approaching end
- **Left Wall**: Detail bands now at: -5m, -3m, -1m (behind), 1m, 3m
- **Right Wall**: Blue line extends to near end, detail bands matching
- **Floor**: Vast depth traversed, end visible ahead
- **Ceiling**: Consistent
- **Distance**: End of corridor at ~3m, bright diffused opening visible, sense of arrival
- **Overall Feeling**: Journey complete, destination near, accomplished

### 6. Asset Specs for Gemini AI

#### Image Assets (Keyframes)

**Resolution & Aspect Ratio:**
- 3840 × 2160px (4K landscape) - maintains quality during forward motion simulation
- Aspect ratio: 16:9
- Minimum: 2560 × 1440px if 4K not feasible

**Number of Keyframes:**
- 6 total perspective keyframes (camera positions along corridor)
- Keyframe 1: Position 0 (entrance) - 0% scroll
- Keyframe 2: Position 0.14 (~1.4m forward) - 20% scroll
- Keyframe 3: Position 0.28 (~2.8m forward) - 40% scroll
- Keyframe 4: Position 0.42 (~4.2m forward) - 60% scroll
- Keyframe 5: Position 0.56 (~5.6m forward) - 80% scroll
- Keyframe 6: Position 0.7 (~7m forward) - 100% scroll

**Perspective Consistency:**
CRITICAL: All 6 keyframes must maintain:
- Identical corridor width/height proportions
- Same vanishing point (center of frame)
- Consistent detail band spacing (every 2m)
- Same blue accent line position (right wall, same height)
- Matching lighting direction and intensity

#### Video Assets (If Implementing Smooth Transitions)

**Specifications:**
- Resolution: 3840 × 2160px (4K)
- Frame rate: 30fps or 60fps (60fps for ultra-smooth forward motion)
- Duration: 3-4 seconds per transition segment
- Format: MP4 (H.264), WebM (VP9) fallback
- Compression: ~20-30 Mbps bitrate for 4K
- Total: 5 transition videos (connecting the 6 keyframes)

**Alternative: Single Long Video:**
- Duration: 15-20 seconds (full corridor journey)
- Scroll position maps to video timestamp (0% scroll = 0s, 100% scroll = 20s)
- Allows scrubbing through video based on scroll position

#### Gemini AI Prompting Tips

**Corridor/Perspective Aesthetic:**

```
Core prompt structure:
"Minimalist white corridor interior, one-point perspective, vanishing point
at center, pristine white walls, light concrete floor, clean architectural
lines, diffused skylight from above, subtle shadows, modern gallery hallway,
ultra-minimal, no decorations, professional architectural photography,
medium format camera, perfect perspective, sharp focus throughout"

Color guidance:
"Color palette: pure white walls (#FFFFFF), off-white floor (#FAFAFA) with
subtle gradient to #F1F5F9 at edges, single blue accent line on right wall
(#0891B2 at 60% opacity, vertical, 2-3px width), horizontal detail bands in
warm gray (#64748B at 25% opacity), soft shadows (#0F172A at 5-8% opacity)"

Perspective guidance:
"Perfect one-point perspective, vanishing point at exact center of frame,
straight corridor extending forward, camera at eye level (1.6m height),
camera facing straight ahead, no tilt, walls converging symmetrically toward
vanishing point, floor receding in proper perspective, architectural precision"

Detail placement (adjust for each keyframe):
"Horizontal detail bands on both walls at [positions relative to camera],
blue vertical accent line on right wall full depth, floor-wall junction
shadow at 20px blur, end of corridor at [distance]m showing diffused bright
area, clean architectural proportions"

Style references:
"in the style of: minimalist museum corridors, Tadao Ando concrete spaces,
Apple store minimalism, Scandinavian architecture, James Turrell light
installations, pristine gallery spaces, contemporary minimal architecture,
one-point perspective photography"

Technical quality:
"4K resolution, professional architectural photography, perfect white balance,
no grain, tack-sharp focus, correct linear perspective, no lens distortion,
natural diffused lighting from above, subtle gradient lighting on walls,
professional rendering quality"
```

**Prompt for Each Keyframe (Adjusting Camera Position):**

Keyframe 1 (Position 0 - Entrance):
```
"Minimalist white corridor, one-point perspective, camera at entrance looking
into corridor, vanishing point at center, pristine white walls converging to
distance, light concrete floor (#FAFAFA) receding in perspective, blue vertical
accent line (#0891B2) on right wall full depth, horizontal detail bands on both
walls at 2m, 4m, 6m, 8m from camera, diffused skylight from above creating soft
wall gradients, subtle floor-wall shadows, end of corridor visible at ~10m as
bright diffused area, ultra-minimal, professional architectural photography,
4K, perfect perspective"
```

Keyframe 2 (Position 0.14 - 1.4m forward):
```
"Minimalist white corridor, one-point perspective, camera 1.4 meters into
corridor, vanishing point at center, white walls, concrete floor, blue accent
line on right wall, horizontal detail bands now at 0.6m, 2.6m, 4.6m, 6.6m from
camera position, diffused lighting, floor-wall shadows, end of corridor at
~8.6m slightly larger, architectural precision, 4K resolution"
```

Keyframe 3 (Position 0.28 - 2.8m forward):
```
"Minimalist white corridor, one-point perspective, camera 2.8 meters into
corridor, vanishing point at center, white walls, concrete floor, blue accent
line prominent on right wall, horizontal detail bands at 1.2m, 3.2m, 5.2m from
camera (first band passed), diffused skylight, subtle shadows, end of corridor
at ~7.2m noticeably larger, professional architectural photography, 4K"
```

Keyframe 4 (Position 0.42 - 4.2m forward):
```
"Minimalist white corridor, one-point perspective, camera 4.2 meters into
corridor approaching midpoint, vanishing point at center, white walls, concrete
floor with significant depth visible behind, blue accent line strong on right
wall, horizontal detail bands at 1.8m, 3.8m from camera (two bands passed),
diffused lighting, end of corridor at ~5.8m filling more frame, architectural
precision, 4K resolution"
```

Keyframe 5 (Position 0.56 - 5.6m forward):
```
"Minimalist white corridor, one-point perspective, camera 5.6 meters into
corridor more than halfway, vanishing point at center, white walls, concrete
floor with majority passed, blue accent line very prominent on right wall,
horizontal detail bands at 0.4m, 2.4m from camera (multiple bands passed),
diffused skylight, end of corridor at ~4.4m beginning to dominate view,
professional architectural photography, 4K"
```

Keyframe 6 (Position 0.7 - 7m forward):
```
"Minimalist white corridor, one-point perspective, camera 7 meters into corridor
approaching end, vanishing point at center, white walls, concrete floor with
vast depth traversed, blue accent line extends to near end on right wall,
horizontal detail bands at 1m, 3m from camera (most bands behind), diffused
lighting, end of corridor at ~3m as bright diffused opening visible, sense of
arrival, architectural precision, 4K resolution"
```

**Critical Consistency Tips for Gemini:**

1. **Use the Same Seed/Reference Image**: Generate Keyframe 1 first, then use it as a style reference for Keyframes 2-6 to maintain consistency
2. **Exact Vanishing Point**: Specify "vanishing point at exact geometric center of frame" in every prompt
3. **Consistent Proportions**: Use identical corridor width/height ratio across all keyframes
4. **Detail Band Spacing**: Always specify exact distances in meters from camera position
5. **Blue Line Position**: "Blue accent line on right wall at [specify exact height from floor]"
6. **Lighting Consistency**: Use identical lighting description for all 6 keyframes
7. **Camera Settings**: Specify same focal length equivalent (e.g., "50mm equivalent, f/4") for all

**Gemini Image Generation Settings:**
- Aspect ratio: 16:9 (landscape)
- Style: Photographic, architectural, precise perspective
- Quality: High/Ultra (depending on Gemini interface)
- Avoid: People, text, decorations, furniture, imperfect perspective, fisheye distortion
- Emphasize: Geometric precision, perfect one-point perspective, architectural minimalism, professional photography quality

**Testing Consistency:**
After generating all 6 keyframes, overlay them in an image editor to verify:
- Vanishing point aligns perfectly across all frames
- Wall angles match precisely
- Detail band spacing is mathematically consistent
- Blue accent line maintains same wall position and height

---

## Implementation Notes

### For Plan A (Depth Layers - Parallax):

**Web Implementation Approach:**
1. Use CSS `transform: translateY()` with different scroll multipliers for each layer
2. Or use libraries like `react-parallax` or `locomotive-scroll`
3. Layers can be implemented as `<div>` backgrounds with `background-image` for each keyframe
4. Smooth transitions between keyframes using CSS transitions or Web Animations API

**Advantages:**
- More forgiving of slight inconsistencies between keyframes
- Easier to adjust parallax speeds for tuning
- Can mix-and-match layers for variations
- Smaller file sizes (4 layer PNGs vs. full composite)

### For Plan B (Forward Glide):

**Web Implementation Approach:**
1. Use scroll position to control video playback timestamp (scrubbing)
2. Or interpolate between static keyframes using CSS transforms (scale + translateZ simulation)
3. Libraries: `ScrollMagic`, `GSAP ScrollTrigger`, or vanilla Intersection Observer

**Advantages:**
- More dramatic depth effect
- Clear narrative of "journey" through space
- Single video file possible (easier asset management)
- Feels more cinematic

**Challenge:**
- Requires very consistent perspective across keyframes
- Video file sizes can be large (use heavy compression + lazy loading)

---

## Next Steps for User

1. **Choose primary plan** (A recommended, B as fallback)
2. **Generate Keyframe 1** in Gemini using the prompt provided
3. **Use Keyframe 1 as style reference** for generating remaining keyframes
4. **Verify consistency** by overlaying keyframes in image editor
5. **Export assets** according to specs (composite images or layer PNGs)
6. **Provide assets** to developer for web implementation
7. **(Optional) Generate transition videos** for ultra-smooth experience

---

## Art Direction Summary

**Plan A (Depth Layers):** Think "moving through a minimalist art gallery" - elegant, subtle, sophisticated. The blue accent plane is like a large-scale color field painting that slowly drifts across your view. Depth is felt, not shouted.

**Plan B (Forward Glide):** Think "walking through a Tadao Ando corridor" - contemplative journey, clean lines, perfect perspective. The blue accent is like a handrail guiding you forward. Motion is smooth, purposeful, professional.

Both plans prioritize **elegance over flash**, **depth over decoration**, and **professionalism over playfulness**. The background should enhance the CV content, never compete with it.
