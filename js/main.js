// ==========================================
// MINIMALISTIC PROFESSIONAL CV - DORIAN GUZMAN
// Simplified GSAP animations with subtle effects
// ==========================================

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// ==========================================
// HERO ANIMATIONS - Gentle entrance
// ==========================================
const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

heroTimeline
    .from('.profile-wrapper', {
        y: 20,
        opacity: 0,
        duration: 0.8
    })
    .from('.hero-name', {
        y: 20,
        opacity: 0,
        duration: 0.8
    }, '-=0.4')
    .from('.hero-headline', {
        y: 20,
        opacity: 0,
        duration: 0.6
    }, '-=0.4')
    .from('.link-btn', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15
    }, '-=0.3');

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
gsap.from('.tech-category', {
    scrollTrigger: {
        trigger: '.tech-stack',
        start: 'top 70%',
        end: 'top 40%',
        scrub: 1
    },
    y: 20,
    opacity: 0,
    stagger: 0.15
});

// ==========================================
// EXPERIENCE CARD ANIMATIONS - Smooth reveal
// ==========================================
gsap.from('.experience-card', {
    scrollTrigger: {
        trigger: '.experience',
        start: 'top 70%',
        end: 'top 40%',
        scrub: 1
    },
    y: 20,
    opacity: 0,
    stagger: 0.15
});

// ==========================================
// EDUCATION ANIMATIONS - Clean entrance
// ==========================================
gsap.from('.education-card', {
    scrollTrigger: {
        trigger: '.education',
        start: 'top 70%',
        end: 'top 40%',
        scrub: 1
    },
    y: 20,
    opacity: 0,
    stagger: 0.2
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
