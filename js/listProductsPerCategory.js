import { data } from "./server.js";
import { template } from "./templates.js";
export async function listPerCategory() {
  try {
    const categoryTitle = document.querySelector(
      "[data-percategory='category']"
    );
    const list = document.querySelector("[data-percategory='products']");
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get("q");

    const category = await data.listProductsPerCategories(categoryParam);
    categoryTitle.innerHTML = `
      <h3 class="products__category--title">${categoryParam}</h3>
      <a href="./login.html" class="button form__button button--blue">
        Login
      </a>
    `;
    category.forEach((product) => {
      list.innerHTML += template.templateNotLoggedIn(
        product.id,
        product.name,
        product.price,
        product.imageURL,
        product.description
      );
    });
    if (categoryParam === "" || category.length === 0) {
      throw new Error("Categoria não encontrada!");
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
    return (window.location.href = "../");
  }
}

listPerCategory();
