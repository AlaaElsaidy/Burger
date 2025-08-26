/*~~~~~~~~~~~~~~~ TOGGLE BUTTON ~~~~~~~~~~~~~~~*/
const nav_menu = document.getElementById("nav-menu");
const menu_icon = document.getElementById("menu-icon");
const close_icon = document.getElementById("close-icon");
const nav_links = document.querySelectorAll(".nav-links");

nav_links.forEach((link) => {
  link.addEventListener("click", () => {
    nav_menu.classList.add("hidden");
  });
});

menu_icon.addEventListener("click", () => {
  nav_menu.classList.remove("hidden");
});

close_icon.addEventListener("click", () => {
  nav_menu.classList.add("hidden");
});
/*~~~~~~~~~~~~~~~ TABS ~~~~~~~~~~~~~~~*/
const tabs = document.querySelectorAll(".tabs_wrap ul li");
const all = document.querySelectorAll(".item-wrap");
const food = document.querySelectorAll(".food");
const snack = document.querySelectorAll(".snack");
const beverage = document.querySelectorAll(".beverage");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => tab.classList.remove("active"));
    tab.classList.toggle("active");
    const tab_btns = tab.getAttribute("data-key");
    all.forEach((item) => item.classList.add("hidden"));
    if (tab_btns === "food") {
      food.forEach((item) => item.classList.remove("hidden"));
    } else if (tab_btns === "snack") {
      snack.forEach((item) => item.classList.remove("hidden"));
    } else if (tab_btns === "beverage") {
      beverage.forEach((item) => item.classList.remove("hidden"));
    } else {
      all.forEach((item) => item.classList.remove("hidden"));
    }
  });
});

/*~~~~~~~~~~~~~~~ DARK LIGHT THEME ~~~~~~~~~~~~~~~*/

const theme_toggle = document.getElementById("theme-toggle");

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
    theme_toggle.classList.add("ri-sun-line");
    theme_toggle.classList.remove("ri-moon-line");
  } else {
    document.documentElement.classList.remove("dark");
    theme_toggle.classList.add("ri-moon-line");
    theme_toggle.classList.remove("ri-sun-line");
  }
});

theme_toggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");

  if (document.documentElement.classList.contains("dark")) {
    theme_toggle.classList.add("ri-sun-line");
    theme_toggle.classList.remove("ri-moon-line");
    localStorage.setItem("theme", "dark");
  } else {
    theme_toggle.classList.add("ri-moon-line");
    theme_toggle.classList.remove("ri-sun-line");
    localStorage.setItem("theme", "light");
  }
});

/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/
const scrollBtn = document.getElementById("scroll-btn");
window.addEventListener("scroll", () => {
  if (window.scrollY > 250) {
    scrollBtn.classList.remove("-bottom-1/2");
    scrollBtn.classList.add("bottom-4");
  } else {
    scrollBtn.classList.add("-bottom-1/2");
    scrollBtn.classList.remove("bottom-4");
  }
});
/*~~~~~~~~~~~~~~~ CHANGE BACKGROUND HEADER ~~~~~~~~~~~~~~~*/
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("border-b", "border-secondaryColor");
  } else {
    header.classList.remove("border-b", "border-secondaryColor");
  }
});
/*~~~~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~~~~*/
const sr = ScrollReveal({
  origin: "top",
  duration: 2500,
  delay: 400,
});

sr.reveal(".home__image");

sr.reveal(".home__content", { origin: "bottom" });

sr.reveal(".category__card", {interval: 300 });

sr.reveal(".promo__card1", { origin: "left" });

sr.reveal(".promo__card2", { origin: "right" });

sr.reveal(".about__image", { origin: "bottom" });
sr.reveal(".about__content", { origin: "top" });

sr.reveal(".customer__review", { origin: "right" });

sr.reveal(".menu__items", { origin: "right" });

sr.reveal("footer");
