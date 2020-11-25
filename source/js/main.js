/*****************************МОБИЛЬНОЕ МЕНЮ**********************************/
"use strict";
(function () {
  var header = document.querySelector(".page-header");
  var buttonBurger = document.querySelector(".page-header__burger-menu");
  var jewelryNavigation = document.querySelector(".navigation");
  var logoWhite = document.querySelector(".logo__white");
  var logoBeige = document.querySelector(".logo__beige");
  var login = document.querySelector(".page-header__login");
  var search = document.querySelector(".search-form");

  //var mobileMenu = document.querySelector(".site-nav");
  //var closeButton = document.querySelector(".page-header__mobile-menu-close");
  //var whiteLogo = document.querySelector(".logo--white");
  //var blueLogo = document.querySelector(".logo--blue");
  //var headerMenu = document.querySelector(".page-header__menu");

  jewelryNavigation.classList.remove("navigation--nojs"); // спрятанная навигация при работающем js
  login.classList.remove("page-header__login--nojs");
  header.classList.remove("page-header--nojs"); // белый хедер при работающем js
  //headerMenu.classList.remove("page-header__menu--nojs"); // меню на синем фоне при работающем js
  logoBeige.classList.remove("logo__beige--nojs"); // бежевый лого при работающем js
  logoWhite.classList.remove("logo__white--nojs"); // беksq лого без js
  search.classList.remove("page-header__search--nojs");
  if (buttonBurger !== null) {
    buttonBurger.classList.remove("page-header__burger-menu--nojs");
    header.classList.remove("page-header--nojs")
    buttonBurger.addEventListener("click", function (evt) {
      evt.preventDefault();
      jewelryNavigation.classList.add("navigation--show");
      login.classList.add("page-header__login--show");
      logoWhite.classList.add("logo__white--show");
      logoBeige.classList.add("logo__beige--hide");
      header.classList.add("page-header--show");
      search.classList.add("search-form--show");
    });
  }
  //closeButton.classList.remove("page-header__mobile-menu-close--nojs");
  //whiteLogo.classList.remove("logo--white--nojs");
  //blueLogo.classList.remove("logo--blue--nojs");

  /*closeButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    mobileMenu.classList.remove("site-nav--show");
    mobileMenu.classList.add("site-nav--hide");
    headerMenu.classList.remove("page-header__menu--show");
    buttonBurger.classList.remove("page-header__mobile-menu-burger--hide");
    whiteLogo.classList.remove("logo--white--hide");
    blueLogo.classList.remove("logo--blue--show");
    closeButton.classList.remove("page-header__mobile-menu-close--show");
  });*/

  /*
  var formButton = document.querySelector(".form__button");
  var formCheckbox = document.querySelector(".form__checkbox");

  formCheckbox.addEventListener("change", function () {

    if (formCheckbox.checked) {
      formButton.removeAttribute("disabled");
    } else {
      formButton.toggleAttribute("disabled");
    }
  });
  */

})();

// Переключение меню - аккордеона в блоке Частые вопросы
var accordionItemTrigger = document.querySelectorAll(".accordion__item-trigger");
var accordionItem = document.querySelectorAll(".accordion__item");
var arrowItems = document.querySelectorAll(".accordion__item-svg");
//var activeitem = document.querySelectorAll(".accordion__item--active");

var activeArrow = document.querySelector(".accordion__item--active").querySelector(".accordion__item-svg");
activeArrow.style.transform = "rotate(180deg)";

/*
activeItem.forEach(function (item) {
  item.addEventListener("click")
})
*/
accordionItemTrigger.forEach(function (item) {
  item.addEventListener("click", () => {
    arrowItems.forEach(function (item) {
      item.style.transform = "none";
    })

    const parent = item.parentNode;
    var arrowItem = item.querySelector(".accordion__item-svg");
    arrowItem.style.transform = "rotate(360deg)";
    if (parent.classList.contains("accordion__item--active")) {
      parent.classList.remove("accordion__item--active");
    } else {
      accordionItem.forEach((child) => child.classList.remove("accordion__item--active"))

      parent.classList.add("accordion__item--active");
      arrowItem.style.transform = "rotate(180deg)";
    }
  })
});
