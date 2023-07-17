import { data } from "./server.js";
import { template } from "./templates.js";

const list = document.querySelector("[data-list]");

export async function createListProducts() {
  try {
    const products = await data.listAllProducts();
    products.forEach((product) => {
      list.innerHTML += template.templateLoggedIn(
        product.id,
        product.imageURL,
        product.name,
        product.price,
        product.description
      );
    });
    if (!sessionStorage.getItem("email")) {
      throw new Error("Erro: É preciso estar logado!");
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
  }
}

createListProducts();
