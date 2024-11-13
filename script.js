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

// Configura o intervalo para trocar de slide a cada 5 segundos
setInterval(nextSlide, 5000);

// Inicializa o primeiro slide
showSlide(currentIndex);

// Canvas para animação de feixe de luz com rastro
const canvas = document.getElementById("energyCanvas");
const ctx = canvas.getContext("2d");

// Ajuste de tamanho do canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Parâmetros para a animação de partículas
let particles = []; // Lista de partículas
const particleCount = 100; // Quantidade de partículas

// Classe para a partícula (rastro de luz)
class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 2 + 1; // Tamanho da partícula
    this.speedX = Math.random() * 0.5 - 0.25; // Velocidade aleatória no eixo X
    this.speedY = Math.random() * 0.5 - 0.25; // Velocidade aleatória no eixo Y
    this.color = "rgba(255, 255, 255, 0.8)"; // Cor da partícula
    this.life = Math.random() * 3 + 2; // Tempo de vida da partícula
  }

  // Atualiza a posição da partícula e sua transparência
  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    // Faz a partícula desaparecer suavemente
    this.life -= 0.01; // Diminui a vida da partícula ao longo do tempo
    if (this.life <= 0) {
      this.life = Math.random() * 3 + 2; // Reseta a vida da partícula
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
    }
  }

  // Desenha a partícula no canvas com base em sua transparência (vida)
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${this.life / 3})`; // Transparência baseada na vida
    ctx.fill();
  }
}

// Função para criar partículas
function createParticles() {
  particles = [];
  for (let i = 0; i < particleCount; i++) {
    particles.push(
      new Particle(Math.random() * canvas.width, Math.random() * canvas.height),
    );
  }
}

// Função para desenhar o feixe de luz e o rastro
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Desenha as partículas com rastro de luz
  particles.forEach((particle) => {
    particle.update();
    particle.draw();
  });

  requestAnimationFrame(animate);
}

// Inicia a criação de partículas e animação
createParticles();
animate();
