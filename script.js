// ===== DOM ELEMENTS =====
const header = document.getElementById("header");
const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".nav-link");
const backTop = document.getElementById("back-top");
const scrollProgress = document.getElementById("scroll-progress");
const contactForm = document.getElementById("contact-form");

// ===== MOBILE MENU =====
menuBtn.addEventListener("click", () => {

  navbar.classList.toggle("show");

  // ICON CHANGE
  const icon = menuBtn.querySelector("i");

  if (navbar.classList.contains("show")) {

    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");

  } else {

    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");

  }

});

// ===== CLOSE MENU ON LINK CLICK =====
navLinks.forEach(link => {

  link.addEventListener("click", () => {

    navbar.classList.remove("show");

    const icon = menuBtn.querySelector("i");

    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");

  });

});

// ===== CLOSE MENU OUTSIDE CLICK =====
document.addEventListener("click", (e) => {

  if (
    !menuBtn.contains(e.target) &&
    !navbar.contains(e.target)
  ) {

    navbar.classList.remove("show");

    const icon = menuBtn.querySelector("i");

    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");

  }

});

// ===== HEADER EFFECT + SCROLL PROGRESS =====
window.addEventListener("scroll", () => {

  // HEADER ACTIVE
  if (window.scrollY > 50) {

    header.classList.add("active");

  } else {

    header.classList.remove("active");

  }

  // BACK TO TOP
  if (window.scrollY > 400) {

    backTop.classList.add("show");

  } else {

    backTop.classList.remove("show");

  }

  // SCROLL PROGRESS
  const scrollTop = window.scrollY;

  const docHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const scrollPercent =
    (scrollTop / docHeight) * 100;

  scrollProgress.style.width =
    scrollPercent + "%";

});

// ===== BACK TO TOP =====
backTop.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});

// ===== ACTIVE NAV LINK =====
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

  const scrollY = window.pageYOffset;

  sections.forEach(section => {

    const sectionHeight = section.offsetHeight;

    const sectionTop = section.offsetTop - 150;

    const sectionId = section.getAttribute("id");

    const currentLink =
      document.querySelector(
        '.nav-link[href*=' + sectionId + ']'
      );

    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ) {

      navLinks.forEach(link => {
        link.classList.remove("active");
      });

      if (currentLink) {
        currentLink.classList.add("active");
      }

    }

  });

});

// ===== SMOOTH REVEAL ANIMATION =====
const revealElements = document.querySelectorAll(
  ".service-card, .portfolio-card, .stat-box"
);

const revealObserver = new IntersectionObserver(

  (entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.style.opacity = "1";

        entry.target.style.transform =
          "translateY(0)";

      }

    });

  },

  {
    threshold: 0.1
  }

);

// INITIAL STYLE
revealElements.forEach(element => {

  element.style.opacity = "0";

  element.style.transform =
    "translateY(50px)";

  element.style.transition =
    "all 0.8s ease";

  revealObserver.observe(element);

});

// ===== CONTACT FORM =====
contactForm.addEventListener("submit", (e) => {

  e.preventDefault();

  const button =
    contactForm.querySelector("button");

  const originalText = button.innerHTML;

  // LOADING
  button.innerHTML =
    "Sending...";

  button.disabled = true;

  setTimeout(() => {

    button.innerHTML =
      "Message Sent ✓";

    button.style.background =
      "linear-gradient(135deg,#22c55e,#16a34a)";

    contactForm.reset();

    setTimeout(() => {

      button.innerHTML =
        originalText;

      button.disabled = false;

      button.style.background = "";

    }, 3000);

  }, 1500);

});

// ===== PARALLAX EFFECT =====
window.addEventListener("scroll", () => {

  const heroBg =
    document.querySelector(".hero-bg");

  const scrollY = window.scrollY;

  heroBg.style.transform =
    `translateY(${scrollY * 0.3}px)`;

});

// ===== KEYBOARD ACCESSIBILITY =====
document.addEventListener("keydown", (e) => {

  // ESC CLOSE MENU
  if (e.key === "Escape") {

    navbar.classList.remove("show");

    const icon = menuBtn.querySelector("i");

    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");

  }

});

// ===== PREVENT RESUBMIT =====
if (window.history.replaceState) {

  window.history.replaceState(
    null,
    null,
    window.location.href
  );

}

// ===== CONSOLE BRANDING =====
console.log(
  "%c🚀 RLI Digital Labs",
  "color:#7c3aed;font-size:28px;font-weight:bold;"
);

console.log(
  "%cWebsite Loaded Successfully",
  "color:#06b6d4;font-size:14px;"
);
