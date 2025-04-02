document.querySelectorAll(".link-container").forEach((container) => {
    const listaTitulos = container.querySelectorAll("h5");
    const listaTextos = container.querySelectorAll("p");
    const buttonLink = container.querySelector(".link-button");
    const arrowButton = buttonLink.querySelector("img");

    if(window.innerWidth >= 720){
        listaTitulos.forEach((item) => {
            item.classList.remove("hidden");
        })
        listaTextos.forEach((item) => {
            item.classList.remove("hidden");
        })
    }

    if(window.innerWidth <= 720){
        listaTitulos.forEach((item) => {
            item.classList.add("hidden");
        })
        listaTextos.forEach((item) => {
            item.classList.add("hidden");
        })
    }

    buttonLink.addEventListener("click", () => {
        listaTitulos.forEach((item) => {
            item.classList.toggle("hidden");
        })
        listaTextos.forEach((item) => {
            item.classList.toggle("hidden");
        })

        if (arrowButton.style.transform === "rotate(180deg)") {
            arrowButton.style.transform = "rotate(0deg)";
        } else {
            arrowButton.style.transform = "rotate(180deg)";
        }
    })
})