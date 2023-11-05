const header = document.querySelector("header");

window.addEventListener("scroll", function () { 
    header.classList.toggle("sticky", window.scrollY>0);
})

let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

window.onscroll = () => {
    menu.classList.remove("bx-x");
    navbar.classList.remove("open");
};

const sections = document.querySelectorAll("[data-section]");

const scrollReveal = function () {
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].getBoundingClientRect().top < window.innerHeight / 2) {
      sections[i].classList.add("active");
    }
  }
}

scrollReveal();

addEventOnElem(window, "scroll", scrollReveal);