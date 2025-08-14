//Starting  animation of #element
var typedElement = document.getElementById('element');
if (typedElement) {
    var typed = new Typed('#element', {
        strings: ['Engineering Student', 'Programmer', 'Frontend Developer', 'Frontend Designer.'],
        typeSpeed: 50,
    });
}
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

//Sliding down animation of Navbar on scrolling
const navbar = document.getElementById("navbar");
const navContent = document.getElementsByClassName("nav-content");
const navTags = document.querySelectorAll(".nav-tags");

let previousScrollPosition = window.pageYOffset;

window.onscroll = function () {
  let currentScrollPosition = window.pageYOffset;
  if (window.innerWidth > 500) {
    if(previousScrollPosition < currentScrollPosition){
      navbar.style.justifyContent = 'space-between';
      navbar.style.margin = '0 40vh';
      navbar.style.marginTop = '15px';
      navbar.style.padding = '0 30px';
      navbar.style.height = '50px';
      navbar.style.borderRadius = '10px';
      navTags.forEach(navTags => {
        navTags.style.margin = '0 8px';
      })
    }else{
      navbar.style.justifyContent = 'space-around';
      navbar.style.margin = '0';
      navbar.style.marginTop = '0';
      navbar.style.padding = '0';
      navbar.style.borderRadius = '0';
      navTags.forEach(navTags => {
       navTags.style.margin = '0 23px';
      })
    }
    previousScrollPosition = currentScrollPosition;
  }
};


//Elements animation on scroll
const elements = document.querySelectorAll('[data-animate]');
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      const animationName = entry.target.dataset.animate;
      entry.target.style.animation = `${animationName} 2s ease forwards`;
      // obs.unobserve(entry.target);
    }else{
      entry.target.style.animation = "none";
    }
  });
}, { threshold: [0.1] });
elements.forEach(el => observer.observe(el));