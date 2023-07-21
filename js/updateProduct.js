import { data } from "./server.js";
import { formatPrice } from "./utils/format.js";
import { isLogged } from "./verifySession.js";
const update = document.querySelector("[data-update-form]");

async function updatedItem(event) {
  event.preventDefault();
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("q");

    const name = document.querySelector("[data-input='name']").value;
    const image = document.querySelector("[data-input='url']").value;
    const price = document.querySelector("[data-input='price']").value;
    const category = document.querySelector("[data-input='category']").value;
    const description = document.querySelector(
      "[data-input='description']"
    ).value;
    const product = {
      id,
      name: name,
      description: description,
      imageURL: image,
      price: formatPrice(price),
      category: category,
    };
    await data.updateProduct(
      product.id,
      product.name,
      product.description,
      product.imageURL,
      product.price,
      product.category
    );
    Toastify({
      text: "Produto atualizado com sucesso!",
      duration: 3000,
      close: true,
      style: {
        background: "#0bb30b",
        color: "#F5F5F5",
      },
    }).showToast();
    isLogged();
    window.location.href = "../pages/home-logged.html";
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
  }
}
update.addEventListener("submit", (event) => updatedItem(event));
