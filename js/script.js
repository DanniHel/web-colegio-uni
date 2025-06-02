function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
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

function scrollToTop(event) {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const callBtn = document.getElementById("callButton");
const phoneNumber = "+51938865416"; // Corregido a Perú

function isMobile() {
  return /Mobi|Android/i.test(navigator.userAgent);
}

callBtn.addEventListener("click", function (e) {
  if (isMobile()) {
    // Si es móvil, abre el enlace tel: para llamar
    window.location.href = "tel:" + phoneNumber;
  } else {
    // Si no es móvil, muestra un mensaje o evita el daño
    e.preventDefault();
    alert("Parece que estás en un ordenador sin aplicación de llamadas. Por favor, usa un móvil para llamar.");
  }
});
