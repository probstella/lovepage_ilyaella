const dataInicio = new Date("2016-12-08");

function calcularTempoJuntos() {
  const hoje = new Date();
  const diff = hoje - dataInicio;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const semanas = Math.floor(dias / 7);
  const anos = (dias / 365.25).toFixed(1); // Inclui anos bissextos

  document.getElementById("dias").textContent = dias;
  document.getElementById("semanas").textContent = semanas;
  document.getElementById("anos").textContent = anos;

  // Animação suave ao inserir valores
  document.getElementById("dias").classList.add("fade-in");
  document.getElementById("semanas").classList.add("fade-in");
  document.getElementById("anos").classList.add("fade-in");
}

function criarPetalas() {
  const body = document.body;
  const numPetalas = 15;

  for (let i = 0; i < numPetalas; i++) {
    const petala = document.createElement('div');
    petala.classList.add('petala');
    
    petala.style.left = Math.random() * 100 + 'vw';
    petala.style.animationDuration = (5 + Math.random() * 5) + 's';
    petala.style.animationDelay = (Math.random() * 10) + 's';

    body.appendChild(petala);
  }
}

function alternarTema() {
  document.body.classList.toggle("modo-fofo");
  document.body.classList.toggle("modo-gotico");
}

document.addEventListener("DOMContentLoaded", () => {
  calcularTempoJuntos();
  criarPetalas();

  const botaoTema = document.getElementById("alternar-tema");
  if (botaoTema) {
    botaoTema.addEventListener("click", alternarTema);
  }
});

// Alternar tema gótico/fofo
const toggleBtn = document.getElementById("toggleThemeBtn");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("modo-fofo");

  if (document.body.classList.contains("modo-fofo")) {
    toggleBtn.textContent = "🌙"; // Modo escuro
  } else {
    toggleBtn.textContent = "🎀"; // Modo fofo
  }
});


