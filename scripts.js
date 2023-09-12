const mobileMenuBtn = document.getElementById('mobile-menu');
const mobileMenuNavigationElem = document.querySelector('.navigation');

function toggleMenu(event) {  
  if(event.target.id === 'mobile-menu') {
    mobileMenuNavigationElem.classList.toggle('open');
  } 
}

mobileMenuBtn.addEventListener("click", toggleMenu);

