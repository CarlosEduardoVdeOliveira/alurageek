import { data } from "./server.js";

export async function listPerCategory() {
  const list = document.querySelector("[data-percategory]");
  const urlParams = new URLSearchParams(window.location.search);
  const categoryParam = urlParams.get("q");

  const category = await data.listProductsPerCategories(categoryParam);

  category.forEach((product) => {
    list.innerHTML += `<li class="product" title="${product.name}">
        <img class="product__image" src="${product.imageURL}" alt="${product.description}">
        <span class="product__title">${product.name}</span>
        <p class="product__price">R$ ${product.price}</p>
        <a class="product__link" href="../pages/product-detail.html?q=${product.id}">Ver produto</a>
      </li>`;
  });
}

listPerCategory();
