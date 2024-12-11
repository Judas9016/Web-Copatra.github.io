/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

  // Navbar shrink function
  var navbarShrink = function () {
      const navbarCollapsible = document.body.querySelector('#mainNav');
      if (!navbarCollapsible) {
          return;
      }
      
      // Agregar la clase si el desplazamiento es mayor a 20px
      if (window.scrollY > 20) {
          navbarCollapsible.classList.add('navbar-shrink');
      } else {
          navbarCollapsible.classList.remove('navbar-shrink');
      }
  };

  // Shrink the navbar 
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener('scroll', navbarShrink);

  //  Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector('#mainNav');
  if (mainNav) {
      new bootstrap.ScrollSpy(document.body, {
          target: '#mainNav',
          rootMargin: '0px 0px -40%',
      });
  };

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector('.navbar-toggler');
  const responsiveNavItems = [].slice.call(
      document.querySelectorAll('#navbarResponsive .nav-link')
  );
  responsiveNavItems.map(function (responsiveNavItem) {
      responsiveNavItem.addEventListener('click', () => {
          if (window.getComputedStyle(navbarToggler).display !== 'none') {
              navbarToggler.click();
          }
      });
  });

});


// Datos de las noticias
const newsData = [
    {
      title: "Copatra celebra el Día del Conductor en reconocimiento a su labor",
      content: "¡Feliz Día del Conductor! En Copatra, queremos agradecer a todos nuestros conductores por su dedicación, esfuerzo y compromiso diario en mantener el servicio de transporte seguro y eficiente. Su profesionalismo y responsabilidad son clave para brindar un viaje cómodo a nuestros pasajeros. ¡Gracias por ser parte fundamental de nuestra familia Copatra!",
      media: "<img src='assets/img/noticias/SaveClip.App_451087557_2253702934972318_535772522667116551_n.jpg' alt='Imagen de noticia'>"
    },
    {
      title: "Habitante de calle lanza piedra a bus de Copatra en pleno centro de la ciudad",
      content: "Un habitante de calle lanzó una piedra a un bus de Copatra en el centro de la ciudad, causando daños materiales al vehículo. Afortunadamente, no hubo personas heridas. Copatra trabaja con las autoridades para esclarecer el incidente y garantizar la seguridad de sus pasajeros.",
      media: "<video src='assets/img/noticias/SaveClip.App_AQNIM4UV0-1cEjLAbf9dz7aO5Lor6PSIfwMt24CrfZlZek1ICMfXkF9067I6ECXse4Y_dR7TZ1ijYb_Jm-STeqMYgRvME5GaAhRb4bQ.mp4' controls></video>"
    },
    {
      title: "Segundo Semestre de Pico y Placa 2024: Nuevas Normas y Horarios para la Ciudad",
      content: "",
      media: "<img src='assets/img/noticias/SaveClip.App_469334932_17984347511758724_337435416969219943_n.jpg' alt='Imagen de noticia'>"
    },
    {
      title: "Copatra Celebra 60 Años de Servicio y Compromiso con la Comunidad",
      content: "Copatra celebra con orgullo sus 60 años de historia, brindando transporte seguro y eficiente a miles de personas. A lo largo de seis décadas, hemos crecido junto a nuestra comunidad, manteniendo siempre el compromiso de ofrecer un servicio de calidad y confianza. Gracias a todos los que han sido parte de este viaje, ¡y seguimos avanzando juntos hacia un futuro lleno de éxitos!",
      media: "<img src='assets/img/noticias/SaveClip.App_469476266_17984347649758724_9028405384172317496_n.jpg' alt='Imagen de noticia'>"
    }
  ];
  
  const newsContainer = document.querySelector('.news-container');
  const loadMoreButton = document.getElementById('loadMoreButton');
  const busAnimation = document.getElementById('busAnimation');
  let visibleNews = 2;
  
  // Función para mostrar las noticias
  function displayNews() {
    newsContainer.innerHTML = ''; // Limpia el contenedor
    newsData.slice(0, visibleNews).forEach((news, index) => {
      const card = `
        <div class="col-12 col-md-6 col-lg-4 slide-in">
          <div class="card">
            ${news.media}
            <div class="card-body">
              <h5 class="card-title">${news.title}</h5>
              <p class="card-text">${news.content.substring(0, 60)}...</p>
              <button class="btn btn-success pulse" data-bs-toggle="modal" data-bs-target="#newsModal" onclick="openNews(${index})">
                Ver más <i class="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>`;
      newsContainer.innerHTML += card;
    });
  }
  
  // Abre el modal con la noticia completa
  function openNews(index) {
    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = `
      <h3>${newsData[index].title}</h3>
      <p>${newsData[index].content}</p>
      ${newsData[index].media}
    `;
  }
  
  // Muestra más noticias al hacer clic en el botón
  loadMoreButton.addEventListener('click', () => {
    if (visibleNews < newsData.length) {
      visibleNews += 2; // Incrementa las noticias visibles
      animateBus(); // Activa la animación del bus
      if (visibleNews >= newsData.length) {
        loadMoreButton.textContent = 'No hay más noticias';
        loadMoreButton.disabled = true;
      }
    }
    loadMoreButton.classList.add('zoom-in');  // Animación de zoom al botón
    setTimeout(() => loadMoreButton.classList.remove('zoom-in'), 1000); // Remueve la animación después de 1 segundo
    displayNews();
  });
  
  // Función para animar el bus
  function animateBus() {
    busAnimation.classList.add('animate'); // Activa la animación del bus
    setTimeout(() => {
      busAnimation.classList.remove('animate'); // Reinicia la animación después de 1 segundo
    }, 3000);
  }
  
  // Inicializa las noticias visibles
  displayNews();

  /* rutas */

  // Datos de las rutas
