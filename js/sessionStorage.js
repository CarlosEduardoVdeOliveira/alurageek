const email = document.querySelector("[data-email]");
const password = document.querySelector("[data-password]");
const formLogin = document.querySelector("[data-form='login']");
const errorEmail = document.querySelector('[data-erro="formInputEmail"]');
const errorPassword = document.querySelector('[data-erro="formInputPassword"]');

/* pegar o valor do email e do password e verificar se são menores que 6
  se for lança erro se não da o submit salva no sessionStorage
  e envia para a page home-logged.html
*/

formLogin.addEventListener("submit", (event) => {
  event.preventDefault();
  if (
    email.value.length >= 6 &&
    password.value.length >= 6 &&
    password.value !== ""
  ) {
    window.location.href = "../pages/home-logged.html";
    sessionStorage.setItem("email", email.value);
    sessionStorage.setItem("password", password.value);
  } else {
    errorPassword.style.display = "block";
    errorEmail.style.display = "block";
  }
});
