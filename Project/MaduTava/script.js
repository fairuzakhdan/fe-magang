document.addEventListener("scroll", (e) => {
  const bgNavbar = document.querySelector(".navbar");

  console.log(bgNavbar);
  if (window.scrollY > 1) {
    bgNavbar.style.backgroundColor = "#bb752b";
    bgNavbar.classList.add("shadow-lg");
    bgNavbar.style.transition = ".5s";
  } else {
    bgNavbar.removeAttribute("style");
    bgNavbar.classList.remove("shadow-lg");
    bgNavbar.style.transition = ".5s";
  }
});

const filterProducts = (size) => {
  const products = document.querySelectorAll(".products");
  for (let product of products) {
    if (size === "all" || product.classList.contains(size)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  }
};

const filterPrices = (price) => {
    const products = document.querySelectorAll(".products");
    for (let product of products) {
        if (price === 'all' || product.classList.contains(price)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    }
}

filterProducts("all");
filterPrices('all')