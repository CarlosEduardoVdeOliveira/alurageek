function templateCarousel(titel, description, category, button) {
  const template = `<h2 class="carousel__container__title">${titel}</h2>
    <p class="carousel__container__description">${description}</p>
    <a href="./pages/list-products-per-category.html?q=${category}" 
    class="button button--blue">${button}</a>`;
  return template;
}

function templateCategories(category) {
  const template = `<div class="products__container__list">
					<div class="products__category">
						<h3 class="products__category--title">${category}</h3>
						<a class="products__category--link" 
            href="./pages/list-products-per-category.html?q=${category}">
								Ver todos<i class="fa-solid fa-arrow-right"></i>
						</a>
					</div>
          <ul class="products__list" data-category="${category}"></ul>
			</div>`;
  return template;
}

function templateLoggedOff(id, name, price, image, description) {
  let link = "";
  if (window.location.pathname === "/index.html") {
    link = `./pages/product-detail.html?q=${id}`;
  } else {
    link = `./product-detail.html?q=${id}`;
  }
  const template = `
    <li class="product" title="${name}">
      <img class="product__image" src="${image}" alt="${description}">
      <span class="product__title">${name}</span>
      <p class="product__price">R$ ${price}</p>
      <a class="product__link" href="${link}">Ver produto</a>
    </li>
  `;
  return template;
}
function templateProductDetail(id, name, price, image, description) {
  const template = `
        <img
            src="${image}"
            class="card__image" alt="${description}">
        <div class="wrapper__details">
            <h2 class="details__title">${name}</h2>
            <span class="details__price">R$ ${price}</span>
            <p class="details__description">
              ${description}
            </p>
        </div>
      `;
  return template;
}

function templateLoggedIn(id, image, name, price, description) {
  const template = `
    <li class="product__logged" id=${id} title="${name}">
      <div class="product__settings">
          <button class="button__settings trash" id=${id} data-deleted>
            <i class="fa-solid fa-trash"></i>
          </button>
          <a class="button__settings" id=${id} href="./update-product.html?q=${id}" data-updated>
            <i class="fa-solid fa-pen"></i>
          </a>
      </div>
      <img class="product__image"
          src="${image}"
          alt="${description}">
      <span class="product__title">${name}</span>
      <p class="product__price">R$ ${price}</p>
      <span class="product__title"
        data-view='product' id=${id}># ${id}</span>
    </li>
  `;
  return template;
}

export const template = {
  templateCarousel,
  templateCategories,
  templateLoggedOff,
  templateLoggedIn,
  templateProductDetail,
};
