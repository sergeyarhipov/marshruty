var navigationButton = document.querySelector(".navigation__button");
var menu = document.querySelector(".menu");
var mainHeader = document.querySelector(".main-header");

navigationButton.addEventListener("click", function(evt) {
    if (menu.classList.contains("menu--invisible")) {
        menu.classList.remove("menu--invisible");
    } else {
        menu.classList.add("menu--invisible");
    }
});