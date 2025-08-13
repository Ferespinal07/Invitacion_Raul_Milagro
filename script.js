// Lógica para la pantalla de bienvenida
document.addEventListener('DOMContentLoaded', function() {
  const enterBtn = document.getElementById("enter-btn");
  const welcomeScreen = document.getElementById("welcome-screen");

  if (enterBtn && welcomeScreen) {
    enterBtn.addEventListener("click", () => {
      welcomeScreen.classList.add("fade-out");
      document.body.classList.remove("loading");
      setTimeout(() => welcomeScreen.classList.add("hidden"), 800);
    });
  }

  // Lógica para el botón de música global (siempre visible)
  const musicBtn = document.getElementById('music-btn');
  const musicIcon = document.getElementById('music-icon');
  const audio = document.getElementById('bg-music');
  let isPlaying = false;

  if (musicBtn && audio && musicIcon) {
    musicBtn.addEventListener('click', function() {
      if (audio.paused) {
        audio.play();
        musicIcon.setAttribute('name', 'pause-outline');
        isPlaying = true;
      } else {
        audio.pause();
        musicIcon.setAttribute('name', 'play-outline');
        isPlaying = false;
      }
    });
    audio.addEventListener('ended', function() {
      musicIcon.setAttribute('name', 'play-outline');
      isPlaying = false;
    });
  }

  // Lógica para la cuenta regresiva
  const eventDate = new Date("2025-12-20T17:00:00"); // Cambia a tu fecha y hora
  function updateCountdown() {
    const now = new Date();
    const diff = eventDate - now;
    if (diff <= 0) {
      const countdown = document.getElementById("countdown");
      if (countdown) countdown.innerHTML = "<div>¡Llegó el gran día!</div>";
      return;
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    if (document.getElementById("days")) document.getElementById("days").textContent = days.toString().padStart(2, "0");
    if (document.getElementById("hours")) document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
    if (document.getElementById("minutes")) document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
    if (document.getElementById("seconds")) document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
  }
  setInterval(updateCountdown, 1000);
  updateCountdown();

  // Carrusel de retratos
  const retratos = [
    { img: 'assets/boda-1.webp', caption: 'Nuestro primer encuentro' },
    { img: 'assets/NoviosVelo.jpg', caption: 'Un día especial' },
    { img: 'assets/boda-1.webp', caption: 'Momentos inolvidables' },
    { img: 'assets/NoviosVelo.jpg', caption: 'Siempre juntos' }
  ];
  let current = 0;
  const polaroid = document.getElementById('retratos-polaroid');
  const dots = document.getElementById('retratos-dots') ? document.getElementById('retratos-dots').children : [];
  function showRetrato(idx) {
    if (!polaroid) return;
    polaroid.querySelector('img').src = retratos[idx].img;
    polaroid.querySelector('img').alt = retratos[idx].caption;
    polaroid.querySelector('.retratos-caption').textContent = retratos[idx].caption;
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.toggle('active', i === idx);
    }
  }
  if (polaroid) {
    document.querySelector('.retratos-arrow.left').onclick = function() {
      current = (current - 1 + retratos.length) % retratos.length;
      showRetrato(current);
    };
    document.querySelector('.retratos-arrow.right').onclick = function() {
      current = (current + 1) % retratos.length;
      showRetrato(current);
    };
    for (let i = 0; i < dots.length; i++) {
      dots[i].onclick = function() {
        current = i;
        showRetrato(current);
      };
    }
    showRetrato(current);
  }
  
});


// Modal sugerir canción
document.addEventListener('DOMContentLoaded', function() {
  const abrir = document.getElementById('abrir-sugerencia');
  const modal = document.getElementById('modal-sugerencia');
  const cerrar1 = document.getElementById('cerrar-modal');
  const cerrar2 = document.getElementById('cerrar-modal-btn');
  if (abrir && modal) {
    abrir.onclick = () => modal.classList.add('active');
  }
  if (cerrar1 && modal) {
    cerrar1.onclick = () => modal.classList.remove('active');
  }
  if (cerrar2 && modal) {
    cerrar2.onclick = () => modal.classList.remove('active');
  }
  // Opcional: resetear formulario al cerrar
  const form = document.getElementById('form-sugerencia');
  if (form) {
    form.onsubmit = function(e) {
      e.preventDefault();
      form.reset();
      modal.classList.remove('active');
      alert('¡Gracias por tu sugerencia!');
    }
  }
});


