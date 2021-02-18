const navHeader = document.querySelector('.nav');
const nav = document.querySelector('.nav-center');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelector('.links');

function navMenu() {
  navToggle.addEventListener('click', () => {
    const navHeight = navLinks.getBoundingClientRect().height;
    const linkHeight = links.getBoundingClientRect().height;
    nav.classList.toggle('show-links');
    if (navHeight === 0) {
      navLinks.style.height = `${linkHeight}px`;
    } else navLinks.style.height = 0;
  });
}

function navHead() {
  window.addEventListener('scroll', () => {
    const navPos = window.pageYOffset;
    if (navPos >= navHeader.clientHeight) navHeader.classList.add('nav-fixed');
    else navHeader.classList.remove('nav-fixed');
  });
}

export { navHead, navMenu };
