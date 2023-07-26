import { data } from "./server.js";
import { formatPrice } from "./utils/format.js";

const updateForm = document.querySelector("[data-update-form]");
const name = document.querySelector("[data-input='name']");
const image = document.querySelector("[data-input='url']");
const price = document.querySelector("[data-input='price']");
const category = document.querySelector("[data-input='category']");
const description = document.querySelector("[data-input='description']");

async function loadProductValues() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("q");

  const product = await data.listProduct(id);

  name.value = product.name;
  image.value = product.imageURL;
  price.value = product.price;
  category.value = product.category;
  description.value = product.description;
}

loadProductValues();

async function updatedProduct(event) {
  event.preventDefault();
  try {
    const email = sessionStorage.getItem("email");
    const password = sessionStorage.getItem("password");

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("q");

    const product = {
      id,
      name: name.value,
      description: description.value,
      imageURL: image.value,
      price: formatPrice(price.value),
      category: category.value,
    };
    await data.updateProduct(
      product.id,
      product.name.trim(),
      product.description.trim(),
      product.imageURL.trim(),
      product.price.trim(),
      product.category.trim()
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

    if (!email || !password) {
      throw new Error("É preciso estar logado para atualizar o produto!");
    }
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
updateForm.addEventListener("submit", (event) => updatedProduct(event));
