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

  // const navbarContainer = document.querySelectorAll(".navbar");
  // navbarContainer.forEach((container) => {
  //   if (container) {
  //       fetch("navbar.html")
  //         .then((res) => {
  //           if (!res.ok) throw new Error("Failed to load navbar");
  //           return res.text();
  //         })
  //         .then((data) => {
  //           container.innerHTML = data;

  //         })
  //         .catch((error) => console.error("Error loading navbar:", error));
  //     }
  // })

  const webLink = document.getElementById("web-blog");

  const updateLink = document.getElementById("update-blog");
  const trickLink = document.getElementById("trick-blog");

  const tips = document.getElementById("tips");
  const web = document.getElementById("web");
  const update = document.getElementById("update");
  webLink.addEventListener("click", () => {
    web.style.display = "block";
    tips.style.display = "none";
    update.style.display = "none";
  });
  trickLink.addEventListener("click", () => {
    tips.style.display = "block";
    web.style.display = "none";
    update.style.display = "none";
  });
  updateLink.addEventListener("click", () => {
    update.style.display = "block";
    web.style.display = "none";
    tips.style.display = "none";
  });
});
