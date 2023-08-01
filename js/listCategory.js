import { data } from "./server.js";
import { template } from "./templates.js";
const productListElement = document.querySelector("[data-products]");
let categoryList = [];

async function filterCategory(categories) {
  const products = await data.listAllProducts();
  products.forEach((product) => {
    categories.push(product.category);
  });

  categoryList = await categories.filter(
    (item, indice, array) => array.indexOf(item) === indice
  );
  return categoryList;
}

async function productsInCategory() {
  try {
    const categoryElement = document.querySelectorAll("[data-category]");
    const products = await data.listAllProducts();

    categoryElement.forEach((element) => {
      let count = 0;
      products.forEach((item) => {
        const category = element.dataset.category;
        if (item.category === category && count < 6) {
          element.innerHTML += template.templateLoggedOff(
            item.id,
            item.name,
            item.price,
            item.imageURL,
            item.description
          );
          count++;
        }
      });
    });
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

async function createElementsCategories(list) {
  list.forEach((item) => {
    productListElement.innerHTML += template.templateCategories(item);
  });
  productsInCategory();
  if (list.length === 0) {
    productListElement.innerHTML += `<h2>Não há produtos disponíveis!</h2>`;
  }
}
await filterCategory(categoryList);
createElementsCategories(categoryList);
