// Переключение меню - аккордеона в блоке Частые вопросы
/*
var accordionItemTrigger = document.querySelectorAll(".faq__accordion-item-trigger");
var accordionItem = document.querySelectorAll(".faq__accordion-item");
var arrowItems = document.querySelectorAll(".faq__accordion-item-svg");
var activeArrow = document.querySelector(".faq__accordion-item--active").querySelector(".faq__accordion-item-svg");

activeArrow.style.transform = "rotate(180deg)";

accordionItemTrigger.forEach(function (item) {
  item.addEventListener("click", () => {
    arrowItems.forEach(function (item) {
      item.style.transform = "none";
    })

    const parent = item.parentNode;
    var arrowItem = item.querySelector(".faq__accordion-item-svg");
    arrowItem.style.transform = "rotate(360deg)";
    if (parent.classList.contains("faq__accordion-item--active")) {
      parent.classList.remove("faq__accordion-item--active");
    } else {
      accordionItem.forEach((child) => child.classList.remove("faq__accordion-item--active"));
      parent.classList.add("faq__accordion-item--active");
      arrowItem.style.transform = "rotate(180deg)";
    }
  })
});
*/

// Переключение меню - аккордеона в фильтре

/*
var accordionItems = document.querySelectorAll(".filter__item");
var arrowItems = document.querySelectorAll(".filter__item-svg");
var activeArrows = document.querySelectorAll(".filter__item--active");

activeArrows.forEach(function (item) {
  item.querySelector(".filter__item-svg").style.transform = "rotate(180deg)";
})

accordionItems.forEach(function (item) {
  item.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (item.classList.contains("filter__item--active")) {
      item.classList.remove("filter__item--active");
      item.querySelector(".filter__item-svg").style.transform = "none";
    } else {
      item.classList.add("filter__item--active");
      item.querySelector(".filter__item-svg").style.transform = "rotate(180deg)";
    }
  });
});
*/

var popupCart = document.querySelector(".popup");
var popupLogin = document.querySelector(".login");
var loginButton = document.querySelector(".page-header__login");
var cartLink = document.querySelector(".page-header__cart-link");
var overlayLogin = document.querySelector(".overlay__login");
var overlayCart = document.querySelector(".overlay__cart");
var closeLogin = popupLogin.querySelector(".login__close");
var closeCart = popupCart.querySelector(".popup__close");

var acceptCart = popupCart.querySelector(".popup__button");
var htmlDoc = document.querySelector("html");

var emailForm = document.querySelector(".email-form")
var acceptEmail = document.querySelector(".page-footer__email-button");

var loginForm = document.querySelector(".login__form")
var acceptLogin = loginForm.querySelector(".login__button");

var userEmail = "";

var isStorageSupport = true;
var currentEmail = "";

try {
  currentEmail = localStorage.getItem("userEmail");
} catch (err) {
  isStorageSupport = false;
}

popupCart.classList.remove("popup--nojs");
popupLogin.classList.remove("login--nojs");

loginButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  userEmail = loginForm.elements.user_email;
  console.log(userEmail);
  popupLogin.classList.add("login--show");
  overlayLogin.classList.add("overlay__login--show");
  htmlDoc.classList.add("disable-scroll");
  console.log(userEmail);
  if (currentEmail) {
    userEmail.value = currentEmail;
    userEmail.focus();
  }
});

closeLogin.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupLogin.classList.remove("login--show");
  overlayLogin.classList.remove("overlay__login--show");
  htmlDoc.classList.toggle("disable-scroll");
});

var checkLocalStorage = function () {
  if (isStorageSupport) {
    localStorage.setItem("userEmail", userEmail.value);
  }
}

loginForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  checkLocalStorage();
  popupLogin.classList.remove("login--show");
  overlayLogin.classList.remove("overlay__login--show");
  htmlDoc.classList.toggle("disable-scroll");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (overlayLogin.classList.contains("overlay__login--show")) {
      overlayLogin.classList.remove("overlay__login--show");
      htmlDoc.classList.toggle("disable-scroll");
    } else if (overlayCart.classList.contains("overlay__cart--show")) {
        overlayCart.classList.remove("overlay__cart--show");
        htmlDoc.classList.toggle("disable-scroll");
    }
  }
});

document.onclick = function (evt) {
  if (evt.target.className.toString().includes("overlay")) {
    overlayLogin.classList.remove("overlay__login--show");
    overlayCart.classList.remove("overlay__cart--show");
    htmlDoc.classList.remove("disable-scroll");
  };
};

emailForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  userEmail = emailForm.elements.user_email;
  checkLocalStorage();
});

cartLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupCart.classList.add("popup--show");
  overlayCart.classList.add("overlay__cart--show");
  htmlDoc.classList.add("disable-scroll");
});

closeCart.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupCart.classList.remove("popup--show");
  overlayCart.classList.remove("overlay__cart--show");
  htmlDoc.classList.toggle("disable-scroll");
});
