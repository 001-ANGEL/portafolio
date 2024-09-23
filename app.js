//Automatizacion del los proyectos
const container = document.querySelector("#projects-container");

let projects = [
  {
    img: "images/proyecto-2.webp",
    title: "E-commerce",
    description: " Desarrollé una interfaz para una tienda en línea que permite a los usuarios explorar una variedad de productos.",
    // link: "https://google.com",
  },
  {
    img: "images/proyecto-1.webp",
    title: "Simulador de E-mails",
    description: " Interfaz de simulador de correo electrónico que permite a los usuarios enviar, junto con sus validaciones.",
    // link: "https://google.com",
  },
  {
    img: "images/proyecto-3.webp",
    title: "Carrito de Compras",
    description: " Interfaz de carrito de compras que permite a los usuarios seleccionar productos y gestionar su compra de manera sencilla.",
    // link: "https://google.com",
  },
  {
    img: "images/proyecto-5.webp",
    title: "Filtro de Autos",
    description: "Interfaz para un filtro de autos que permite a los usuarios buscar y filtrar vehículos según diferentes criterios como marca, modelo, precio y año.",
    // link: "https://google.com",
  },
  {
    img: "images/proyecto-4.webp",
    title: "Pomodoro",
    description: " Desarrollé una aplicación de temporizador Pomodoro que ayuda a los usuarios a gestionar su tiempo de trabajo y descanso de manera eficiente.",
    // link: "https://google.com",
  },
];

//Funciones

projects.forEach((project) => {
  const projectBox = document.createElement("DIV");
  projectBox.classList.add("project");

  projectBox.innerHTML = `
    <div class="project-img">
    <img src="${project.img}" alt="proyecto de ${project.title}">
    </div>
    
    <div class="project-title">
        <h3>${project.title}</h3>
    </div>

    <div class="project-description">
        <p>${project.description}</p>
    </div>

  `;

//   <div class="project-button">
//   <a href="${project.link}">Ver Proyecto</a>
// </div>

    container.appendChild(projectBox);
});

// // Menu Hamburguesa
// const nav = document.querySelector("#navVisible");
// const btnOpen = document.querySelector("#btnOpen");
// const btnClose = document.querySelector("#btnClose");

// btnOpen.addEventListener("click", () => {
//   nav.classList.add("ul-visible");
// });

// btnClose.addEventListener("click", () => {
//   nav.classList.remove("ul-visible");
// });

// //Menu de filtros
// const menuFilter = document.querySelector("#menuFilter");
// const btnOpenMenu = document.querySelector("#btnOpenMenu");

// btnOpenMenu.addEventListener("click", () => {
//   // Si el menú ya está visible
//   if (menuFilter.classList.contains("menu-visible")) {
//     // Si está visible, lo ocultamos quitando la clase
//     menuFilter.classList.remove("menu-visible");
//   } else {
//     // Si no está visible, lo mostramos agregando la clase
//     menuFilter.classList.add("menu-visible");
//   }
// });
