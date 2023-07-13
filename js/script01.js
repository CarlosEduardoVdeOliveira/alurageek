let products = [];
let categories = [];
const api = "http://127.0.0.1:5500/db.json";
const productSection = document.querySelector(".products");

async function listProducts() {
  const data = await fetch(api);
  products = await data.json();
  products.forEach((product) => categories.push(product.category));
  let categoryFilter = categories.filter((category, indice, array) => {
    return array.indexOf(category) === indice;
  });
  categoryFilter.forEach(
    (category) =>
      (productSection.innerHTML += `<div class="products__container__list">
      <div class="products__category">
				<h3 class="products__category--title">${category}</h3>
				<a class="products__category--link" href="#">
					Ver todos<i class="fa-solid fa-arrow-right"></i>
				</a>
		</div>
		<ul class="products__list" data-category="${category}"></ul>
	</div>`)
  );
  const listProducts = document.querySelectorAll(".products__list");
  const productsAll = products.map(
    (product) =>
      `<li class="product">
				<img class="product__image" src="${product.imageURL}" alt="${product.description}">
					<span class="product__title">${product.name}</span>
					<p class="product__price">R$ ${product.price}</p>
					<a class="product__link" href="#">Ver produto</a>
				</li>
      `
  );
  listProducts.forEach((list) => {
    products.map((product) => {
      if (list.dataset.category.includes(product.category)) {
        list.innerHTML = `
            <li class="product">
							<img class="product__image" src="${product.imageURL}" alt="${product.description}">
							<span class="product__title">${product.name}</span>
							<p class="product__price">R$ ${product.price}</p>
							<a class="product__link" href="#">Ver produto</a>
					</li>
				`;
      }
    });
  });
}

listProducts();

/*    
const template = `
	<div class="products__container__list">
		<div class="products__category">
				<h3 class="products__category--title">${response.category}</h3>
				<a class="products__category--link" href="#">
					Ver todos<i class="fa-solid fa-arrow-right"></i>
				</a>
		</div>
		<ul class="products__list">
				<li class="product">
					<img class="product__image"
							src="https://images.unsplash.com/photo-1601814933824-fd0b574dd592?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=812&q=80"
							alt="">
					<span class="product__title">Produto XYZ</span>
					<p class="product__price">R$ 60,00</p>
					<a class="product__link" href="#">Ver produto</a>
				</li>
		</ul>
	</div>







   const buttonLongin = document.querySelector("[data-login]");
const buttonMessage = document.querySelector("[data-send]");
const inputName = document.querySelector("[data-name]");
const message = document.querySelector("[data-message]");
const error = document.querySelector('.error')

buttonLongin.addEventListener('click', ()=>{
window.location.href = "../../pages/login.html"
})

buttonMessage.addEventListener("click", event => {
event.preventDefault();
const nameValue = inputName.value
const messageValue = message.value
/* console.log(inputName.parentNode);
if (nameValue.length < 3 || messageValue.length < 3) {
   inputName.parentNode.style.borderColor = "red"
   error.style.display = "block"
}

})
` */
