//menu responsivo
const hamburguer = document.getElementById('hamburger');
const menu = document.getElementById("menu");
const overlay= document.getElementById("menuOverlay");
const header = document.getElementById("header");
let lastScroll = 0;

// abrir menu
hamburguer.addEventListener("click", () => {
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
})

// fechar ao clicar no overlay
overlay.addEventListener("click", closeMenu);

// fechar ao clicar em um link
menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
})

function closeMenu() {
    menu.classList.remove("active");
    overlay.classList.remove("active");
}


const display = document.getElementById("display");
    const thumbs = document.querySelectorAll(".thumbnail img");
    let currentIndex = 0;
    let interval;

    function showImage(index) {
      display.classList.remove("zoom"); // reseta zoom
      setTimeout(() => {
        display.src = thumbs[index].src;
        display.classList.add("zoom"); // aplica zoom
      }, 100);
      currentIndex = index;
    }

    thumbs.forEach((thumb, index) => {
      thumb.addEventListener("click", () => {
        clearInterval(interval); // pausa quando usuário interage
        showImage(index);
        startAutoSlide();
      });
    });

    function startAutoSlide() {
      interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % thumbs.length;
        showImage(currentIndex);
      }, 5000); // troca a cada 5s
    }

    // Inicializa
    showImage(0);
    startAutoSlide();

const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
      const question = item.querySelector(".faq-question");
      question.addEventListener("click", () => {
      item.classList.toggle("active");

      // Fecha os outros se um for aberto
      faqItems.forEach(i => {
        if (i !== item) {
          i.classList.remove("active");
      }
    });
  });
});