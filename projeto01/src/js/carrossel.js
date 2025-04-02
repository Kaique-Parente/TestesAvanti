document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".carousel").forEach((carouselWrapper) => {
        const carousel = carouselWrapper.querySelector(".carousel-container");
        const cards = carouselWrapper.querySelectorAll(".card");
        const esqSeta = carouselWrapper.querySelector(".carousel-seta-esq");
        const dirSeta = carouselWrapper.querySelector(".carousel-seta-dir");
        const indicatorContainer = carouselWrapper.querySelector(".carousel-indicator");

        let index = 0;
        let visibleCards = getVisibleCards();
        let totalCards = cards.length;
        let totalPages = Math.ceil(totalCards / visibleCards);
        let cardWidth = cards[0].offsetWidth + 17; // Tamanho de um card + gap

        function getVisibleCards() {
            if (window.innerWidth >= 1200) return 5;
            if (window.innerWidth >= 1036) return 4;
            if (window.innerWidth >= 830) return 3;
            if (window.innerWidth >= 530) return 2;
            return 1;
        }

        function createIndicators() {
            indicatorContainer.innerHTML = ""; // Limpa os indicadores antigos
            for (let i = 0; i < totalPages; i++) {
                const dot = document.createElement("div");
                dot.classList.add("indicator-dot");
                if (i === 0) dot.classList.add("ativo-ind"); // Primeiro indicador ativo
                indicatorContainer.appendChild(dot);
            }
        }

        function updateIndicators() {
            const dots = carouselWrapper.querySelectorAll(".indicator-dot");
            dots.forEach((dot, i) => {
                dot.classList.toggle("ativo-ind", i === index);
            });
        }

        dirSeta.addEventListener("click", () => {
            if (index < totalPages - 1) {
                index++;
            } else {
                index = 0; // Volta para o início ao chegar no fim
            }
            updateCarousel();
        });

        esqSeta.addEventListener("click", () => {
            if (index > 0) {
                index--;
            } else {
                index = totalPages - 1; // Volta para o último grupo de itens
            }
            updateCarousel();
        });

        function updateCarousel() {
            const offset = index * visibleCards * cardWidth * -1;
            carousel.style.transform = `translateX(${offset}px)`;
            updateIndicators();
        }

        window.addEventListener("resize", () => {
            visibleCards = getVisibleCards();
            totalPages = Math.ceil(totalCards / visibleCards);
            createIndicators();
            index = 0; // Reinicia a posição para evitar bugs
            updateCarousel();
        });

        createIndicators();
    });
});
