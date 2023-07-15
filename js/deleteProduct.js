import { data } from "./server.js";
import { createListProducts } from "./listProductsLogged.js";

async function deleteProduct() {
  try {
    const buttonDelete = document.querySelectorAll("[data-settings='deleted']");
    if (!sessionStorage.getItem("email")) {
      throw new Error("É preciso estar logado, para excluir um produto");
    }
    console.log(buttonDelete);
    buttonDelete.forEach((button) => {
      button.addEventListener("click", async (event) => {
        event.preventDefault();
        await data.deleteProduct(button.id);
        await createListProducts();
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
    return (window.location.href = "../pages/login.html");
  }
}
deleteProduct();
