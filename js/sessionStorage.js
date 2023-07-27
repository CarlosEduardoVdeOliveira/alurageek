const email = document.querySelector("[data-email]");
const password = document.querySelector("[data-password]");
const formLogin = document.querySelector("[data-form='login']");
const errorEmail = document.querySelector('[data-erro="formInputEmail"]');
const errorPassword = document.querySelector('[data-erro="formInputPassword"]');

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
