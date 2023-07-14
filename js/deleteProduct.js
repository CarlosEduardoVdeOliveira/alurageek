import { data } from "./server.js";

const buttonDelete = document.querySelectorAll("[data-settings='deleted']");
function deleteProduct() {
  buttonDelete.forEach((button) => {
    button.addEventListener("click", async (event) => {
      event.preventDefault();
      console.log(event);
      await data.deleteProduct(button.id);
      await createListProducts();
    });
  });
}
deleteProduct();
