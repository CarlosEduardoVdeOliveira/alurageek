import { data } from "./server.js";
import { template } from "./templates.js";

const buttonSearch = document.querySelector("[data-search='button']");
const searchInput = document.querySelector("[data-search='input']");
const list = document.querySelector("[data-products]");

async function search(event) {
  event.preventDefault();
  const searchProduct = await data.search(searchInput.value);
  if (searchInput.value === "") {
    Toastify({
      text: "Preencha o campo de pesquisa!",
      duration: 3000,
      close: true,
      style: {
        background: "#eb4545",
        color: "#F5F5F5",
      },
    }).showToast();
  } else {
    list.innerHTML = "";
    list.style.display = "flex";
    list.style.flexWrap = "wrap";
    searchInput.value = "";

    if (searchProduct.length === 0) {
      list.innerHTML = `<h2>Produto não encontrado!</h2>`;
    }
    searchProduct.forEach((product) => {
      list.innerHTML += template.templateLoggedOff(
        product.id,
        product.name,
        product.price,
        product.imageURL,
        product.description
      );
    });
  }
}
buttonSearch.addEventListener("click", (event) => search(event));
