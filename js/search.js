import { data } from "./server.js";
import { template } from "./templates.js";

const buttonSearch = document.querySelector("[data-search='button']");
const searchInput = document.querySelector("[data-search='input']");
const list = document.querySelector("[data-products]");

async function search(event) {
  event.preventDefault();
  const searchTerm = await data.search(searchInput.value);
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
    searchInput.value = "";

    if (searchTerm.length === 0) {
      list.innerHTML = `<h2>Produto não encontrado!</h2>`;
    }
    const email = sessionStorage.getItem("email");
    const password = sessionStorage.getItem("password");
    if (!email && !password) {
      searchTerm.forEach((product) => {
        list.innerHTML += template.templateLoggedOff(
          product.id,
          product.name,
          product.price,
          product.imageURL,
          product.description
        );
      });
    } else {
      searchTerm.forEach((product) => {
        list.innerHTML += template.templateLoggedIn(
          product.id,
          product.imageURL,
          product.name,
          product.price,
          product.description
        );
      });
    }
  }
}
buttonSearch.addEventListener("click", (event) => search(event));
