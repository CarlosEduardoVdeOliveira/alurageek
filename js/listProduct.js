import { data } from "./server.js";
import { template } from "./templates.js";

async function viewProduct() {
  try {
    const elementProduct = document.querySelector("[data-product='detail']");
    const listSimilarims = document.querySelector("[data-similar]");

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("q");
    const product = await data.listProduct(id);

    const products = await data.listAllProducts();

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
    products.forEach((item) => {
      if (
        (item.category === product.category && item.id !== product.id) ||
        item.name === product.name
      ) {
        return (listSimilarims.innerHTML += template.templateNotLoggedIn(
          item.id,
          item.name,
          item.price,
          item.imageURL,
          item.description
        ));
      }
    });
    if (product == undefined) {
      throw new Error("Produto não existe!");
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
    window.location.href = "../pages/home-logged.html";
  }
}

viewProduct();
