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
