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
const videoDuration = 15; // 15 seconds

// Preload video metadata
video.addEventListener('loadedmetadata', () => {
    console.log('Video loaded - Duration:', video.duration, 'seconds');

    // Create ScrollTrigger for video scrubbing
    ScrollTrigger.create({
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.5, // Smooth scrubbing with 0.5s delay
        onUpdate: (self) => {
            // Map scroll progress (0-1) to video time (0-videoDuration)
            const targetTime = self.progress * video.duration;

            // Only update if video is ready and time is valid
            if (video.readyState >= 2 && !isNaN(targetTime)) {
                video.currentTime = targetTime;
            }
        }
    });
});

// Handle video loading errors
video.addEventListener('error', (e) => {
    console.error('Video failed to load:', e);
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
// TECH STACK ANIMATIONS - Staggered reveal
// ==========================================
// Set initial state for tech categories
gsap.set('.tech-category', {opacity: 0, y: 30});

// Animate to visible state on scroll
gsap.to('.tech-category', {
    scrollTrigger: {
        trigger: '.tech-stack',
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
// EMAIL WALL FUNCTIONALITY
// ==========================================
const emailForm = document.getElementById('emailForm');
const emailInput = document.getElementById('emailInput');
const thankYouMessage = document.getElementById('thankYouMessage');
const downloadBtn = document.getElementById('downloadBtn');

// Check if user has already submitted email
window.addEventListener('DOMContentLoaded', () => {
    const hasSubmitted = localStorage.getItem('emailSubmitted');

    if (hasSubmitted === 'true') {
        showThankYouMessage();
    }
});

// Handle form submission
emailForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();

    if (email && isValidEmail(email)) {
        // Store email submission in localStorage
        localStorage.setItem('emailSubmitted', 'true');
        localStorage.setItem('userEmail', email);

        // Show thank you message with animation
        showThankYouMessage();

        // Optional: Send email to your backend/analytics
        console.log('Email submitted:', email);
    }
});

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show thank you message with GSAP animation
function showThankYouMessage() {
    gsap.to(emailForm, {
        opacity: 0,
        y: -20,
        duration: 0.4,
        onComplete: () => {
            emailForm.style.display = 'none';
            thankYouMessage.classList.add('show');

            gsap.from(thankYouMessage, {
                opacity: 0,
                y: 20,
                duration: 0.6,
                ease: 'power3.out'
            });
        }
    });
}

// Handle PDF download
downloadBtn.addEventListener('click', () => {
    // Create a placeholder alert (replace with actual PDF download logic)
    alert('PDF CV download functionality will be implemented. For now, this is a placeholder.\n\nIn production, this would:\n1. Generate or fetch a PDF CV\n2. Trigger a download\n3. Track analytics');

    // TODO: Implement actual PDF download
    // Example:
    // window.location.href = 'assets/pdf/dorian-guzman-cv.pdf';

    // Or generate PDF dynamically using a library like jsPDF
});

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
