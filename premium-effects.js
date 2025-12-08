// Premium Mouse Follow Effect (subtle, not overwhelming)
let mouseTimeout;
document.addEventListener('mousemove', (e) => {
    if (window.innerWidth > 768) {
        clearTimeout(mouseTimeout);
        mouseTimeout = setTimeout(() => {
            const goldCursor = document.createElement('div');
            goldCursor.className = 'gold-cursor';
            goldCursor.style.left = e.pageX + 'px';
            goldCursor.style.top = e.pageY + 'px';
            document.body.appendChild(goldCursor);

            setTimeout(() => {
                goldCursor.remove();
            }, 800);
        }, 100);
    }
});

// Premium Card Tilt Effect (3D)
document.querySelectorAll('.practice-card, .feature-item').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        if (window.innerWidth > 768) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
            card.style.transition = 'transform 0.1s';
        }
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        card.style.transition = 'transform 0.5s';
    });
});

// Premium Scroll Progress Bar
const scrollProgress = document.createElement('div');
scrollProgress.className = 'scroll-progress';
document.body.appendChild(scrollProgress);

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.pageYOffset / windowHeight) * 100;
    scrollProgress.style.width = scrolled + '%';
});

// Premium Magnetic Buttons
document.querySelectorAll('.btn-gold, .btn-gold-sidebar').forEach(button => {
    button.addEventListener('mousemove', (e) => {
        if (window.innerWidth > 768) {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px) scale(1.05)`;
        }
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translate(0, 0) scale(1)';
    });
});

// Premium Section Reveal
const revealSections = () => {
    const sections = document.querySelectorAll('section:not(.hero)');

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                sectionObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        sectionObserver.observe(section);
    });
};

// Premium Ripple Effect on Click
document.addEventListener('click', (e) => {
    const ripple = document.createElement('div');
    ripple.className = 'ripple-effect';
    ripple.style.left = e.pageX + 'px';
    ripple.style.top = e.pageY + 'px';
    document.body.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 600);
});

// Initialize premium effects
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        revealSections();
    }, 200);
});

console.log('Premium effects loaded');
