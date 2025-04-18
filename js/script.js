function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  }

let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function mostrarSlide(n) {
  slides.forEach((slide, index) => {
    slide.classList.remove("active");
    if (index === n) {
      slide.classList.add("active");
    }
  });
}

function moverSlide(n) {
  slideIndex += n;
  if (slideIndex >= slides.length) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;
  mostrarSlide(slideIndex);
}

// Auto-slide cada 5 segundos
setInterval(() => {
  moverSlide(1);
}, 5000);

// Inicializar
mostrarSlide(slideIndex);
