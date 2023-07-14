import { data } from "./server.js";
import { createListProducts } from "./listProductsLogged.js";
const buttonDelete = document.querySelectorAll("[data-settings='deleted']");

buttonDelete.forEach((button) => {
  button.addEventListener("click", async (event) => {
    event.preventDefault();
    await data.deleteProduct(button.id);
    await createListProducts();
  });
});
