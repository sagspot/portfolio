import { navHead, navMenu, smoothScroll } from '../src/modules/nav.js';
import { textEffect } from '../src/modules/text.js';
import { portfolio, viewBtn, closeModal } from '../src/modules/portfolio.js';
import { testimonials } from '../src/modules/testimonials.js';

const year = document.getElementById('year');
year.textContent = new Date().getFullYear();
