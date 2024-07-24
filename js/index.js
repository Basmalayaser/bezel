var typed = new Typed('#element', {
    strings: ['websites', 'software','apps'],
    typeSpeed: 100,
    loop: true,
    loopCount: Infinity,
    
  });


const navbar = document.getElementById('navbar');
window.onscroll = function () { 
  if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 700 ) {
    navbar.classList.add("nav-colored");
    navbar.classList.remove("transparent");
    
    } 
    else {
      navbar.classList.add("transparent");
      navbar.classList.remove("nav-colored");
    }
};