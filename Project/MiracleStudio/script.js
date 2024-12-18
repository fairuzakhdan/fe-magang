document.addEventListener("DOMContentLoaded", () => {
  // Fetch navbar.html dan masukkan ke dalam elemen dengan id="navbar"
  const navbarContainer = document.querySelectorAll(".navbar");
  navbarContainer.forEach((container) => {
    if (container) {
        fetch("navbar.html")
          .then((res) => {
            if (!res.ok) throw new Error("Failed to load navbar");
            return res.text();
          })
          .then((data) => {
            container.innerHTML = data;
            const showPage = (pageId) => {
              const pages = document.querySelectorAll(".page");
              pages.forEach((page) => {
                if (page.id === pageId) {
                  page.style.display = "block";
                } else {
                  page.style.display = "none";
                }
              });
            }
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
          })
          .catch((error) => console.error("Error loading navbar:", error));
      }
  })

});
