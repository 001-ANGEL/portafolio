//Automatizacion del los proyectos
const container = document.querySelector("#projects-container");

let projects = [
  {
    img: "images/imagen1.jpg",
    title: "Titulo del Proyecto",
    description: "descripcion",
    link: "https://google.com",
  },
  {
    img: "images/imagen1.jpg",
    title: "Titulo del Proyecto",
    description: "descripcion",
    link: "https://google.com",
  },
  {
    img: "images/imagen1.jpg",
    title: "Titulo del Proyecto",
    description: "Consectetur non nulla nostrud adipisicing laboris velit laborum tempor aliqua exercitation. Adipisicing reprehenderit pariatur occaecat amet cupidatat duis fugiat sunt aute proident sit magna fugiat commodo. Irure elit tempor aliqua adipisicing duis do velit qui esse in. Duis voluptate fugiat in velit mollit est enim non pariatur ipsum officia. Reprehenderit reprehenderit cillum non ad cillum anim cupidatat sint ex amet anim ullamco.",
    link: "https://google.com",
  },
  {
    img: "images/imagen1.jpg",
    title: "Titulo del Proyecto",
    description: "descripcion",
    link: "https://google.com",
  },
  {
    img: "images/imagen1.jpg",
    title: "Titulo del Proyecto",
    description: "descripcion",
    link: "https://google.com",
  },
];

//Funciones

projects.forEach((project) => {
  const projectBox = document.createElement("DIV");
  projectBox.classList.add("project");

  projectBox.innerHTML = `
    <div class="project-img">
    <img src="${project.img}" alt="imagen de ${project.title}">
    </div>
    
    <div class="project-title">
        <h3>${project.title}</h3>
    </div>

    <div class="project-description">
        <p>${project.description}</p>
    </div>

    <div class="project-button">
        <a href="${project.link}">Ver Proyecto</a>
    </div>`;

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
