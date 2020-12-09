// Переключение меню - аккордеона в блоке Частые вопросы
var faqItemTrigger = document.querySelectorAll(".faq__accordion-item-trigger");
var faqAccordionItem = document.querySelectorAll(".faq__accordion-item");
var faqArrowItems = document.querySelectorAll(".faq__accordion-item-svg");
var faqActiveItem = document.querySelector(".faq__accordion-item--active");

if (faqActiveItem) {
  var faqActiveArrow = faqActiveItem.querySelector(".faq__accordion-item-svg");
  faqActiveArrow.style.transform = "rotate(180deg)";
} else  {
  var faqActiveArrow = null;
}

faqItemTrigger.forEach(function (item) {
  item.addEventListener("click", () => {
    faqArrowItems.forEach(function (item) {
      item.style.transform = "none";
    })

    const parent = item.parentNode;
    var faqArrowItem = item.querySelector(".faq__accordion-item-svg");
    faqArrowItem.style.transform = "rotate(360deg)";
    if (parent.classList.contains("faq__accordion-item--active")) {
      parent.classList.remove("faq__accordion-item--active");
    } else {
      faqAccordionItem.forEach((child) => child.classList.remove("faq__accordion-item--active"));
      parent.classList.add("faq__accordion-item--active");
      faqArrowItem.style.transform = "rotate(180deg)";
    }
  })
});

// Переключение меню - аккордеона в фильтре

var filterButtons = document.querySelectorAll(".filter__item-trigger");
var filterArrows = document.querySelectorAll(".filter__item-svg");
var filterActiveArrows = document.querySelectorAll(".filter__item--active");

filterActiveArrows.forEach(function (item) {
  item.querySelector(".filter__item-svg").style.transform = "rotate(180deg)";
})

filterButtons.forEach(function (item) {
  item.addEventListener("click", function (evt) {
    evt.preventDefault();
    var filterItemContent = item.nextElementSibling;
    if (filterItemContent.classList.contains("filter__item-content--active")) {
      filterItemContent.classList.remove("filter__item-content--active");
    } else {
      filterItemContent.classList.add("filter__item-content--active");
    }
    if (item.classList.contains("filter__item-trigger--active")) {
      item.classList.remove("filter__item-trigger--active");
      item.querySelector(".filter__item-svg").style.transform = "none";
    } else {
      item.classList.add("filter__item-trigger--active");
      item.querySelector(".filter__item-svg").style.transform = "rotate(180deg)";
    }
  });
});

// Модальные окна логина и корзины
var popupCart = document.querySelector(".popup");
var popupLogin = document.querySelector(".login");
var loginButton = document.querySelector(".menu__login");
var cartLink = document.querySelector(".menu__cart-link");
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
  userEmail.focus();
  if (currentEmail) {
    userEmail.value = currentEmail;
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

//Показ фильтра на планшете и мобиле
var filter = document.querySelector(".filter");
var catalogFilterButton = document.querySelector(".catalog__filter-btn");
var filterClose = document.querySelector(".filter__form-close");
if (catalogFilterButton) {
  catalogFilterButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    filter.classList.add("filter--show");
  })
} else  {
  catalogFilterButton = null;
}
//console.log(filterClose);
if (filterClose) {
  filterClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    filter.classList.remove("filter--show");
  })
}

//Мобильное меню
var mobileMenu = document.querySelector(".menu");
mobileMenu.classList.remove("menu--nojs");
var buttonBurger = document.querySelector(".burger-menu");

buttonBurger.addEventListener("click", function() {
  mobileMenu.classList.toggle("menu--hide");
  mobileMenu.classList.toggle("menu--show");
});

// Initialize Swiper
var swiper = Swiper;
swiper = new Swiper(".swiper-container.swiper-container--newin", {
  slidesPerView: 4,
  spaceBetween: 25,
  slidesPerGroup: 4,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
      slidesPerGroup: 4,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 2,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
    },
    320: {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 2,
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        renderFraction: function (currentClass, totalClass) {
          return '<span class="' + currentClass + '"></span>' + ' of ' + '<span class="' + totalClass + '"></span>';
        },
      },
    },
  }
});
