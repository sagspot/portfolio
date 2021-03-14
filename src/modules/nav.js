const navHeader = document.querySelector('.nav');
const nav = document.querySelector('.nav-center');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelector('.links');

const navMenu = navToggle.addEventListener('click', () => {
  const navHeight = navLinks.getBoundingClientRect().height;
  const linkHeight = links.getBoundingClientRect().height;
  nav.classList.toggle('show-links');
  if (navHeight === 0) {
    navLinks.style.height = `${linkHeight}px`;
  } else navLinks.style.height = 0;
});

const navHead = window.addEventListener('scroll', () => {
  const navPos = window.pageYOffset;
  if (navPos >= navHeader.clientHeight) navHeader.classList.add('nav-fixed');
  else navHeader.classList.remove('nav-fixed');
});

const scrollLink = document.querySelectorAll('.scroll-link');

const smoothScroll = scrollLink.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    const fixedNav = navHeader.classList.contains('nav-fixed');
    const navHeight = navHeader.getBoundingClientRect().height;
    const navLinkHeight = navLinks.getBoundingClientRect().height;

    let position = element.offsetTop - navHeight;

    if (!fixedNav) position = position - navHeight;
    if (navHeight > 78) position = position + navLinkHeight;

    window.scrollTo({ left: 0, top: position });
    navLinks.style.height = 0;
    nav.classList.remove('show-links');
  });
});

export { navHead, navMenu, smoothScroll };
