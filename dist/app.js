import { navHead, navMenu, smoothScroll } from '../src/modules/nav.js';
import { textEffect } from '../src/modules/text.js';
import { swiper } from '../src/modules/slider.js';
import { portfolio } from '../src/modules/portfolio.js';
const year = document.getElementById('year');
year.textContent = new Date().getFullYear();

textEffect();
smoothScroll();
