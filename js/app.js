const searchInput = document.querySelector("#search-input");
const products = document.querySelectorAll(".product-item");
const buttons = document.querySelectorAll(".filter");
const searchPrice = document
  .querySelector("#search-price")
  .querySelector("button");

const changeClass = (filter) => {
  buttons.forEach((button) => {
    if (button.dataset.filter === filter) {
      button.classList.add("selected");
    } else {
      button.classList.remove("selected");
    }
  });
};

const searchHandler = (event) => {
  const inputValue = event.target.value.toLowerCase().trim();
  products.forEach((product) => {
    const productsName = product.children[1].innerText.toLowerCase();
    if (productsName.includes(inputValue)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
};

const clickHandler = (event) => {
  const filter = event.target.dataset.filter;
  changeClass(filter);
  products.forEach((product) => {
    const category = product.dataset.category;
    if (filter === "all") {
      product.style.display = "block";
    } else {
      category === filter
        ? (product.style.display = "block")
        : (product.style.display = "none");
    }
  });
};

const searchPriceHandler = (event) => {
  const searchInput = +event.target.parentElement.children[0].value;
  products.forEach((product) => {
    const productsPrice = product.children[2].innerText;
    const prices = +productsPrice.split(" ")[1];
    if (!searchInput) {
      products.style.display = "block";
    } else {
      searchInput === prices
        ? (product.style.display = "block")
        : (product.style.display = "none");
    }
  });
};

searchInput.addEventListener("keyup", searchHandler);
buttons.forEach((button) => {
  button.addEventListener("click", clickHandler);
});
searchPrice.addEventListener("click", searchPriceHandler);
