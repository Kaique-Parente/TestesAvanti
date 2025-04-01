document.addEventListener("DOMContentLoaded", function () {
    const todasCategorias = document.getElementById("todas-categorias");
    const imagesCategorias = document.querySelectorAll("#todas-categorias img");
    const menuTodosContainer = document.querySelector(".menu-todos-container");

    const navbarLinks = document.querySelectorAll(".btn-link");
    const menuCategoriasContainer = document.querySelector(".menu-departamento-container");

    if (todasCategorias && imagesCategorias.length > 0 && menuTodosContainer) {
        
        todasCategorias.addEventListener("mouseenter", () => {
            menuTodosContainer.classList.add("show");
            imagesCategorias.forEach((image) => {
                image.classList.toggle("hidden");
            });
        });

        todasCategorias.addEventListener("mouseleave", () => {
            imagesCategorias.forEach((image) => {
                image.classList.toggle("hidden");
            });
        });

        menuTodosContainer.addEventListener("mouseleave", () => {
            menuTodosContainer.classList.remove("show");
        });

        menuCategoriasContainer.addEventListener("mouseenter", () => {
            menuTodosContainer.classList.remove("show");
        });
    }

    if(navbarLinks && menuCategoriasContainer){
        navbarLinks.forEach((link) => {
            link.addEventListener("mouseenter", () => {
                menuCategoriasContainer.classList.add("show");
            });
        });

        menuCategoriasContainer.addEventListener("mouseleave", () => {
            menuCategoriasContainer.classList.remove("show");
        });
    }
});
