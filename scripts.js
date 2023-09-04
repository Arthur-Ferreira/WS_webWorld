const carousel = document.querySelector(".carousel-items");
const partnes = document.querySelector(".partners-lst");
const mobileMenuBtn = document.getElementById('mobile-menu');
const mobileMenuNavigationElem = document.querySelector('.navigation');

function scroll(event) {
  if (event.deltaY > 0) {
    event.target.scrollBy(300, 0);
  } else {
    event.target.scrollBy(-300, 0);
  }
}

function toggleMenu(event) {
  
  if(event.target.id === 'mobile-menu') {
    mobileMenuNavigationElem.classList.toggle('open');
  } 
}

addEventListener("wheel", scroll)
addEventListener("wheel", scroll)
addEventListener("click", toggleMenu)