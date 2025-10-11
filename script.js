// ===== NAV ACTIVE LINK HIGHLIGHT =====
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  const fromTop = window.scrollY;

  navLinks.forEach(link => {
    const section = document.querySelector(link.hash);
    if (
      section.offsetTop <= fromTop + 150 &&
      section.offsetTop + section.offsetHeight > fromTop + 150
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

// ===== PROJECT FILTER =====
const filterButtons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project");

// Show only Frontend projects by default
window.addEventListener("DOMContentLoaded", () => {
  projects.forEach(project => {
    if (project.dataset.type === "frontend") {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });
});

// Filter function when a button is clicked
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    // Update active button styles
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    // Show/hide projects based on filter
    projects.forEach(project => {
      if (filter === "all" || project.dataset.type === filter) {
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }
    });
  });
});

// ===== BACK TO TOP BUTTON =====
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
