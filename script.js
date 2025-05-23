document.addEventListener("DOMContentLoaded", () => {
    // Typing effect
    const typingText = document.getElementById("typing-text");
    const textToType = "whoami";
    let i = 0;
  
    function typeWriter() {
      if (i < textToType.length) {
        typingText.innerHTML += textToType.charAt(i);
        i++;
        setTimeout(typeWriter, 150);
      } else {
        setTimeout(() => {
          typingText.innerHTML = "";
          i = 0;
          typeWriter();
        }, 3000);
      }
    }
  
    typeWriter();
  
    // Mobile menu toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
  
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active");
      navLinks.classList.toggle("active");
    });
  
    // Close mobile menu when clicking on a link
    const navLinksItems = document.querySelectorAll(".nav-link");
  
    navLinksItems.forEach((link) => {
      link.addEventListener("click", () => {
        menuToggle.classList.remove("active");
        navLinks.classList.remove("active");
      });
    });
  
    // Back to top button
    const backToTopBtn = document.querySelector(".back-to-top");
  
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        backToTopBtn.classList.add("active");
      } else {
        backToTopBtn.classList.remove("active");
      }
    });
  
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
  
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          });
        }
      });
    });
  
    // Form validation
    const contactForm = document.getElementById("contactForm");
  
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
  
        // Get form values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;
  
        // Simple validation
        if (name.trim() === "" || email.trim() === "" || subject.trim() === "" || message.trim() === "") {
          alert("Please fill in all fields");
          return;
        }
  
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          alert("Please enter a valid email address");
          return;
        }
  
        // If validation passes, you would normally send the form data to a server
        // For this demo, we'll just show a success message
        alert("Message sent successfully!");
        contactForm.reset();
      });
    }
  
    // Add animation to skill items on scroll
    const skillItems = document.querySelectorAll(".skill-item");
    const skillProgress = document.querySelectorAll(".skill-progress");
  
    // Initially hide the progress bars
    skillProgress.forEach(progress => {
      progress.style.width = "0";
    });
  
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function animateOnScroll() {
      skillItems.forEach((item) => {
        if (isInViewport(item)) {
          item.style.opacity = "1";
          item.style.transform = "translateY(0)";
          
          // Animate the progress bar
          const progress = item.querySelector(".skill-progress");
          if (progress) {
            progress.style.width = progress.getAttribute("style").split("width:")[1];
          }
        }
      });
    }
  
    // Set initial state for animation
    skillItems.forEach((item) => {
      item.style.opacity = "0";
      item.style.transform = "translateY(20px)";
      item.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    });
  
    // Run on scroll and on load
    window.addEventListener("scroll", animateOnScroll);
    window.addEventListener("load", animateOnScroll);
  
    // Project cards hover effect
    const projectCards = document.querySelectorAll(".project-card");
  
    projectCards.forEach((card) => {
      card.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-10px)";
        this.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.3)";
        this.style.borderColor = "var(--primary-color)";
      });
  
      card.addEventListener("mouseleave", function () {
        this.style.transform = "";
        this.style.boxShadow = "";
        this.style.borderColor = "";
      });
    });
  
    // Timeline animation
    const timelineItems = document.querySelectorAll(".timeline-item");
  
    timelineItems.forEach((item) => {
      item.style.opacity = "0";
      item.style.transform = "translateX(-20px)";
      item.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    });
  
    function animateTimeline() {
      timelineItems.forEach((item) => {
        if (isInViewport(item)) {
          item.style.opacity = "1";
          item.style.transform = "translateX(0)";
        }
      });
    }
  
    window.addEventListener("scroll", animateTimeline);
    window.addEventListener("load", animateTimeline);
  
    // Add glitch effect on hover for headings
    const glitchElements = document.querySelectorAll(".glitch, .glitch-small");
  
    glitchElements.forEach((element) => {
      element.addEventListener("mouseenter", function () {
        this.style.animation = "none";
        void this.offsetWidth; // Trigger reflow
        this.style.animation = "glitch-skew 1s infinite linear alternate-reverse";
      });
  
      element.addEventListener("mouseleave", function () {
        this.style.animation = "";
      });
    });
  });