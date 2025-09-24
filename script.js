// Copy menu for Mobile

function copyMenu() {
    //copy inside .dpt-cat to .departments
    var dptCategory = document.querySelector('.dpt-cat');
    var dptPlace = document.querySelector('.departments');
    dptPlace.innerHTML = dptCategory.innerHTML;

    //copy inside nav to nav
    var mainNav = document.querySelector('.header-nav nav');
    var navPlace = document.querySelector('.off-canvas nav');
    navPlace.innerHTML = mainNav.innerHTML;

    //copy inside header-top to thetop-nav
    // var topNav = document.querySelector('.header-top .wrapper');
    // var topPlace = document.querySelector('.off-canvas thetop-nav');
    // topPlace.innerHTML = topNav.innerHTML;
}
copyMenu();

//Show mobile menu
const menuButton = document.querySelector('.trigger'),
        closeButton = document.querySelector('.t-close'),
        addClass = document.querySelector('.site');
menuButton.addEventListener('click', function() {
    addClass.classList.toggle('showmenu'),
    document.body.classList.toggle('no-scroll')
})
closeButton.addEventListener('click', function() {
    addClass.classList.toggle('showmenu'),
    document.body.classList.toggle('no-scroll')
})



// Show Sub-Menu on Mobile
const submenu = document.querySelectorAll('.has-child .icon-small');
submenu.forEach((menu) => menu.addEventListener('click', toggle));

function toggle(e) {
    e.preventDefault();
    submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand') : null);
    if (this.closest('.has-child').classList != 'expand');
    this.closest('.has-child').classList.toggle('expand');
}


// Slider
const swiper = new Swiper('.swiper', {
  loop: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

});


// Show Search 
const searchButton = document.querySelector('.t-search'),
      tClose = document.querySelector('.search-close'),
      showClass = document.querySelector('.site');

searchButton.addEventListener('click', function() {
  showClass.classList.toggle('showsearch')
})
tClose.addEventListener('click', function() {
  showClass.classList.remove('showsearch')
})





// Get the button
let mybutton = document.getElementById("scrollToTopBtn");
let headerNav = document.getElementById("header");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
        headerNav.style.height = "70px";
        headerNav.style.paddingTop = "0px";
        headerNav.style.paddingBottom = "5px";
    } else {
        mybutton.style.display = "none";
        headerNav.style.height = "80px";
    }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scroll effect
    });
}


