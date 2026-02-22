/* Scroll Reveal Animation */
document.addEventListener('DOMContentLoaded', () => {
    // Reveal elements on scroll
    const revealElements = document.querySelectorAll('.feature-card, .impact-content, .pricing-card');

    // Add reveal class to these elements initially
    revealElements.forEach(el => el.classList.add('reveal'));

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => sectionObserver.observe(el));

    // Smooth Scroll for Nav Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile Menu Toggle (Basic implementation)
    const mobileBtn = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            const mobileMenu = document.querySelector('.mobile-menu');
            if (mobileMenu) {
                mobileMenu.classList.toggle('active');

                // Optional: Change icon based on state
                const icon = mobileBtn.querySelector('i');
                if (icon) {
                    if (mobileMenu.classList.contains('active')) {
                        icon.classList.remove('ph-list');
                        icon.classList.add('ph-x');
                    } else {
                        icon.classList.remove('ph-x');
                        icon.classList.add('ph-list');
                    }
                }
            }
        });
    }

    // Dynamic Header Background on Scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
        } else {
            header.style.background = '#FFFFFF';
            header.style.boxShadow = 'none';
        }
    });
});
