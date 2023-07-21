import { data } from "./server.js";
import { formatPrice } from "./utils/format.js";
const formCreate = document.querySelector("[data-create-form]");
async function create(event) {
  event.preventDefault();

  try {
    const email = sessionStorage.getItem("email");
    const password = sessionStorage.getItem("password");
    if (!email || !password) {
      throw new Error("É preciso estar logado para cadastrar outro produto!");
    }
    const name = document.querySelector("[data-input='name']").value;
    const category = document.querySelector("[data-input='category']").value;
    const imageURL = document.querySelector("[data-input='imageURL']").value;
    const description = document.querySelector(
      "[data-input='description']"
    ).value;
    const price = document.querySelector("[data-input='price']").value;
    await data.createProduct(
      name,
      description,
      imageURL,
      formatPrice(price),
      category
    );

    Toastify({
      text: "Produto cadastrado com sucesso!",
      duration: 3000,
      close: true,
      style: {
        background: "#0bb30b",
        color: "#F5F5F5",
      },
    }).showToast();
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
formCreate.addEventListener("submit", (event) => create(event));
