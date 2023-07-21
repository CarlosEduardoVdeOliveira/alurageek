const buttonLogoff = document.querySelector("[data-logoff]");

buttonLogoff.addEventListener("click", () => {
  const email = sessionStorage.getItem("email");
  const password = sessionStorage.getItem("password");
  try {
    if (!email && !password) {
      throw new Error("Erro ao tentar sair!");
    }
    sessionStorage.clear();
    window.location.href = "../pages/login.html";
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
});
