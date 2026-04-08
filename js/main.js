// ==========================================
// MINIMALISTIC PROFESSIONAL CV - DORIAN GUZMAN
// Simplified GSAP animations with subtle effects
// ==========================================

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// ==========================================
// SCROLL-DRIVEN VIDEO PLAYBACK
// ==========================================
const video = document.getElementById('scrollVideo');

// Force video to start loading immediately
video.load();

// Set video to frame 0 immediately (don't wait for metadata)
video.currentTime = 0;

// Create ScrollTrigger immediately (don't wait for loadedmetadata)
ScrollTrigger.create({
    trigger: 'body',
    start: 'top top',
    end: 'bottom bottom',
    scrub: 0.5,
    onUpdate: (self) => {
        // Map scroll progress to video time
        const targetTime = self.progress * video.duration;

        // Only update if video is ready and time is valid
        if (video.readyState >= 2 && !isNaN(targetTime)) {
            video.currentTime = targetTime;
        }
    }
});

// Log when video is ready
video.addEventListener('loadedmetadata', () => {
    console.log('✓ Video loaded - Duration:', video.duration, 'seconds');
    // Ensure video starts at frame 0
    video.currentTime = 0;
});

// Handle video loading errors
video.addEventListener('error', (e) => {
    console.error('✗ Video failed to load:', e);
});

// ==========================================
// HERO ANIMATIONS - Apple-Level Sophistication
// ==========================================

// Set initial states - all hero elements start invisible with transforms
gsap.set('.profile-img', {opacity: 0, scale: 0.8});
gsap.set('.hero-name', {opacity: 0, y: 40});
gsap.set('.hero-headline', {opacity: 0, y: 30});
gsap.set('.hero-credentials', {opacity: 0, y: 20});
gsap.set('.link-btn', {opacity: 0, y: 20});

const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

// Profile image entrance with elastic bounce
heroTimeline.to('.profile-img', {
    scale: 1,
    opacity: 1,
    duration: 1,
    ease: 'back.out(1.4)'
});

// Name entrance - dramatic reveal
heroTimeline.to('.hero-name', {
    y: 0,
    opacity: 1,
    duration: 1
}, '-=0.5');

// Headline stagger - refined timing
heroTimeline.to('.hero-headline', {
    y: 0,
    opacity: 1,
    duration: 0.8
}, '-=0.6');

// Credentials subtle entrance
heroTimeline.to('.hero-credentials', {
    y: 0,
    opacity: 1,
    duration: 0.7
}, '-=0.5');

// Buttons stagger - smooth cascade (appear LAST after credentials)
heroTimeline.to('.link-btn', {
    y: 0,
    opacity: 1,
    duration: 0.6,
    stagger: 0.1
}, '-=0.4');

// ==========================================
// SCROLL INDICATOR ANIMATIONS
// ==========================================

// Bounce animation for arrow
gsap.to('.scroll-arrow', {
    y: 8,
    duration: 0.8,
    ease: 'sine.inOut',
    yoyo: true,
    repeat: -1
});

// Fade in after hero animation completes
gsap.from('.scroll-indicator', {
    opacity: 0,
    y: -20,
    duration: 0.8,
    delay: 2.5, // After hero animation
    ease: 'power2.out'
});

// Fade out on scroll
ScrollTrigger.create({
    trigger: '.hero',
    start: 'top top',
    end: '+=200',
    scrub: true,
    onUpdate: (self) => {
        gsap.to('.scroll-indicator', {
            opacity: 0.8 - (self.progress * 0.8),
            y: self.progress * 30
        });
    }
});

// ==========================================
// CONTINUOUS FLOAT ANIMATION - Profile Image
// ==========================================
gsap.to('.profile-img', {
    y: -10,
    duration: 3,
    yoyo: true,
    repeat: -1,
    ease: 'sine.inOut'
});

