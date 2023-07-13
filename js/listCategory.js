import { data } from "./server.js";
const productListElement = document.querySelector("[data-products]");
let categoryList = [];

async function filterCategory(categories) {
  const products = await data.listAllProducts();
  products.forEach((product) => {
    categories.push(product.category);
  });

  let categoryFilter = await categories.filter(
    (item, indice, array) => array.indexOf(item) === indice
  );
  categoryList = categoryFilter;
}
await filterCategory(categoryList);

export function createElementsCategories(list) {
  list.forEach((item) => {
    productListElement.innerHTML += `<div class="products__container__list">
					<div class="products__category">
						<h3 class="products__category--title">${item}</h3>
						<a class="products__category--link" href="#">
								Ver todos<i class="fa-solid fa-arrow-right"></i>
						</a>
					</div>
          <ul class="products__list" data-category="${item}"></ul>
			</div>`;
  });
}

createElementsCategories(categoryList);
