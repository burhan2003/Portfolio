document.addEventListener("DOMContentLoaded", () => {
  // Mobile Navigation Toggle
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }

  const navLinks = document.querySelectorAll(".nav-link");

  const closeMenu = () => {
    if (navMenu.classList.contains('active')) {
      navMenu.classList.remove("active");
    }
  }

  // Smooth scrolling for navigation links
  const navbar = document.querySelector(".navbar");
  const getNavbarHeight = () => (navbar ? navbar.offsetHeight : 0);

  navLinks.forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      closeMenu();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        const navbarHeight = getNavbarHeight();
        const targetPosition = target.offsetTop - navbarHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // Scroll to top button
  const scrollToTopBtn = document.getElementById("scrollToTop");

  if (scrollToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        scrollToTopBtn.style.display = "block";
      } else {
        scrollToTopBtn.style.display = "none";
      }
    });

    scrollToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
});
