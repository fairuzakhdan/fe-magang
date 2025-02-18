document.addEventListener("DOMContentLoaded", () => {
  const teksLogo = document.querySelector(".text-logo");
  const navbar = document.querySelector(".navbar-expand-lg");

  if (teksLogo) {
    teksLogo.style.color = "white";
  }
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1) {
        navbar.style.backgroundColor = "white";
        if (teksLogo) {
          teksLogo.style.color = "#811b9e";
        }
        navbar.classList.add("shadow-lg");
        navbar.style.transition = "0.5s";
      } else {
        navbar.removeAttribute("style");
        if (teksLogo) {
          teksLogo.style.color = "811b9e";
        }
        navbar.classList.remove("shadow-lg");
        navbar.style.transition = "0.5s";
      }
    });
  }
  // const navbarContainer = document.que
});
