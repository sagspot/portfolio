import { navHead, navMenu } from '../src/modules/nav.js';
import { textEffect } from '../src/modules/text.js';
import { swiper } from '../src/modules/slider.js';
const year = document.getElementById('year');
year.textContent = new Date().getFullYear();

navHead();
navMenu();
textEffect();
