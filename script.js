// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Custom cursor
    const cursor = document.querySelector(".cursor")
  
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = e.clientX + "px"
      cursor.style.top = e.clientY + "px"
    })
  
    document.addEventListener("mousedown", () => {
      cursor.style.width = "15px"
      cursor.style.height = "15px"
      cursor.style.borderColor = "var(--accent-color)"
    })
  
    document.addEventListener("mouseup", () => {
      cursor.style.width = "20px"
      cursor.style.height = "20px"
      cursor.style.borderColor = "var(--primary-color)"
    })
  
    // Hide cursor when it leaves the window
    document.addEventListener("mouseleave", () => {
      cursor.style.display = "none"
    })
  
    document.addEventListener("mouseenter", () => {
      cursor.style.display = "block"
    })
  
    // Navigation toggle for mobile
    const navToggle = document.getElementById("nav-toggle")
    const navLinks = document.querySelector(".nav-links")
  
    navToggle.addEventListener("click", () => {
      navToggle.classList.toggle("active")
      navLinks.classList.toggle("active")
    })
  
    // Close mobile menu when clicking on a link
    const navItems = document.querySelectorAll(".nav-link")
    navItems.forEach((item) => {
      item.addEventListener("click", () => {
        navToggle.classList.remove("active")
        navLinks.classList.remove("active")
      })
    })
  
    // Header scroll effect
    const header = document.querySelector("header")
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled")
      } else {
        header.classList.remove("scrolled")
      }
    })
  
    // Glitch effect on hover
    const glitchElement = document.querySelector(".glitch")
  
    if (glitchElement) {
      glitchElement.addEventListener("mouseenter", () => {
        glitchElement.classList.add("active")
      })
  
      glitchElement.addEventListener("mouseleave", () => {
        glitchElement.classList.remove("active")
      })
    }
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
        const targetElement = document.querySelector(targetId)
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          })
        }
      })
    })
  
    // Form submission
    const contactForm = document.getElementById("contactForm")
  
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        // Get form values
        const name = document.getElementById("name").value
        const email = document.getElementById("email").value
        const subject = document.getElementById("subject").value
        const message = document.getElementById("message").value
  
        // Here you would typically send the form data to a server
        // For now, we'll just log it and show a success message
        console.log("Form submitted:", { name, email, subject, message })
  
        // Show success message
        alert("Thank you for your message! I will get back to you soon.")
  
        // Reset form
        contactForm.reset()
      })
    }
  
    // Typing effect for terminal
    const terminalBody = document.querySelector(".terminal-body")
  
    if (terminalBody) {
      const commands = document.querySelectorAll(".command")
      const outputs = document.querySelectorAll(".output")
  
      // Hide all commands and outputs initially
      commands.forEach((cmd) => (cmd.style.display = "none"))
      outputs.forEach((output) => (output.style.display = "none"))
  
      // Show them one by one with a typing effect
      let delay = 500
  
      commands.forEach((cmd, index) => {
        setTimeout(() => {
          cmd.style.display = "block"
          typeWriter(cmd, 50)
  
          // Show corresponding output after command is typed
          setTimeout(
            () => {
              if (outputs[index]) {
                outputs[index].style.display = "block"
                fadeIn(outputs[index])
              }
            },
            cmd.textContent.length * 50 + 500,
          )
        }, delay)
  
        delay += cmd.textContent.length * 50 + (outputs[index] ? outputs[index].textContent.length * 10 : 0) + 1000
      })
  
      function typeWriter(element, speed) {
        const text = element.textContent
        element.textContent = ""
        let i = 0
  
        function type() {
          if (i < text.length) {
            element.textContent += text.charAt(i)
            i++
            setTimeout(type, speed)
          }
        }
  
        type()
      }
  
      function fadeIn(element) {
        let opacity = 0
        element.style.opacity = opacity
  
        const interval = setInterval(() => {
          if (opacity < 1) {
            opacity += 0.1
            element.style.opacity = opacity
          } else {
            clearInterval(interval)
          }
        }, 100)
      }
    }
  
    // Animate skill bars on scroll
    const skillBars = document.querySelectorAll(".skill-progress")
  
    function animateSkillBars() {
      skillBars.forEach((bar) => {
        const barPosition = bar.getBoundingClientRect().top
        const screenPosition = window.innerHeight / 1.3
  
        if (barPosition < screenPosition) {
          bar.style.width = bar.parentElement.getAttribute("data-progress") || bar.style.width
        }
      })
    }
  
    // Set initial width for skill bars
    skillBars.forEach((bar) => {
      const width = bar.style.width
      bar.style.width = "0"
      bar.parentElement.setAttribute("data-progress", width)
    })
  
    // Animate elements on scroll
    function animateOnScroll() {
      animateSkillBars()
  
      // Add more scroll animations here if needed
    }
  
    window.addEventListener("scroll", animateOnScroll)
  
    // Call once on load to check for elements already in view
    animateOnScroll()
  
    // Add particle background effect
    function createParticles() {
      const particlesContainer = document.createElement("div")
      particlesContainer.className = "particles-container"
      particlesContainer.style.position = "fixed"
      particlesContainer.style.top = "0"
      particlesContainer.style.left = "0"
      particlesContainer.style.width = "100%"
      particlesContainer.style.height = "100%"
      particlesContainer.style.pointerEvents = "none"
      particlesContainer.style.zIndex = "-1"
      document.body.appendChild(particlesContainer)
  
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement("div")
        particle.className = "particle"
        particle.style.position = "absolute"
        particle.style.width = Math.random() * 3 + "px"
        particle.style.height = particle.style.width
        particle.style.background = "rgba(0, 255, 255, " + Math.random() * 0.5 + ")"
        particle.style.borderRadius = "50%"
        particle.style.top = Math.random() * 100 + "vh"
        particle.style.left = Math.random() * 100 + "vw"
        particle.style.boxShadow = "0 0 10px rgba(0, 255, 255, 0.5)"
  
        particlesContainer.appendChild(particle)
  
        animateParticle(particle)
      }
  
      function animateParticle(particle) {
        const duration = Math.random() * 20 + 10
        const xMovement = Math.random() * 50 - 25
        const yMovement = Math.random() * 50 - 25
  
        particle.style.transition = "transform " + duration + "s linear, opacity " + duration + "s linear"
        particle.style.transform = "translate(" + xMovement + "vw, " + yMovement + "vh)"
        particle.style.opacity = "0"
  
        setTimeout(() => {
          particle.style.transition = "none"
          particle.style.transform = "translate(0, 0)"
          particle.style.top = Math.random() * 100 + "vh"
          particle.style.left = Math.random() * 100 + "vw"
          particle.style.opacity = "1"
  
          setTimeout(() => {
            animateParticle(particle)
          }, 100)
        }, duration * 1000)
      }
    }
  
    createParticles()
  
    // Matrix code rain animation
    const canvas = document.getElementById("matrixCanvas")
    if (canvas) {
      const ctx = canvas.getContext("2d")
      const brightnessSlider = document.getElementById("matrixBrightness")
      let matrixOpacity = 0.5 // Default opacity (50%)
  
      // Set canvas dimensions to match container
      canvas.width = 300
      canvas.height = 300
  
      // Characters to display (can include numbers, letters, and symbols)
      const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン"
      const charArray = chars.split("")
  
      const fontSize = 14
      const columns = canvas.width / fontSize
  
      // Array to track the y position of each column
      const drops = []
  
      // Initialize all columns
      for (let i = 0; i < columns; i++) {
        drops[i] = Math.floor((Math.random() * canvas.height) / fontSize) * -1
      }
  
      // Update opacity when slider changes
      brightnessSlider.addEventListener("input", (e) => {
        matrixOpacity = e.target.value / 100
      })
  
      // Drawing function
      function drawMatrix() {
        // Set semi-transparent black background to create trail effect
        ctx.fillStyle = "rgba(10, 10, 10, 0.05)"
        ctx.fillRect(0, 0, canvas.width, canvas.height)
  
        // Set text color and font with current opacity
        ctx.fillStyle = `rgba(0, 255, 255, ${matrixOpacity})`
        ctx.font = `${fontSize}px monospace`
  
        // Draw characters
        for (let i = 0; i < drops.length; i++) {
          // Select a random character
          const char = charArray[Math.floor(Math.random() * charArray.length)]
  
          // Draw the character
          ctx.fillText(char, i * fontSize, drops[i] * fontSize)
  
          // Move the drop down
          drops[i]++
  
          // Reset drop to top with random delay when it reaches bottom
          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0
          }
        }
      }
  
      // Run the animation
      setInterval(drawMatrix, 50)
    }
  })
  