import { data } from "./server.js";

export async function listPerCategory() {
  try {
    const categoryTitle = document.querySelector(
      "[data-percategory='category']"
    );
    const list = document.querySelector("[data-percategory='products']");
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get("q");

    const category = await data.listProductsPerCategories(categoryParam);
    categoryTitle.innerHTML = `
      <h3 class="products__category--title">${categoryParam}</h3>
      <a href="./login.html" class="button form__button button--blue">
        Login
      </a>
    `;
    category.forEach((product) => {
      list.innerHTML += `<li class="product" title="${product.name}">
          <img class="product__image" src="${product.imageURL}" alt="${product.description}">
          <span class="product__title">${product.name}</span>
          <p class="product__price">R$ ${product.price}</p>
          <a class="product__link" href="../pages/product-detail.html?q=${product.id}">Ver produto</a>
        </li>`;
    });
    if (categoryParam === "" || category.length === 0) {
      throw new Error("Categoria não encontrada!");
    }
  } catch (error) {
    Toastify({
      text: error.message,
      duration: 3000,
      close: true,
      style: {
        background: "#eb4545",
        color: "#F5F5F5",
      },
    }).showToast();
    return (window.location.href = "../");
  }
}

listPerCategory();
