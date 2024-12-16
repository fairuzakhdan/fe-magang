window.addEventListener('scroll',() => {
    const navbar = document.querySelector('.navbar-expand-lg');
    if (window.scrollY > 1) {
        navbar.style.backgroundColor = '#6c1db5';
        // navbar.style.color = '#ffffff !important';
        navbar.classList.add('shadow-lg');
    }
})