const form = document.querySelectorAll("[required]");

// validate in inputs
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
    tooShort: "O nome deve ter no mínimo 3 caracteres.",
  },
  message: {
    valueMissing: "O campo de mensagem não pode estar vazio.",
    typeMismatch: "Por favor, preencha uma mensagem válida.",
    tooShort: "A mensagem deve ter no mínimo 3 caracteres.",
    tooLong: "A mensagem deve ter no máximo 120 caracteres.",
  },
  nameProduct: {
    valueMissing: "O campo de nome do produto não pode estar vazio.",
    patternMismatch: "Por favor, preencha um nome válido.",
    tooShort: "O nome do produto deve ter no mínimo 3 caracteres.",
  },
  description: {
    valueMissing: "O campo de mensagem não pode estar vazio.",
    typeMismatch: "Por favor, preencha uma mensagem válida.",
    tooShort: "A descrição do produto deve ter no mínimo 3 caracteres.",
    tooLong: "A descrição do produto deve ter no máximo 120 caracteres.",
  },
  category: {
    valueMissing: "O campo da categoria não pode estar vazio.",
    patternMismatch: "Por favor, preencha uma categoria válida.",
    tooShort: "A categoria do produto deve ter no mínimo 3 caracteres.",
    tooLong: "A categoria do produto deve ter no máximo 20 caracteres.",
  },
  price: {
    valueMissing: "O preço não pode estar vazio.",
    patternMismatch: "Por favor, preencha um preço válido.",
    customError: "Preencha o preço no formato adequado (10,80).",
    tooShort: "O preço do produto deve ter no mínimo 3 caracteres.",
  },
  url: {
    valueMissing: "O campo de URL de imagem do produto não pode estar vazio.",
    patternMismatch: "Por favor, preencha uma url válida.",
  },
  email: {
    valueMissing: "O campo de email não pode estar vazio.",
    patternMismatch: "Por favor, preencha um email válido.",
    tooShort: "Por favor, preencha um email válido.",
  },
  password: {
    valueMissing: "A senha não pode estar vazia.",
    patternMismatch: "Por favor, preencha um nome válido.",
    tooShort: "A senha deve ter no mínimo 6 caracteres.",
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
  if (!validityInput) {
    errorElement.textContent = messageError;
  } else {
    errorElement.textContent = "";
  }
}

// validate button send message

const buttonSendMessage = document.querySelector("[data-send='message']");

buttonSendMessage.addEventListener("click", (event) => {
  event.preventDefault();
  const name = document.querySelector("[data-name]");
  const message = document.querySelector("[data-message]");
  if (name.value == "" || message.value == "") {
    Toastify({
      text: "Preencha todos os campos",
      duration: 3000,
      close: true,
      style: {
        background: "#eb4545",
        color: "#F5F5F5",
      },
    }).showToast();
  } else {
    Toastify({
      text: "Mensagem enviada com sucesso!",
      duration: 3000,
      close: true,
      style: {
        background: "#0bb30b",
        color: "#F5F5F5",
      },
    }).showToast();
    name.value = "";
    message.value = "";
  }
});
