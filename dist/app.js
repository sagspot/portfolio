import { navHead, navMenu, smoothScroll } from "../src/modules/nav.js";
import { textEffect } from "../src/modules/text.js";
import { portfolio, viewBtn, closeModal } from "../src/modules/portfolio.js";
import { testimonials } from "../src/modules/testimonials.js";

const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

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
