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
  projectBox.classList.add("project");

  // Asigna el atributo data-aos al DIV
  projectBox.setAttribute("data-aos", "zoom-in-up");

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
    
     <div class="project-button">
     <a href="${project.link}">Ver Proyecto</a>
   </div>
  `;


    container.appendChild(projectBox);
});

// Menu Hamburguesa
const nav = document.querySelector("#navVisible");
const btnOpen = document.querySelector("#btnOpen");
const btnClose = document.querySelector("#btnClose");
const sections = [
  document.querySelector('#hero'),
  document.querySelector('#aboutMe'),
  document.querySelector('#experience'),
  document.querySelector('#projects'),
  document.querySelector('#skills'),
  document.querySelector('#contact')
];


btnOpen.addEventListener("click", () => {
  nav.classList.add("ul-visible");
});

btnClose.addEventListener("click", () => {
  nav.classList.remove("ul-visible");
});

// Obtener todos los enlaces en el menú
const anchors = nav.querySelectorAll('a');

sections.forEach(section => {
  section.addEventListener("click", () => {
    nav.classList.remove("ul-visible");
  });
});

anchors.forEach(anchor => {
  anchor.addEventListener("click", () => {
    nav.classList.remove("ul-visible");
  });
});


// Active para cada anchor
const navLinks = document.querySelectorAll("nav ul li a");
const section = document.querySelectorAll("section");

// Función para actualizar la clase active
function updateActiveLink() {
    let index = section.length;

    while (--index && window.scrollY + 50 < section[index].offsetTop) {}

    navLinks.forEach((link) => link.classList.remove("active"));
    navLinks[index].classList.add("active");
}

// Llama a la función en scroll y cuando carga la página
window.addEventListener("scroll", updateActiveLink);
window.addEventListener("load", updateActiveLink);

//* Animaciones

AOS.init({
  duration: 1000, // Duración de la animación en milisegundos
  once: true      // La animación ocurre solo una vez
});


//* Funcionamiento del formulario
const btn = document.getElementById("button");

const userName = document.querySelector("#from_name");
const message = document.querySelector("#message");
const emailID = document.querySelector("#emai_id");

const form = document.querySelector("#form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (userName.value === "" || message.value === "" || emailID.value === "") {
    showAlert("Todos los campos son obligatorios");
  } else {
    if (!validateEmail(emailID.value)) {
      showAlert("Ingrese un Email válido");
    } else {
      btn.value = "Enviando...";

      const serviceID = "default_service";
      const templateID = "template_ycfp17d";

      emailjs.sendForm(serviceID, templateID, form).then(
        () => {
          btn.value = "Enviar Email";
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Enviado Correctamente!",
            showConfirmButton: false,
            timer: 1000
          });
          setTimeout(() => {
            location.href = '#hero';

            setTimeout(() => {
              location.reload()
            }, 1000);
          }, 2000);
          
        },
        (err) => {
          btn.value = "Enviar Email";
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Enviado Correctamente!",
            showConfirmButton: false,
            timer: 1000
          });
          console.log(err);
        }
      );
    }
  }
});

function showAlert(message) {
  const existsAlert = document.querySelector(".alert-p");
  if (!existsAlert) {
    const field = document.querySelector(".field-alert");
    const alert = document.createElement("P");
    alert.classList.add("alert-p");
    alert.textContent = message;

    field.appendChild(alert);

    setTimeout(() => {
      alert.remove();
    }, 3000);
  }
}

function validateEmail(emailID) {
  const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  return regex.test(emailID);
}
