const teksLogo = document.querySelector('.text-logo')
teksLogo.style.color = 'white'
console.log(teksLogo);
const navbar = document.querySelector('.navbar-expand-lg');
const navLink = document.querySelectorAll('.nav-link');
window.addEventListener('scroll',() => {
   
    
        if (window.scrollY > 1) {
            navbar.style.backgroundColor = 'white';
            teksLogo.style.color = ' #811b9e';
            // nav.classList.remove('text-black');
            // nav.classList.add('text-white');
            // navbar.style.color = '#ffffff !important';
            navbar.classList.add('shadow-lg');
            navbar.style.transition = '0.5s';
        } else {
            navbar.removeAttribute('style');
            teksLogo.style.color = 'white';
            // nav.classList.remove('text-white');
            // nav.classList.add('text-black');
            navbar.classList.remove('shadow-lg');
            navbar.style.transition = '0.5s';
        }

    // if (window.scrollY > 1) {
       
    // }
})