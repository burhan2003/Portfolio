document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');
    const backToTopButton = document.querySelector('.back-to-top');
    const header = document.querySelector('header');

    // Hamburger menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling with offset for fixed navbar
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const navbarHeight = header.offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active link highlighting on scroll
    function changeLinkState() {
        let index = sections.length;
        const navbarHeight = header.offsetHeight;

        while (--index && window.scrollY + navbarHeight < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove('active'));

        if (navLinks[index]) {
            navLinks[index].classList.add('active');
        }
    }

    // Back to top button visibility
    function toggleBackToTopButton() {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    }

    // Initial calls
    changeLinkState();
    toggleBackToTopButton();

    // Event listeners for scroll
    window.addEventListener('scroll', () => {
        changeLinkState();
        toggleBackToTopButton();
    });
});
