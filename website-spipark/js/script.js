const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active.toString());
  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

// Transição do carrossel de slides da página
let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
  nextImage();
}, 4000);

function nextImage() {
  count++;
  if (count > 3) {
    count = 1;
  }
  document.getElementById("radio" + count).checked = true;
}

// Função para rolar para o topo da página
function scrollToTop() {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
}

// Adiciona evento de clique ao botão "scroll to top"
const scrollToTopButton = document.querySelector(".scroll-to-top");
if (scrollToTopButton) {
  scrollToTopButton.addEventListener("click", scrollToTop);
}

const toggleButton = document.getElementById("dark-mode-toggle");
const iniSection = document.querySelector(".ini");
const tabelaPrecosSection = document.querySelector(".tabela-precos");
const comoChegarTitle = document.querySelector("#como-chegar h1");

toggleButton.addEventListener("click", () => {
  // Toggle dark mode na página
  document.body.classList.toggle("dark-mode");
  iniSection.classList.toggle("dark-mode");
  tabelaPrecosSection.classList.toggle("dark-mode");

  // Altera a cor dos h1 na seção ini, exceto na tabela de preços e no como chegar
  const h1Elements = iniSection.querySelectorAll("h1");
  h1Elements.forEach((h1) => {
    if (!h1.closest(".tabela-precos") && !h1.closest("#como-chegar")) {
      h1.classList.toggle("dark-mode");
    }
  });

  // Altera o ícone do botão de toggle
  const darkModeIcon = document.getElementById("dark-mode-icon");
  const lightModeIcon = document.getElementById("light-mode-icon");
  darkModeIcon.classList.toggle("hidden");
  lightModeIcon.classList.toggle("hidden");

  // Verifica se está no modo dark e ajusta o título "como chegar"
  if (document.body.classList.contains("dark-mode")) {
    comoChegarTitle.style.color = "#ffffff"; // Branco no modo dark
  } else {
    comoChegarTitle.style.color = "#000000"; // Preto no modo claro
  }
});

// Inicializa o ícone correto com base no modo inicial da página
window.addEventListener("DOMContentLoaded", () => {
  const darkModeIcon = document.getElementById("dark-mode-icon");
  const lightModeIcon = document.getElementById("light-mode-icon");
  if (document.body.classList.contains("dark-mode")) {
    darkModeIcon.classList.remove("hidden");
    lightModeIcon.classList.add("hidden");
    // Ajusta o título "como chegar" para branco se estiver no modo dark
    comoChegarTitle.style.color = "#ffffff";
  } else {
    darkModeIcon.classList.add("hidden");
    lightModeIcon.classList.remove("hidden");
    // Ajusta o título "como chegar" para preto se estiver no modo claro
    comoChegarTitle.style.color = "#000000";
  }
});
