import { data } from "./server.js";
import { createListProducts } from "./listProductsLogged.js";
async function deletedProduct() {
  try {
    const email = sessionStorage.getItem("email");
    const password = sessionStorage.getItem("password");
    if (!email || !password) {
      throw new Error("É preciso estar logado, para excluir um produto");
    }
    const buttonDelete = document.querySelectorAll("[data-deleted]");

    buttonDelete.forEach((button) => {
      button.addEventListener("click", async (event) => {
        event.preventDefault();
        await data.deleteProduct(button.id);
        Toastify({
          text: "Excluido com sucesso!",
          duration: 3000,
          close: true,
          style: {
            background: "#0bb30b",
            color: "#F5F5F5",
          },
        }).showToast();
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
      onClick: function () {
        window.location.href = "../pages/login.html";
      },
    }).showToast();
  }
}
deletedProduct();
