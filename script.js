// TU NÚMERO CONFIGURADO
const TELEFONO_WHATSAPP = "34661845232"; 

// 1. ENVÍO DE CONFIRMACIÓN DIRECTA A TU WHATSAPP
document.getElementById('rsvp-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const nombre = document.getElementById('name').value;
  const asistencia = document.querySelector('input[name="attendance"]:checked').value;
  
  const mensaje = `¡Buenas! Soy *${nombre}*. Confirmo para tu cumple: *${asistencia}* 🍾`;
  const url = `https://api.whatsapp.com/send?phone=${TELEFONO_WHATSAPP}&text=${encodeURIComponent(mensaje)}`;
  
  window.open(url, '_blank');
});

// 2. TEMPORIZADOR CONFIGURADO PARA EL 8 DE ENERO DE 2027 A LAS 21:00
const fechaCumple = new Date("Jan 8, 2027 21:00:00").getTime();

setInterval(function() {
  const ahora = new Date().getTime();
  const distancia = fechaCumple - ahora;

  if (distancia > 0) {
    document.getElementById("days").innerText = Math.floor(distancia / (1000 * 60 * 60 * 24));
    document.getElementById("hours").innerText = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("minutes").innerText = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("seconds").innerText = Math.floor((distancia % (1000 * 60)) / 1000);
  }
}, 1000);
