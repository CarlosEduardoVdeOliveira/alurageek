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
  const categoryElement = document.querySelectorAll("[data-category]");
  const products = await data.listAllProducts();

  categoryElement.forEach((element) => {
    products.forEach((item) => {
      const category = element.dataset.category;
      if (item.category === category) {
        element.innerHTML += template.templateLoggedOff(
          item.id,
          item.name,
          item.price,
          item.imageURL,
          item.description
        );
      }
    });
  });
}

async function createElementsCategories(list) {
  list.forEach((item) => {
    productListElement.innerHTML += template.templateCategories(item);
  });
  productsInCategory();
}
await filterCategory(categoryList);
createElementsCategories(categoryList);
