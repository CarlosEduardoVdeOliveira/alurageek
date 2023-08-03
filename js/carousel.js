import { template } from "./templates.js";
const carousel = document.querySelector("[data-carousel]");
const buttonCarouselLeft = document.querySelector("[data-carousel='left']");
const buttonCarouselRight = document.querySelector("[data-carousel='right']");
const carouselContainer = document.querySelector("[data-carousel='container']");

const timer = 10000;
let positionImage = 0;
promotion(positionImage);
setInterval(() => {
  imagePosition(positionImage++);
  if (positionImage >= 3) {
    positionImage = 0;
  }
}, timer);
function imagePosition(position) {
  carousel.style.backgroundImage = `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 41.15%, rgba(0, 0, 0, 0.80) 100%), 
  url(../../assets/images/carousel[${position}].jpg)`;
  promotion(position);
}

function carouselLeft() {
  if (positionImage == 0) {
    imagePosition((positionImage = 2));
  } else {
    imagePosition((positionImage -= 1));
  }
}
function carouselRight() {
  if (positionImage == 2) {
    imagePosition((positionImage = 0));
  } else {
    imagePosition((positionImage += 1));
  }
}
function promotion(position) {
  switch (position) {
    case 0:
      carouselContainer.innerHTML = template.templateCarousel(
        "Nerd feliz",
        "Para felicidade dos Nerd's produtos com 53% de desconto",
        "Jogos",
        "Ver Jogos"
      );
      break;
    case 1:
      carouselContainer.innerHTML = template.templateCarousel(
        "Cinema especíal",
        "Alugue seus filmes com 20% de desconto",
        "Filmes",
        "Ver Filmes"
      );
      break;
    case 2:
      carouselContainer.innerHTML = template.templateCarousel(
        "Desembro Promocional",
        "Produtos selecionados com 33% de desconto",
        "Diversos",
        "Ver Diversos"
      );
      break;
  }
}

buttonCarouselLeft.addEventListener("click", () => carouselLeft());
buttonCarouselRight.addEventListener("click", () => carouselRight());