// ==========================================
// SCROLL PARALLAX - Hero Elements
// Initialized AFTER hero timeline completes to prevent conflicts
// ==========================================
heroTimeline.eventCallback('onComplete', () => {
    ScrollTrigger.create({
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
            const progress = self.progress;

            // Profile scales down and fades (starts at scale:1, opacity:1 when progress=0)
            gsap.set('.profile-img', {
                scale: 1 - (progress * 0.1),
                opacity: 1 - (progress * 0.4)
            });

            // Name moves up (parallax effect) - starts at y:0 when progress=0
            gsap.set('.hero-name', {
                y: -progress * 40
            });

            // Headline subtle parallax - starts at y:0, opacity:1 when progress=0
            gsap.set('.hero-headline, .hero-credentials', {
                y: -progress * 20,
                opacity: 1 - (progress * 0.5)
            });

            // Buttons fade faster - starts at opacity:1 when progress=0, fades to 0.2
            gsap.set('.link-btn', {
                opacity: 1 - (progress * 0.8)
            });
        }
    });
});

// ==========================================
// BUTTON HOVER EFFECTS - GSAP Enhanced
// ==========================================
document.querySelectorAll('.link-btn').forEach(button => {
    button.addEventListener('mouseenter', () => {
        gsap.to(button, {
            scale: 1.02,
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    button.addEventListener('mouseleave', () => {
        gsap.to(button, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// ==========================================
// SECTION TITLE ANIMATIONS - Fade in on scroll
// ==========================================
gsap.utils.toArray('.section-title').forEach(title => {
    gsap.from(title, {
        scrollTrigger: {
            trigger: title,
            start: 'top 80%',
            end: 'top 60%',
            scrub: 1
        },
        y: 20,
        opacity: 0
    });
});

// ==========================================
// SKILLS & IMPACT ANIMATIONS - Staggered reveal
// ==========================================
// Set initial state for expertise categories
gsap.set('.expertise-category', {opacity: 0, y: 30});

// Animate to visible state on scroll
gsap.to('.expertise-category', {
    scrollTrigger: {
        trigger: '.skills-impact',
        start: 'top 80%',
        toggleActions: 'play none none none'
    },
    y: 0,
    opacity: 1,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power2.out'
});

// ==========================================
// EXPERIENCE CARD ANIMATIONS - Smooth reveal
// ==========================================
// Set initial state for experience cards
gsap.set('.experience-card', {opacity: 0, y: 30});

// Animate to visible state on scroll
gsap.to('.experience-card', {
    scrollTrigger: {
        trigger: '.experience',
        start: 'top 80%',
        toggleActions: 'play none none none'
    },
    y: 0,
    opacity: 1,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power2.out'
});

// ==========================================
// EDUCATION ANIMATIONS - Clean entrance
// ==========================================
// Set initial state for education cards
gsap.set('.education-card', {opacity: 0, y: 30});

// Animate to visible state on scroll
gsap.to('.education-card', {
    scrollTrigger: {
        trigger: '.education',
        start: 'top 80%',
        toggleActions: 'play none none none'
    },
    y: 0,
    opacity: 1,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power2.out'
});

// ==========================================
// CONTACT SECTION ANIMATIONS - Gentle reveal
// ==========================================
gsap.from('.contact-content', {
    scrollTrigger: {
        trigger: '.contact',
        start: 'top 70%',
        end: 'top 50%',
        scrub: 1
    },
    y: 20,
    opacity: 0
});

// ==========================================
// WHATSAPP FORM HANDLER
// ==========================================
const whatsappForm = document.getElementById('whatsapp-form');

if (whatsappForm) {
    whatsappForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('contact-name').value.trim();
        const company = document.getElementById('contact-company').value.trim();

        // Build WhatsApp message
        let message;
        if (company) {
            message = `Hey Dorian, I am ${name} from ${company}. I found your website and I am interested in connecting.`;
        } else {
            message = `Hey Dorian, I am ${name}. I found your website and I am interested in connecting.`;
        }

        // Encode message for URL
        const encodedMessage = encodeURIComponent(message);

        // WhatsApp URL with phone number and pre-filled message
        const whatsappURL = `https://wa.me/4915739511230?text=${encodedMessage}`;

        // Open WhatsApp in new tab
        window.open(whatsappURL, '_blank');
    });
}

// ==========================================
// SMOOTH SCROLL TO SECTIONS
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            gsap.to(window, {
                duration: 1,
                scrollTo: {
                    y: targetElement,
                    offsetY: 50
                },
                ease: 'power3.inOut'
            });
        }
    });
});

// ==========================================
// PERFORMANCE: Disable animations on slow devices
// ==========================================
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    gsap.globalTimeline.clear();
    ScrollTrigger.getAll().forEach(st => st.kill());
}

console.log('✓ CV loaded successfully');
