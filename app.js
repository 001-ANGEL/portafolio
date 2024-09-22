

//Automatizacion del los proyectos

let projects = [
    {
        img: ''
    }
];







// Menu Hamburguesa
const nav = document.querySelector("#navVisible")
const btnOpen = document.querySelector("#btnOpen")
const btnClose = document.querySelector("#btnClose")

btnOpen.addEventListener("click", () => {
    nav.classList.add("ul-visible");

})

btnClose.addEventListener("click", () => {
    nav.classList.remove("ul-visible")
})

//Menu de filtros
const menuFilter = document.querySelector("#menuFilter");
const btnOpenMenu = document.querySelector("#btnOpenMenu");

btnOpenMenu.addEventListener("click", () => {
    // Si el menú ya está visible
    if (menuFilter.classList.contains("menu-visible")) {
        // Si está visible, lo ocultamos quitando la clase
        menuFilter.classList.remove("menu-visible");
    } else {
        // Si no está visible, lo mostramos agregando la clase
        menuFilter.classList.add("menu-visible");
    }
});