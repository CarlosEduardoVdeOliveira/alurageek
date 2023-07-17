function templateNotLoggedIn(id, name, price, image, description) {
  const template = `
    <li class="product" title="${name}">
      <img class="product__image" src="${image}" alt="${description}">
      <span class="product__title">${name}</span>
      <p class="product__price">R$ ${price}</p>
      <a class="product__link" href="../pages/product-detail.html?q=${id}">Ver produto</a>
    </li>
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
          <a class="button__settings" id=${id} href="../pages/update-product.html?q=${id}" data-updated>
            <i class="fa-solid fa-pen"></i>
          </a>
      </div>
      <img class="product__image"
          src="${image}"
          alt="${description}">
      <span class="product__title">${name}</span>
      <p class="product__price">R$ ${price}</p>
      <a class="product__link" href="../pages/product-detail.html?q=${id}"
        data-view='product' id=${id}>Ver produto</a>
    </li>
  `;
  return template;
}

export const template = {
  templateNotLoggedIn,
  templateLoggedIn,
};
