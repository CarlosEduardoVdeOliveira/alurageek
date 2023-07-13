import { data } from "./server";

const buttonUpdate = document.querySelectorAll("[data-settings='updated']");
const name = document.querySelector("[data-input='name']");
const image = document.querySelector("[data-input='image']");
const price = document.querySelector("[data-input='price']");
const category = document.querySelector("[data-input='category']");
const description = document.querySelector("[data-input='description']");

async function updatedItem(id) {
  window.location.href = `../pages/update-product.html?id=${id}`;
  const product = await data.updateProduct(id);
  name.value = product.title;
  image.value = product.imageURL;
  price.value = product.price;
  category.value = product.category;
  description.value = product.description;
}

buttonUpdate.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    updatedItem(button.id);
  });
});
