// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#hamburger_menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik diluar sidebar untuk close window
const hamburger = document.querySelector("#hamburger_menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
