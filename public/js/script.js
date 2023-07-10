const buttonLongin = document.querySelector("[data-login]");
const buttonMessage = document.querySelector("[data-send]");
const inputName = document.querySelector("[data-name]");
const message = document.querySelector("[data-message]");
const error = document.querySelector('.error')

buttonLongin.addEventListener('click', ()=>{
   window.location.href = "../../pages/login.html"
})

buttonMessage.addEventListener("click", event => {
   event.preventDefault();
   const nameValue = inputName.value
   const messageValue = message.value
   /* console.log(inputName.parentNode); */
   if (nameValue.length < 3 || messageValue.length < 3) {
      inputName.parentNode.style.borderColor = "red"
      error.style.display = "block"
   }
   
})