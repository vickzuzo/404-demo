const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const navLink = document.querySelectorAll(".nav_link");

/*=============== SHOW MENU ===============*/
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== HIDE MENU =====*/
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

function linkAction() {
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

const sr = ScrollReveal({
  distance: "90px",
  duration: 3000,
});

sr.reveal(`.home_data`, { origin: "top", delay: 400 });
sr.reveal(`.home_img`, { origin: "bottom", delay: 600 });
sr.reveal(`.footer`, { origin: "bottom", delay: 800 });
