/*****************************МОБИЛЬНОЕ МЕНЮ**********************************/
"use strict";
var mobileMenu = document.querySelector(".mobile-menu");
mobileMenu.classList.remove("mobile-menu--nojs");
var buttonBurger = document.querySelector(".burger-menu");

buttonBurger.addEventListener("click", function() {
  mobileMenu.classList.toggle("mobile-menu--hide");
  mobileMenu.classList.toggle("mobile-menu--show");
});
