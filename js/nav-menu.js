const menuBars = document.getElementById("menu-bars");
const nav = document.getElementById("nav");
const navMenu = document.querySelector(".nav-menu");
const navOptions = document.getElementById("nav-options");
const navList = document.querySelector(".nav-list");

menuBars.addEventListener("click", () => {
  nav.classList.toggle("active");
  navMenu.classList.toggle("active");
  navOptions.classList.toggle("active");
  navList.classList.toggle("active");

  const navItems = document.querySelectorAll(".nav-list-item a");
  navItems.forEach((item) => {
    item.classList.toggle("active");
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 840) {
    nav.classList.remove("active");
    navMenu.classList.remove("active");
    navOptions.classList.remove("active");
    navList.classList.remove("active");

    const navItems = document.querySelectorAll(".nav-list-item a");
    navItems.forEach((item) => {
      item.classList.remove("active");
    });
  }
});
