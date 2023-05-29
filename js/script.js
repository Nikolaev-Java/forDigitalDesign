"use strict";
/* -----------------Скоролл до блока по ссылке-----------------------*/
const headerLink = document.querySelectorAll(".menu__link[data-goto]");
const offsetTopHeader = parseInt(
  getComputedStyle(document.querySelector(".catalog")).paddingTop
);
if (headerLink) {
  headerLink.forEach((headerLinks) => {
    headerLinks.addEventListener("click", function (e) {
      const menuLink = e.target.closest(".menu__link");
      if (
        menuLink.dataset.goto &&
        document.querySelector(menuLink.dataset.goto)
      ) {
        const goToBlock = document.querySelector(menuLink.dataset.goto);
        const goToBlockPosition = goToBlock.offsetTop - offsetTopHeader;
        window.scrollTo({
          top: goToBlockPosition,
          behavior: "smooth",
        });
        e.preventDefault();
      }
    });
  });
}
/* -----------------Скоролл до блока по ссылке-----------------------*/
/* -----------------Кнопка вверх-----------------------*/
const bntUp = document.querySelector(".btn-up");
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY || document.documentElement.scrollTop;
  if (scrollY > 300) {
    bntUp.classList.remove("_hide");
  } else {
    bntUp.classList.add("_hide");
  }
});
bntUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
/* ---------------------------------------------------*/
/* -----------------------Дата------------------------*/
function getDayInfo(dateStr) {
  let date = new Date(
    dateStr.replace(/(\d{2})\.(\d{2})\.(\d{4})/g, "$3-$2-$1")
  );
  let daysWeek = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  let numberWeek = Math.ceil(date.getDate() / 7);
  let month = [
    "Января",
    "Декабря",
    "Февраля",
    "Марта",
    "Мая",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря",
  ];
  return `${daysWeek[date.getDay()]}, ${numberWeek} неделя ${
    month[date.getMonth()]
  } ${date.getFullYear()} года`;
}
const dateElement = document.querySelectorAll(".items-goods__date");
dateElement.forEach((el) => {
  el.textContent = getDayInfo(el.textContent);
});
/* ---------------------------------------------------*/
/* -----------------------Popup------------------------*/
const btnAddToCart = document.querySelectorAll(".btn--cart");
const popup = document.getElementById("popup");
const body = document.querySelector("body");
const lockPadding = document.querySelectorAll(".lock-padding");
const btnBuy = document.querySelector(".btn-buy");
const btnClose = document.querySelector(".btn-close");
const timeOut = 800;
if (btnAddToCart) {
  btnAddToCart.forEach((el) => {
    el.addEventListener("click", openPopup);
  });
}
function openPopup() {
  popup.classList.add("open");
  lockBody();
  popup.addEventListener("click", (e) => {
    if (!e.target.closest(".popup__content")) {
      closePopup();
    }
  });
}
btnBuy.addEventListener("click", (e) => {
  e.preventDefault();
  closePopup();
  alert("Спасибо за покупуку");
});
btnClose.addEventListener("click", (e) => {
  e.preventDefault();
  closePopup();
});
function closePopup() {
  popup.classList.remove("open");
  unlockBody();
}
function lockBody() {
  const lockPaddingValue =
    window.innerWidth - document.querySelector(".wrapper").offsetWidth;
  body.style.paddingRight = lockPaddingValue + "px";
  body.classList.add("lock");
  if (lockPadding) {
    lockPadding.forEach((el) => {
      el.style.paddingRight = lockPaddingValue + "px";
    });
  }
}
function unlockBody() {
  setTimeout(() => {
    if (lockPadding) {
      lockPadding.forEach((el) => {
        el.style.paddingRight = "0px";
      });
    }
    body.style.paddingRight = "0px";
    body.classList.remove("lock");
  }, timeOut);
}

/* ---------------------------------------------------*/
/* -----------------Смена темы -----------------------*/

const buttonChangeTheme = document.querySelector(".menu__btn-change-theme");
buttonChangeTheme.addEventListener("click", () => {
  document.body.classList.toggle("_dark-theme");
});

/* ----------------------------------------------------*/