// Modal Dress Code
document.addEventListener('DOMContentLoaded', function() {
  const abrirDress = document.getElementById('abrir-dresscode');
  const modalDress = document.getElementById('modal-dresscode');
  const cerrarDress1 = document.getElementById('cerrar-modal-dresscode');
  const cerrarDress2 = document.getElementById('cerrar-modal-dresscode-btn');
  if (abrirDress && modalDress) {
    abrirDress.onclick = () => modalDress.classList.add('active');
  }
  if (cerrarDress1 && modalDress) {
    cerrarDress1.onclick = () => modalDress.classList.remove('active');
  }
  if (cerrarDress2 && modalDress) {
    cerrarDress2.onclick = () => modalDress.classList.remove('active');
  }
});

// Modal Tips & Notas
document.addEventListener('DOMContentLoaded', function() {
  const abrirTips = document.getElementById('abrir-tips');
  const modalTips = document.getElementById('modal-tips');
  const cerrarTips1 = document.getElementById('cerrar-modal-tips');
  const cerrarTips2 = document.getElementById('cerrar-modal-tips-btn');
  if (abrirTips && modalTips) {
    abrirTips.onclick = () => modalTips.classList.add('active');
  }
  if (cerrarTips1 && modalTips) {
    cerrarTips1.onclick = () => modalTips.classList.remove('active');
  }
  if (cerrarTips2 && modalTips) {
    cerrarTips2.onclick = () => modalTips.classList.remove('active');
  }
});

// Modal Regalos
document.addEventListener('DOMContentLoaded', function() {
  const abrirRegalos = document.getElementById('abrir-regalos');
  const modalRegalos = document.getElementById('modal-regalos');
  const cerrarRegalos1 = document.getElementById('cerrar-modal-regalos');
  const cerrarRegalos2 = document.getElementById('cerrar-modal-regalos-btn');
  if (abrirRegalos && modalRegalos) {
    abrirRegalos.onclick = () => modalRegalos.classList.add('active');
  }
  if (cerrarRegalos1 && modalRegalos) {
    cerrarRegalos1.onclick = () => modalRegalos.classList.remove('active');
  }
  if (cerrarRegalos2 && modalRegalos) {
    cerrarRegalos2.onclick = () => modalRegalos.classList.remove('active');
  }
});


/* ====== RSVP por WhatsApp ====== */
/* REEMPLAZA estos datos con los tuyos */
const RSVP_PHONE = '8295194031'; // ej: México 52 + número
const COUPLE_NAMES = 'Raul & Milagro'; // para el mensaje
const EVENT_DATE = 'Sábado 12 de Octubre'; // opcional
const EVENT_PLACE = 'Salón Jardines del Lago'; // opcional

// Abrir / cerrar modal
const openBtn = document.getElementById('open-rsvp-modal');
const modal = document.getElementById('rsvp-modal');
const closeEls = modal ? modal.querySelectorAll('[data-close-modal] , .rsvp-modal__close') : [];

openBtn?.addEventListener('click', () => modal?.classList.add('is-open'));
closeEls.forEach(el => el.addEventListener('click', () => modal.classList.remove('is-open')));

// Construcción del mensaje
function buildRsvpMessage(attend, name, note) {
  const saludo = name ? `Hola, soy ${name}. ` : 'Hola. ';
  const baseSi = `Confirmo mi asistencia a la boda de ${COUPLE_NAMES}${EVENT_DATE ? ` el ${EVENT_DATE}` : ''}${EVENT_PLACE ? ` en ${EVENT_PLACE}` : ''}.`;
  const baseNo = `Con mucha pena no podré asistir a la boda de ${COUPLE_NAMES}${EVENT_DATE ? ` el ${EVENT_DATE}` : ''}.`;
  const extra = note ? ` Nota: ${note}.` : '';
  const gracias = ' ¡Gracias por la invitación!';
  return saludo + (attend === 'si' ? baseSi : baseNo) + extra + gracias;
}

function openWhatsAppWith(message) {
  const url = `https://wa.me/${RSVP_PHONE}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

// Envío desde el modal
const sendBtn = document.getElementById('rsvp-send');
sendBtn?.addEventListener('click', () => {
  const choice = document.querySelector('input[name="rsvpChoice"]:checked')?.value || 'si';
  const name = document.getElementById('rsvp-name')?.value.trim();
  const note = document.getElementById('rsvp-note')?.value.trim();
  const msg = buildRsvpMessage(choice, name, note);
  openWhatsAppWith(msg);
});

// Confirmación ultra-rápida (solo un clic)
const quickSi = document.getElementById('quick-rsvp-si');
if (quickSi) {
  const msg = buildRsvpMessage('si', '', '');
  quickSi.setAttribute('href', `https://wa.me/${RSVP_PHONE}?text=${encodeURIComponent(msg)}`);
}


