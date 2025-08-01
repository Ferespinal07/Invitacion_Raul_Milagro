// Countdown
const countdown = document.getElementById("countdown");
const targetDate = new Date("2025-10-11T14:30:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `${days} días ${hours}h ${minutes}m ${seconds}s`;
}, 1000);

// Fade-in on scroll
const fadeElements = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});
fadeElements.forEach(el => observer.observe(el));

// Carousel logic
const carousel = document.getElementById("carousel");
const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");

prevBtn.addEventListener("click", () => {
  carousel.scrollBy({ left: -300, behavior: "smooth" });
});
nextBtn.addEventListener("click", () => {
  carousel.scrollBy({ left: 300, behavior: "smooth" });
});

// Auto-scroll carousel
setInterval(() => {
  if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) {
    carousel.scrollTo({ left: 0, behavior: "smooth" });
  } else {
    carousel.scrollBy({ left: 300, behavior: "smooth" });
  }
}, 5000);

// RSVP Form feedback
const rsvpForm = document.getElementById("rsvp-form");
const formMessage = document.getElementById("form-message");

rsvpForm.addEventListener("submit", (e) => {
  setTimeout(() => {
    formMessage.classList.remove("hidden");
  }, 1500); // Simula espera por respuesta de formsubmit
});
