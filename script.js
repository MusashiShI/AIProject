// Slider de imagens com animação suave
let currentIndex = 0;
const slides = document.querySelectorAll(".slider .slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.opacity = i === index ? "1" : "0"; // Define a opacidade do slide
    slide.style.zIndex = i === index ? "1" : "0"; // Define a posição do slide
  });
}

// Função para avançar para o próximo slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

// Configura o intervalo para trocar de slide a cada 3 segundos
setInterval(nextSlide, 3000);

// Inicializa o primeiro slide
showSlide(currentIndex);
