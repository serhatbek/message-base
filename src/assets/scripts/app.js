const tabButtons = document.querySelectorAll('.section-tabs__btn');
const tabItems = document.querySelectorAll('.section-tabs__content');

tabButtons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    tabButtons.forEach((btn) => btn.classList.remove('js-active'));
    btn.classList.add('js-active');

    tabItems.forEach((item) => item.classList.remove('js-active'));
    tabItems[index].classList.add('js-active');
  });
});

// ==============

const scrollTopBtn = document.querySelector('.scroll-top');

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
});

// ==============

const openModalBtn = document.querySelector('.js-iysModalBtn');
const closeModalBtn = document.querySelector('.iys-modal__close');
const body = document.querySelector('body');
const iysModal = document.querySelector('.iys-modal');

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
