const scrollTopBtn = document.querySelector('.scroll-top');

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
});

// ==============

const body = document.querySelector('body');
const iysModal = document.querySelector('.iys-modal');

if (iysModal) {
  const openModalBtn = document.querySelector('.js-iysModalBtn');
  const closeModalBtn = document.querySelector('.iys-modal__close');

  openModalBtn.addEventListener('click', () => openModal());
  closeModalBtn.addEventListener('click', () => closeModal());

  function openModal() {
    iysModal.classList.add('js-open-modal');
    body.classList.add('js-overflowHidden');
  }

  function closeModal() {
    iysModal.classList.remove('js-open-modal');
    body.classList.remove('js-overflowHidden');
  }
}
// =========================

const selectMenu = document.querySelector('.select');

if (selectMenu) {
  const selectBtn = document.querySelector('.select__btn');
  const selectListItem = document.querySelector('.select__list__item');

  selectBtn.addEventListener('click', () => {
    selectMenu.classList.toggle('select--visible');
  });

  window.addEventListener('click', (e) => {
    if (e.target !== selectBtn && e.target !== selectListItem) {
      selectMenu.classList.remove('select--visible');
    }
  });
}

// =========================

const menuBtns = document.querySelector('.mobileMenu');
const openMenuBtn = document.querySelector('.mobileMenu__open');
const closeMenuBtn = document.querySelector('.mobileMenu__close');
const resNav = document.querySelector('.main-nav');
const resNav2 = document.querySelector('.main-nav2');

openMenuBtn.addEventListener('click', openMobileMenu);
closeMenuBtn.addEventListener('click', closeMobileMenu);

function openMobileMenu() {
  if (resNav2) {
    let nav = resNav2;
    nav.classList.add('js-openMenu');
  }

  if (resNav) {
    let nav = resNav;
    nav.classList.add('js-openMenu');
  }

  menuBtns.classList.add('js-openMenu');
  body.classList.add('js-overflowHidden');
  console.log('open');
}

function closeMobileMenu() {
  if (resNav) {
    let nav = resNav;
    nav.classList.remove('js-openMenu');
  }

  if (resNav2) {
    let nav = resNav2;
    nav.classList.remove('js-openMenu');
  }

  menuBtns.classList.remove('js-openMenu');
  body.classList.remove('js-overflowHidden');
  console.log('close');
}

const mediaLarge = window.matchMedia('(min-width: 1060px)');

window.addEventListener('DOMContentLoaded', init);

function init() {
  if (mediaLarge.matches) {
    closeMobileMenu();
  }
}
// ==================

import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';

const heroSwiper = new Swiper('.heroSwiper', {
  loop: true,
  spaceBetween: 600,
  modules: [Pagination, Navigation, Autoplay],
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets',
  },
});
