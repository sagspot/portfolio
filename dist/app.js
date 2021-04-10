import { navHead, navMenu, smoothScroll } from "../src/modules/nav.js";
import { textEffect } from "../src/modules/text.js";
import { particlesInit } from "../src/modules/particles_init.js";
import { portfolio, viewBtn, closeModal } from "../src/modules/portfolio.js";
import { testimonials } from "../src/modules/testimonials.js";

const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

// --------------------------------------------- Google tags ---------------------------------------------
const cv = document.getElementById("cv");
const projects = document.getElementById("view-more");

cv.addEventListener("click", () =>
  gtag("event", "btn_click", {
    event_category: "download",
    event_label: "cv",
  })
);

projects.addEventListener("click", () =>
  gtag("event", "btn_click", {
    event_category: "portfolio",
    event_label: "all projects",
  })
);

// --------------------------------------------- Dark theme ---------------------------------------------
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") document.body.classList.add("dark");

const themeBtn = document.querySelector(".theme-switch-wrapper");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  let theme = "light";
  if (document.body.classList.contains("dark")) theme = "dark";

  localStorage.setItem("theme", theme);
});
