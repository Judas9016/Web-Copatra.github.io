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
      title: "Asesinato dentro de los buses de Copatra",
      content: "El trágico asesinato de Fredy Ramírez Jaramillo, un conductor de 39 años, ocurrido en la parte baja del barrio Buenos Aires, desencadenó un paro de actividades por parte de los conductores de la empresa Copatra. Este cese de operaciones dejó fuera de servicio a 63 buses y afectó gravemente a los residentes de tres importantes sectores del nororiente de Medellín: Caicedo, Villatina y Santa Lucía.Ante esta delicada situación, las autoridades locales implementaron de inmediato un plan de contingencia para evitar que las vías fueran bloqueadas, mientras trabajaban para garantizar la movilidad en la zona. La Policía intensificó los patrullajes en las áreas afectadas, buscando preservar la seguridad de los ciudadanos, quienes se vieron obligados a buscar alternativas de transporte como caminar, usar taxis o desplazarse en bicicletas Como parte de las medidas adoptadas, las fuerzas policiales pusieron a disposición cuatro buses para facilitar el traslado de los habitantes y mitigar los inconvenientes generados por la falta de servicio de transporte público regular. Este hecho ha puesto en evidencia los riesgos a los que están expuestos los conductores y la necesidad de reforzar las medidas de seguridad para proteger tanto a los trabajadores del transporte como a los usuarios que dependen de este servicio en la ciudad.",
      media: "<img src='assets/img/noticias/barrio-caicedo-paro-de-buses-1-e.jpg' alt='Imagen de noticia'>"
    },
    {
      title: "Aumento de Pasajeros en las Rutas",
      content: "El número de pasajeros en nuestras rutas ha aumentado un 20% en el último mes, lo que demuestra la eficiencia de nuestro servicio.",
      media: "<video src='assets/img/noticias/' controls></video>"
    },
    {
      title: "Hola vecina, ¿me pone 5 mil en el tanque, sí?",
      content: "En las primeras horas de la mañana de este miércoles 24 de marzo, un bus de servicio público perteneciente a la ruta de Caicedo terminó estrellándose contra la fachada de una vivienda, en un hecho que generó alarma en la comunidad. Según los reportes iniciales, el incidente ocurrió mientras el vehículo transitaba por la calle 53 con carrera 27, en el barrio Enciso, cuando aparentemente sufrió una falla en el sistema de frenos, lo que provocó que el conductor perdiera el control y colisionara directamente con la estructura de la casa. Afortunadamente, no se reportaron víctimas fatales como resultado de este accidente. Sin embargo, se confirmó que unas 15 personas resultaron con heridas de diversa consideración, además de los daños materiales ocasionados tanto al bus como a la fachada de la propiedad afectada. Los heridos fueron atendidos de inmediato por equipos de emergencia que acudieron al lugar de los hechos. En total, se desplazaron al sitio ocho ambulancias de la Secretaría de Salud de Medellín y dos máquinas del cuerpo de bomberos de la ciudad, las cuales coordinaron las labores de rescate y brindaron atención médica a los lesionados. Las autoridades locales se encuentran investigando las circunstancias exactas que rodearon el accidente, con el fin de esclarecer si la falla mecánica fue el único factor involucrado o si existieron otros elementos que contribuyeron al choque. El incidente ha puesto nuevamente en discusión la importancia de garantizar el mantenimiento adecuado de los vehículos de transporte público y de reforzar las medidas de seguridad vial, para prevenir este tipo de situaciones que no solo generan daños materiales, sino que también ponen en riesgo la vida y la integridad de los pasajeros y transeúntes.",
      media: "<img src='assets/img/noticias/Choque-678x381.jpg' alt='Imagen de noticia'>"
    },
    {
      title: "Devuélvanme mis 50 pesos.",
      content: "La situación con los habitantes de calle en Medellín preocupa cada vez más, especialmente al sector del transporte público. El pasado 29 de octubre, un bus de la empresa COPATRA fue atacado con una piedra en La Minorista, causando daños en una ventana trasera. Este es el segundo incidente similar en tres días, luego de que otro bus de Circular Coonatra fuera agredido en la calle Barranquilla. Estos ataques no solo generan daños materiales, sino que también ponen en riesgo la vida de pasajeros y conductores. La ciudadanía y los transportadores exigen mayor seguridad, mientras las autoridades trabajan en soluciones integrales que aborden tanto la seguridad pública como la situación de vulnerabilidad de los habitantes de calle. Las empresas de transporte piden más patrullajes y estrategias para prevenir nuevos ataques.",
      media: "<img src='assets/img/noticias/WhatsApp-Image-2024-10-29-at-4.06.43-PM.jpeg' alt='Imagen de noticia'>"
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




