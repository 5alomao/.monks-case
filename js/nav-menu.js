const menuBars = document.getElementById("menu-bars");
const nav = document.getElementById("nav");
const navMenu = document.querySelector(".nav-menu");
const navOptions = document.getElementById("nav-options");
const navList = document.querySelector(".nav-list");

// Alternar menu ao clicar
menuBars.addEventListener("click", () => {
  nav.classList.toggle("active");
  navMenu.classList.toggle("active");
  navOptions.classList.toggle("active");
  navList.classList.toggle("active");

  // Mudar cor dos links e do ::before quando o menu estiver ativo
  const navItems = document.querySelectorAll(".nav-list-item a");
  navItems.forEach((item) => {
    item.classList.toggle("active"); // Aplica a classe 'active' ao link
  });
});
