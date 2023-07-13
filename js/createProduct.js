import { data } from "./server.js";
const formCreate = document.querySelector("[data-create-form]");

async function create(event) {
  event.preventDefault();
  const name = document.querySelector("[data-input='name']").value;
  const category = document.querySelector("[data-input='category']").value;
  const imageURL = document.querySelector("[data-input='imageURL']").value;
  const description = document.querySelector(
    "[data-input='description']"
  ).value;
  const price = document.querySelector("[data-input='price']").value;
  await data.createProduct(name, category, imageURL, price, description);
  window.location.href = "../pages/home-logged.html";
}

formCreate.addEventListener("submit", (event) => create(event));
