// Lógica para la pantalla de bienvenida
document.addEventListener('DOMContentLoaded', function() {
  const enterBtn = document.getElementById("enter-btn");
  const welcomeScreen = document.getElementById("welcome-screen");

  if (enterBtn && welcomeScreen) {
  enterBtn.addEventListener("click", () => {
    welcomeScreen.classList.add("fade-out");
    document.body.classList.remove("loading");

    setTimeout(() => {
      welcomeScreen.classList.add("hidden");

      // 🔽 Desplazar hacia la portada (landing)
      const portada = document.getElementById("landing-cover");
      if (portada) {
        portada.scrollIntoView({ behavior: "smooth" });
      }
    }, 800);
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

  // Marca de animación (se quita sola al terminar)
  polaroid.classList.remove('animating'); // por si venía de otra
  // Forzamos reflow para reiniciar la animación
  void polaroid.offsetWidth;

  // Cambia imagen y textos
  const img = polaroid.querySelector('img');
  const cap = polaroid.querySelector('.retratos-caption');
  img.src = retratos[idx].img;
  img.alt = retratos[idx].caption;
  cap.textContent = retratos[idx].caption;

  // Dots activos
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.toggle('active', i === idx);
  }

  // Dispara animación
  polaroid.classList.add('animating');
  img.addEventListener('animationend', () => {
    polaroid.classList.remove('animating');
  }, { once: true });
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

/* ====== RSVP por WhatsApp (único botón + opciones en modal) ====== */
document.addEventListener('DOMContentLoaded', () => {
  // Configuración
  const RSVP_PHONE   = '18295194031';          // formato internacional sin "+"
  const COUPLE_NAMES = 'Raul & Milagro';
  const EVENT_DATE   = 'Viernes 11 de Octubre'; // ajusta si corresponde
  const EVENT_PLACE  = 'Salón Jardines del Lago';

  // Elementos
  const openBtn  = document.getElementById('open-rsvp-modal');
  const modal    = document.getElementById('rsvp-modal');
  const closeEls = modal ? modal.querySelectorAll('[data-close-modal], .rsvp-modal__close') : [];
  const sendBtn  = document.getElementById('rsvp-send');

  const directInput = document.getElementById('rsvp-direct');
  const directBtn   = document.getElementById('rsvp-direct-send');

  // Helpers
  function buildRsvpMessage(attend, name, note) {
    const saludo = name ? `Hola, soy ${name}. ` : 'Hola. ';
    const baseSi = `Confirmo mi asistencia a la boda de ${COUPLE_NAMES}${EVENT_DATE ? ` el ${EVENT_DATE}` : ''}${EVENT_PLACE ? ` en ${EVENT_PLACE}` : ''}.`;
    const baseNo = `Con mucha pena no podré asistir a la boda de ${COUPLE_NAMES}${EVENT_DATE ? ` el ${EVENT_DATE}` : ''}.`;
    const extra   = note ? ` Nota: ${note}.` : '';
    const gracias = ' ¡Gracias por la invitación!';
    return saludo + (attend === 'si' ? baseSi : baseNo) + extra + gracias;
  }
  function openWA(text) {
    const url = `https://wa.me/${RSVP_PHONE}?text=${encodeURIComponent(text)}`;
    const w = window.open(url, '_blank');
    if (!w) window.location.href = url; // fallback si bloquea pop-up
  }

  // Abrir/cerrar modal
  openBtn?.addEventListener('click', () => modal?.classList.add('is-open'));
  closeEls.forEach(el => el.addEventListener('click', () => modal.classList.remove('is-open')));

  // Envío estructurado (Sí/No + nombre + nota)
  sendBtn?.addEventListener('click', () => {
    const choice = document.querySelector('input[name="rsvpChoice"]:checked')?.value || 'si';
    const name = document.getElementById('rsvp-name')?.value?.trim() || '';
    const note = document.getElementById('rsvp-note')?.value?.trim() || '';
    openWA(buildRsvpMessage(choice, name, note));
  });

});



/* =========================
   Links Google Calendar y Maps
   ========================= */

// EDITA el año / fecha / horarios aquí:
const EVENT_YEAR = 2025;

const CEREMONY = {
  title: 'Ceremonia de boda - Raul & Milagro',
  // 11 de octubre, 2:30 PM a 4:00 PM
  start: new Date(EVENT_YEAR, 9, 11, 14, 30, 0), // mes 9 = octubre
  end:   new Date(EVENT_YEAR, 9, 11, 16, 0, 0),
  location: 'Parroquia Nuestra Señora, Av. San Isidro 207, San José',
  details: 'Acompáñanos en nuestra ceremonia.'
};

const PARTY = {
  title: 'Fiesta de Celebración - Raul & Milagro',
  // 11 de octubre, 8:00 PM a 11:59 PM (ajusta si quieres más horas)
  start: new Date(EVENT_YEAR, 9, 11, 20, 0, 0),
  end:   new Date(EVENT_YEAR, 9, 11, 23, 59, 0),
  location: 'Salón Jardines del Sol, Calle Primavera 123, San José',
  details: '¡A celebrar juntos!'
};

// Utilidades
function toGCalDate(dt) {
  // YYYYMMDDTHHMMSS (hora local del usuario)
  const pad = n => String(n).padStart(2, '0');
  const y = dt.getFullYear();
  const m = pad(dt.getMonth() + 1);
  const d = pad(dt.getDate());
  const hh = pad(dt.getHours());
  const mm = pad(dt.getMinutes());
  const ss = pad(dt.getSeconds());
  return `${y}${m}${d}T${hh}${mm}${ss}`;
}

function buildGCalLink({ title, start, end, location, details }) {
  const base = 'https://calendar.google.com/calendar/render?action=TEMPLATE';
  const text = `&text=${encodeURIComponent(title)}`;
  const dates = `&dates=${toGCalDate(start)}/${toGCalDate(end)}`;
  const loc = `&location=${encodeURIComponent(location)}`;
  const det = `&details=${encodeURIComponent(details || '')}`;
  return `${base}${text}${dates}${loc}${det}`;
}

function buildMapsLink(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

// Colocar links en los botones
document.addEventListener('DOMContentLoaded', () => {
  const ceremonySave = document.getElementById('ceremony-save');
  const ceremonyMaps = document.getElementById('ceremony-maps');
  const partySave = document.getElementById('party-save');
  const partyMaps = document.getElementById('party-maps');

  if (ceremonySave) ceremonySave.href = buildGCalLink(CEREMONY);
  if (ceremonyMaps) ceremonyMaps.href = buildMapsLink(CEREMONY.location);

  if (partySave) partySave.href = buildGCalLink(PARTY);
  if (partyMaps) partyMaps.href = buildMapsLink(PARTY.location);
});


/* ===== Scroll reveal: IntersectionObserver ===== */
document.addEventListener('DOMContentLoaded', () => {
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      const el = entry.target;
      if (entry.isIntersecting) {
        el.classList.add('is-visible');
        // Si no quieres que se repita al salir/entrar, deja de observar
        if (!el.hasAttribute('data-repeat')) obs.unobserve(el);
      } else if (el.hasAttribute('data-repeat')) {
        el.classList.remove('is-visible');
      }
    });
  }, { root: null, threshold: 0.15, rootMargin: '0px 0px -10% 0px' });

  // Stagger: asigna delays a los hijos
  document.querySelectorAll('[data-stagger]').forEach(container => {
    const step = parseInt(container.getAttribute('data-stagger'), 10) || 100; // ms
    Array.from(container.children).forEach((child, i) => {
      // Si el hijo no tiene data-reveal, dale uno por defecto
      if (!child.hasAttribute('data-reveal')) child.setAttribute('data-reveal', 'fade-up');
      child.style.setProperty('--reveal-delay', `${i * step}ms`);
      io.observe(child);
    });
  });

  // Observa todos los elementos marcados con data-reveal (que no estén dentro de data-stagger)
  document.querySelectorAll('[data-reveal]:not([data-stagger] > *)')
    .forEach(el => io.observe(el));
});



