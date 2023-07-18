const buttonLogin = document.querySelector("[data-login]");

buttonLogin.addEventListener("click", (event) => {
  event.preventDefault();
  if (sessionStorage.getItem("email") && sessionStorage.getItem("password")) {
    /* Toastify({
      text: "Já há um usuário logado!",
      duration: 3000,
      close: true,
      style: {
        background: "#dbd811",
        color: "#F5F5F5",
      },
    }).showToast(); */
    window.location.href = "../pages/home-logged.html";
  } else {
    window.location.href = "../pages/login.html";
  }
});
