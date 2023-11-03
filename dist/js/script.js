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

// btc countdown
var nhiframe = document.getElementById('nhiframe');
							window.addEventListener('message', function(e) {
								// message that was passed from iframe page
								// check message content if you have other messages too
								let message = e.data;
								nhiframe.style.height = message.height + 'px';
							} , false);
// btc countdown