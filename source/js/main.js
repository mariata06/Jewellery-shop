/*****************************МОБИЛЬНОЕ МЕНЮ**********************************/
/*
"use strict";
var header = document.querySelector(".page-header");
var buttonBurger = document.querySelector(".page-header__burger-menu");
var jewelleryNavigation = document.querySelector(".navigation");
var logoWhite = document.querySelector(".logo__white");
var logoBeige = document.querySelector(".logo__beige");
var search = document.querySelector(".search-form");
var loginLink = document.querySelector(".page-header__login");
*/

//var mobileMenu = document.querySelector(".site-nav");
//var closeButton = document.querySelector(".page-header__mobile-menu-close");
//var whiteLogo = document.querySelector(".logo--white");
//var blueLogo = document.querySelector(".logo--blue");
//var headerMenu = document.querySelector(".page-header__menu");

/*
function svgMod() {
  var svgArray = document.querySelectorAll(".svg");
  svgArray.forEach(function (item) {
    item.setAttribute("stroke","#ffffff");
    console.log(item);
  });
};
*/
//var buttonBurgerCloned = document.querySelector
/*
var newHeader = document.querySelector(".page-header--cloned");
document.body.removeChild(newHeader);
buttonBurger.addEventListener("click", function createClone() {
  var newHeader = header.cloneNode(true);
  document.body.appendChild(newHeader);
  newHeader.style.cssText= "position: absolute; top: 0; left: 0; width: 100%; z-index: 100; background-color: #a87b62";
  var newLogoWhite = newHeader.querySelector(".logo__white");
  newLogoWhite.style.display = "block";
  var newLogoBeige = newHeader.querySelector(".logo__beige");
  newLogoBeige.style.display = "none";
  var newNav = newHeader.querySelector(".navigation");
  newNav.style.display = "block";
  var newLogin = newHeader.querySelector(".page-header__login");
  newLogin.style.display = "block";
  newHeader.classList.add("page-header--cloned")
  var newBurger = newHeader.querySelector(".burger-menu__svg");
  newBurger.setAttribute("stroke", "#ffffff");
  newBurger.addEventListener("click", function deleteClone() {
    document.body.removeChild(newHeader);
  });
});
*/
/*
buttonBurger.addEventListener("click", function deleateClone() {
  /*
  if (newHeader) {
    document.body.removeChild(newHeader);
  }
  document.body.removeChild(newHeader);
})
/*
buttonBurger.addEventListener("click", function deleatClone() {
  header.removeChild(newHeader);
})
*/
/*
jewelleryNavigation.classList.remove("navigation--nojs"); // спрятанная навигация при работающем js
loginLink.classList.remove("page-header__login--nojs");
//login.classList.remove("page-header__login--nojs");
header.classList.remove("page-header--nojs"); // белый хедер при работающем js
//headerMenu.classList.remove("page-header__menu--nojs"); // меню на синем фоне при работающем js
logoBeige.classList.remove("logo__beige--nojs"); // бежевый лого при работающем js
logoWhite.classList.remove("logo__white--nojs"); // белый лого без js
search.classList.remove("search-form--nojs");
if (buttonBurger !== null) {
  buttonBurger.classList.remove("page-header__burger-menu--nojs");
  header.classList.remove("page-header--nojs")
  buttonBurger.addEventListener("click", function (evt) {
    evt.preventDefault();
    jewelleryNavigation.classList.add("navigation--show");
    loginLink.classList.add("page-header__login--show");
    logoWhite.classList.add("logo__white--show");
    logoBeige.classList.add("logo__beige--hide");
    header.classList.add("page-header--show");
    search.classList.add("search-form--show");
    svgMod();
  });
}
*/

"use strict";
var mobileMenu = document.querySelector(".mobile-menu");
mobileMenu.classList.remove("mobile-menu--nojs");
var buttonBurger = document.querySelector(".burger-menu");

//listener1
//evt.preventDefault();
//  mobileMenu.classList.add("mobile-menu--show");

/*
buttonBurger.addEventListener("click", function(evt) {
  evt.preventDefault();
  mobileMenu.classList.add("mobile-menu--show");
  buttonBurger.addEventListener("click", function(evt2) {
    evt2.preventDefault();
    mobileMenu.classList.remove("mobile-menu--show");
    //buttonBurger.addEventListener("click", listener);
    //buttonBurger.removeEventListener("click", listenerToHide());
  })
}
*/
buttonBurger.addEventListener("click", function() {
  mobileMenu.classList.toggle("mobile-menu--hide");
  mobileMenu.classList.toggle("mobile-menu--show");
});
  /*
  if (mobileMenu.classList.contains("mobile-menu--show")) {
    mobileMenu.classList.remove("mobile-menu--show");
  }*/

/*
var mobileMenu = document.querySelector(".mobile-menu");
mobileMenu.classList.remove("mobile-menu--nojs");
var buttonBurger = document.querySelector(".burger-menu");
buttonBurger.addEventListener('click', function() {
  this.classList.add("mobile-menu--show");
  if (mobileMenu.classList.contains("mobile-menu--show")) {
    mobileMenu.classList.add("mobile-menu--show");
  } else {
    mobileMenu.classList.remove("mobile-menu--show");
  }
})*/
