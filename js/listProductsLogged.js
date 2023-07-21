import { data } from "./server.js";
import { template } from "./templates.js";

export async function createListProducts() {
  try {
    const email = sessionStorage.getItem("email");
    const password = sessionStorage.getItem("password");
    const products = await data.listAllProducts();
    const list = document.querySelector("[data-list]");
    let html = "";
    if (!email || !password) {
      throw new Error("Erro: É preciso estar logado!");
    }
    products.length === 0
      ? (html += `<h3>Não existe produtos!</h3>`)
      : products.forEach((product) => {
          html += template.templateLoggedIn(
            product.id,
            product.imageURL,
            product.name,
            product.price,
            product.description
          );
        });
    list.innerHTML = html;
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

await createListProducts();
