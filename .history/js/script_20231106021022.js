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

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

sections.forEach((el) => ob