//Starting  animation of #element
var typed = new Typed('#element', {
    strings: ['Engineering Student', 'Programmer', 'Web Developer', 'Web Designer.'],
    typeSpeed: 50,
});

//Hamburger Setup
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Close navbar when link is clicked
const navLink = document.querySelectorAll(".nav-link");
navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// Apply theme on toggle
const toggleSwitch = document.querySelector('#switch');
toggleSwitch.addEventListener("change", function (e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
});

// Apply saved theme on load
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  toggleSwitch.checked = currentTheme === "dark";
} else {
  // Optional: default to light
  document.documentElement.setAttribute("data-theme", "light");
}