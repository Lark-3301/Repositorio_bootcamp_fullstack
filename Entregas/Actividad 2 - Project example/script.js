// ===== Semana 2: Funcionalidades JS básicas =====

// 1) Modo oscuro / claro
const themeBtn = document.getElementById('themeBtn');
themeBtn?.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// 2) Contador (+ y reset)
let count = 0;
const counterEl = document.getElementById('counter');
const addBtn = document.getElementById('addBtn');
const resetBtn = document.getElementById('resetBtn');

addBtn?.addEventListener('click', () => {
  count++;
  counterEl.textContent = String(count);
});

resetBtn?.addEventListener('click', () => {
  count = 0;
  counterEl.textContent = String(count);
});

// 3) Botón con alerta
const alertBtn = document.getElementById('alertBtn');
alertBtn?.addEventListener('click', () => {
  alert('¡Has hecho clic en el botón!');
});