const rutas = [
  { id: 1, image: 'assets/img/portfolio/Pinal090-copia.jpg', title: '90' },
  { id: 2, image: 'assets/img/portfolio/Llanadas091 (2).JPG', title: '91' },
  { id: 3, image: 'assets/img/portfolio/b00c8366-ca63-4418-99d9-8835129ba9eb.JPG', title: '93' },
  { id: 4, image: 'assets/img/portfolio/SantaLucia094 (2).JPG', title: '94' },
  { id: 5, image: 'assets/img/portfolio/Villanita095 (2).JPG', title: '95' },
  { id: 6, image: 'assets/img/portfolio/Palmas112 (2).JPG', title: '112' }
];

// Renderizar rutas en el portafolio
function renderRutas() {
  const portfolioGrid = document.getElementById('portfolioGrid');
  rutas.forEach(ruta => {
      const routeHTML = `
          <div class="col-lg-4 col-sm-6 mb-4">
              <div class="portfolio-item">
                  <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal${ruta.id}">
                      <div class="portfolio-hover">
                          <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                      </div>
                      <img class="img-fluid" src="${ruta.image}" alt="..." />
                  </a>
                  <div class="portfolio-caption">
                      <div class="portfolio-caption-heading">${ruta.title}</div>
                  </div>
              </div>
          </div>`;
      portfolioGrid.insertAdjacentHTML('beforeend', routeHTML);
  });
}

// Inicializar la generación de rutas al cargar la página
document.addEventListener('DOMContentLoaded', renderRutas);


/* formulario de contactos */

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (event) {
      event.preventDefault(); // Evitar envío por defecto
      form.classList.add("was-validated"); // Agregar estilo de validación

      if (form.checkValidity()) {
          // Enviar formulario usando Fetch
          const formData = new FormData(form);

          fetch(form.action, {
              method: form.method,
              body: formData,
              headers: {
                  "Accept": "application/json"
              }
          })
          .then(response => {
              if (response.ok) {
                  document.getElementById("submitSuccessMessage").classList.remove("d-none");
                  document.getElementById("submitErrorMessage").classList.add("d-none");
                  form.reset();
                  form.classList.remove("was-validated");
              } else {
                  throw new Error("Error al enviar el formulario");
              }
          })
          .catch(() => {
              document.getElementById("submitErrorMessage").classList.remove("d-none");
              document.getElementById("submitSuccessMessage").classList.add("d-none");
          });
      }
  });
});




