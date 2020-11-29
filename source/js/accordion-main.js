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
