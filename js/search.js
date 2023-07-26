import { data } from "./server.js";
import { template } from "./templates.js";

const buttonSearch = document.querySelector("[data-search='button']");
const searchInput = document.querySelector("[data-search='input']");
const list = document.querySelector("[data-products]");

async function search(event) {
  event.preventDefault();
  const searchTerm = await data.search(searchInput.value);
  list.innerHTML = "";
  list.style.display = "flex";
  searchTerm.forEach((product) => {
    list.innerHTML += template.templateLoggedOff(
      product.id,
      product.name,
      product.price,
      product.imageURL,
      product.description
    );
  });
}
buttonSearch.addEventListener("click", (event) => search(event));
