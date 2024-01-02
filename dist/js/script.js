// hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});
// hamburger

// navbar scrol
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.scrollY > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};
// navbar scrol

// Toggle dropdown menu
    document.getElementById('options-menu').addEventListener('click', function () {
      var dropdownMenu = document.getElementById('dropdown-menu');
      dropdownMenu.classList.toggle('hidden');
    });