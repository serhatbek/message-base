const tabButtons=document.querySelectorAll(".section-tabs__btn"),tabItems=document.querySelectorAll(".section-tabs__content");tabButtons.forEach(((e,o)=>{e.addEventListener("click",(()=>{tabButtons.forEach((e=>e.classList.remove("js-active"))),e.classList.add("js-active"),tabItems.forEach((e=>e.classList.remove("js-active"))),tabItems[o].classList.add("js-active")}))}));const scrollTopBtn=document.querySelector(".scroll-top");scrollTopBtn.addEventListener("click",(()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})}));const openModalBtn=document.querySelector(".js-iysModalBtn"),closeModalBtn=document.querySelector(".iys-modal__close"),body=document.querySelector("body"),iysModal=document.querySelector(".iys-modal");function openModal(){iysModal.classList.add("js-open-modal"),body.classList.add("js-overflowHidden")}function closeModal(){iysModal.classList.remove("js-open-modal"),body.classList.remove("js-overflowHidden")}openModalBtn.addEventListener("click",(()=>openModal())),closeModalBtn.addEventListener("click",(()=>closeModal()));const selectMenu=document.querySelector(".select"),selectBtn=document.querySelector(".select__btn");selectBtn.addEventListener("click",(()=>{selectMenu.classList.toggle("select--visible")}));const menuBtns=document.querySelector(".mobileMenu"),openMenuBtn=document.querySelector(".mobileMenu__open"),closeMenuBtn=document.querySelector(".mobileMenu__close"),resNav=document.querySelector(".main-nav");function openMobileMenu(){resNav.classList.add("js-openMenu"),menuBtns.classList.add("js-openMenu"),body.classList.add("js-overflowHidden")}function closeMobileMenu(){resNav.classList.remove("js-openMenu"),menuBtns.classList.remove("js-openMenu"),body.classList.remove("js-overflowHidden")}openMenuBtn.addEventListener("click",openMobileMenu),closeMenuBtn.addEventListener("click",closeMobileMenu);