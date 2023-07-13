import { data } from "./server.js";
import { createListProducts } from "./listProductsLogged.js";
const buttonDelete = document.querySelectorAll("[data-settings='deleted']");

/* async function deleted(id) {
  await data.deleteProduct(id);
} */

buttonDelete.forEach((button) => {
  button.addEventListener("click", async () => {
    await data.deleteProduct(button.id);
    await createListProducts();
  });
});
