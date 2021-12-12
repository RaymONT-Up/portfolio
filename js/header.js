// change theme
var btn = document.querySelector(".theme-button");
var link = document.getElementById("theme-link");
// on click change load style in link
btn.addEventListener("click", function () {
  ChangeTheme();
});

function ChangeTheme() {
  let lightTheme = "css/white-theme.css";
  let darkTheme = "css/black-theme.css";

  var currTheme = link.getAttribute("href");
  var theme = "";

  if (currTheme == lightTheme) {
    currTheme = darkTheme;
    theme = "dark";
  } else {
    currTheme = lightTheme;
    theme = "light";
  }

  link.setAttribute("href", currTheme);
}

// burger menu
(function () {
  const burger = document.querySelector(".header__burger");
  const menu = document.querySelector(".header__nav");
  const body = document.querySelector(".body");
  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
  });
  burger.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
  burger.addEventListener("click", () => {
    body.classList.toggle("active");
  });
})();
// fixed scroll menu
const hero = document.querySelector(".project-hero, .hero, .portfolio");
const bodyScroll = document.querySelector(".body");
const header = document.querySelector(".header");

const headerProjectFixed = () => {
  let scrollTop = window.scrollY;
  let heroEnd = hero.clientHeight / 1.4;

  if (scrollTop >= heroEnd) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }

  if (scrollTop <= heroEnd) {
  } else {
    bodyScroll.classList.remove("hidden");
  }
};

window.addEventListener("scroll", () => {
  headerProjectFixed();
});
