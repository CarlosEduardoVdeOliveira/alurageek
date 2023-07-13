import { data } from "./server.js";

const list = document.querySelector("[data-list]");

function templateNotLoggedIn(name, price, image, description) {
  const template = `
    <li class="product">
      <img class="product__image" src="${image}" alt="${description}">
      <span class="product__title">${name}</span>
      <p class="product__price">R$ ${price}</p>
      <a class="product__link" href="#">Ver produto</a>
    </li>
  `;
  return template;
}

function templateLoggedIn(id, image, name, price) {
  const template = `
  <li class="product__logged" id=${id}>
        <div class="product__settings">
            <button class="button__settings" id=${id} data-settings="deleted">
              <i class="fa-solid fa-trash"></i>
            </button>
            <button class="button__settings" id=${id} data-settings="updated">
              <i class="fa-solid fa-pen"></i>
            </button>
        </div>
        <img class="product__image"
            src="${image}"
            alt="">
        <span class="product__title">${name}</span>
        <p class="product__price">R$ ${price}</p>
        <a class="product__link" href="#">Ver produto</a>
      </li>
  `;
  return template;
}

export async function createListProducts() {
  const products = await data.listAllProducts();

  products.forEach((product) => {
    list.innerHTML += templateLoggedIn(
      product.id,
      product.imageURL,
      product.name,
      product.price
    );
  });
}

await createListProducts();
