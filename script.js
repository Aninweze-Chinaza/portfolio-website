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

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Remove active state from other buttons
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.getAttribute("data-filter");

    projects.forEach(project => {
      const type = project.getAttribute("data-type");
      project.style.display =
        filter === "all" || filter === type ? "block" : "none";
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
