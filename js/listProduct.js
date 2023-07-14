import { data } from "./server.js";

async function viewProduct() {
  const elementProduct = document.querySelector("[data-product='detail']");
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("q");
  const product = await data.listProduct(id);
  elementProduct.innerHTML = `
      <img
          src="${product.imageURL}"
          class="card__image" alt="${product.description}">
      <div class="wrapper__details">
          <h2 class="details__title">${product.name}</h2>
          <span class="details__price">R$ ${product.price}</span>
          <p class="details__description">
            ${product.description}
          </p>
      </div>
    `;
}

await viewProduct();
