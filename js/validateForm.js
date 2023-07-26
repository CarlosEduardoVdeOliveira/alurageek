const form = document.querySelectorAll("[required]");
/* const messageErrorElement = document.querySelector("[data-group-input]"); */

form.forEach((input) => {
  input.addEventListener("blur", () => verifyInput(input));
  input.addEventListener("invalid", (event) => event.preventDefault());
});
const typeErrors = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "tooShort",
  "tooLong",
  "customError",
];

const messages = {
  name: {
    valueMissing: "O campo de nome não pode estar vazio.",
    patternMismatch: "Por favor, preencha um nome válido.",
    tooShort: "Por favor, preencha um nome válido.",
  },
  message: {
    valueMissing: "O campo de mensagem não pode estar vazio.",
    typeMismatch: "Por favor, preencha uma mensagem válida.",
    tooShort: "Por favor, preencha uma mensagem válida.",
    tooLong: "Por favor, preencha uma mensagem válida.",
  },
  nameProduct: {
    valueMissing: "O campo de nome não pode estar vazio.",
    patternMismatch: "Por favor, preencha um nome válido.",
    tooShort: "Por favor, preencha um nome válido.",
  },
  description: {
    valueMissing: "O campo de mensagem não pode estar vazio.",
    typeMismatch: "Por favor, preencha uma mensagem válida.",
    tooShort: "Por favor, preencha uma mensagem válida.",
    tooLong: "Por favor, preencha uma mensagem válida.",
  },
  category: {
    valueMissing: "O campo de RG não pode estar vazio.",
    patternMismatch: "Por favor, preencha um RG válido.",
    tooShort: "O campo de RG não tem caractéres suficientes.",
    tooLong: "Por favor, preencha uma mensagem válida.",
  },
  price: {
    valueMissing: "O campo de CPF não pode estar vazio.",
    patternMismatch: "Por favor, preencha um CPF válido.",
    customError: "O CPF digitado não existe.",
    tooShort: "O campo de CPF não tem caractéres suficientes.",
  },
  imageURL: {
    valueMissing: "O campo de data de nascimento não pode estar vazio.",
    customError: "Você deve ser maior que 18 anos para se cadastrar.",
  },
  email: {
    valueMissing: "O campo de nome não pode estar vazio.",
    patternMismatch: "Por favor, preencha um nome válido.",
    tooShort: "Por favor, preencha um nome válido.",
  },
  password: {
    valueMissing: "O campo de nome não pode estar vazio.",
    patternMismatch: "Por favor, preencha um nome válido.",
    tooShort: "Por favor, preencha um nome válido.",
  },
};

function verifyInput(input) {
  let messageError = "";
  typeErrors.forEach((error) => {
    if (input.validity[error]) {
      messageError = messages[input.name][error];
    }
  });
  const errorElement = input.parentNode.querySelector(".error");
  const validityInput = input.checkValidity();
  !validityInput
    ? (errorElement.textContent = messageError)
    : (errorElement.textContent = "");
}
