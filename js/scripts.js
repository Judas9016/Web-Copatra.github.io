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

  const rutas = [
    { id: 1, svg: '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 39.959 39.959" style="enable-background:new 0 0 39.959 39.959;" xml:space="preserve"><g><g><path style="fill: rgb(255, 235, 59);" d="M37.021,5.127c-0.186,0-0.379,0.001-0.571,0.005c0.022-0.155,0.037-0.312,0.037-0.474 c0.155-1.232-0.634-2.037-1.427-2.528c-0.309-0.233-0.658-0.411-1.045-0.504c-0.246-0.088-0.412-0.132-0.412-0.132 s-4.848-1.115-13.696-1.115S6.355,1.223,6.355,1.223C4.55,1.409,3.476,2.913,3.476,4.659c0,0.104,0.006,0.207,0.014,0.307 C3.462,5.023,3.431,5.075,3.403,5.131C3.247,5.128,3.091,5.128,2.938,5.128c-1.31,0-2.938,0-2.938,1.818v9.518 c0,0.991,0.483,1.441,1.134,1.646c0.019,7.157,1.543,14.055,3.386,15.437v3.672c0,1.302,1.057,2.36,2.361,2.36 s2.36-1.06,2.36-2.36v-2.287c3.295,0.52,7.666,0.791,11.528,0.791h0.002c3.678,0,6.945-0.222,9.602-0.64v2.136 c0,1.302,1.059,2.36,2.361,2.36c1.302,0,2.359-1.06,2.359-2.36v-3.331c0.25-0.102,0.489-0.206,0.703-0.314l0.077-0.04l0.041-0.074 c1.078-1.941,2.536-8.245,2.565-15.262c0.817-0.151,1.48-0.571,1.48-1.732V6.947C39.962,5.127,38.332,5.127,37.021,5.127z M6.471,2.336l0.042-0.004l0.04-0.008c0.048-0.009,4.733-0.827,13.355-0.827c8.589,0,13.4,1.076,13.424,1.083 c0.023,0.005,2.217,0.597,2.043,1.936l-0.008,0.072v0.07c0,1.068-0.705,1.945-1.604,2.038c-0.936-0.287-4.465-1.11-14.023-1.11 c-9.29,0-12.603,0.792-13.556,1.108c-0.89-0.102-1.586-0.977-1.586-2.036C4.596,3.676,5.086,2.48,6.471,2.336z M34.083,7.848v1.12 H5.878v-1.12H34.083z M0.559,16.463V6.945c0-1.135,0.762-1.259,2.379-1.259c0.075,0,0.138,0.002,0.208,0.002 c-1.386,3.243-1.97,7.554-2.009,11.829C0.748,17.344,0.559,17.03,0.559,16.463z M35.464,33.113 c-2.608,1.305-7.954,2.05-14.693,2.05h-0.002C13.389,35.162,6.4,34.256,4.858,33.1c-0.712-0.533-1.422-2.279-1.988-4.697 c5.027,0.426,22.487,1.243,34.681-6.466c0,0,0.086-0.104,0.197-0.167C37.371,27.083,36.301,31.528,35.464,33.113z M39.402,16.463 c0,0.715-0.303,1.028-0.926,1.164c-0.028-4.006-0.535-8.205-1.85-11.935c0.128-0.005,0.254-0.007,0.395-0.007 c1.619,0,2.381,0.125,2.381,1.26C39.402,6.945,39.402,16.463,39.402,16.463z" fill="#030104"></path><circle style="fill: rgb(255, 235, 59);" cx="6.177" cy="31.278" r="1.33" fill="#030104"></circle><circle style="fill: rgb(255, 235, 59);" cx="10.148" cy="31.964" r="0.907" fill="#030104"></circle><circle style="fill: rgb(255, 235, 59);" cx="33.784" cy="31.273" r="1.33" fill="#030104"></circle><circle style="fill: rgb(255, 235, 59);" cx="29.812" cy="31.959" r="0.907" fill="#030104"></circle></g></g></svg>', title: '90' },
    { id: 2, svg: '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 39.959 39.959" style="enable-background:new 0 0 39.959 39.959;" xml:space="preserve"><g><g><path style="fill: rgb(255, 235, 59);" d="M37.021,5.127c-0.186,0-0.379,0.001-0.571,0.005c0.022-0.155,0.037-0.312,0.037-0.474 c0.155-1.232-0.634-2.037-1.427-2.528c-0.309-0.233-0.658-0.411-1.045-0.504c-0.246-0.088-0.412-0.132-0.412-0.132 s-4.848-1.115-13.696-1.115S6.355,1.223,6.355,1.223C4.55,1.409,3.476,2.913,3.476,4.659c0,0.104,0.006,0.207,0.014,0.307 C3.462,5.023,3.431,5.075,3.403,5.131C3.247,5.128,3.091,5.128,2.938,5.128c-1.31,0-2.938,0-2.938,1.818v9.518 c0,0.991,0.483,1.441,1.134,1.646c0.019,7.157,1.543,14.055,3.386,15.437v3.672c0,1.302,1.057,2.36,2.361,2.36 s2.36-1.06,2.36-2.36v-2.287c3.295,0.52,7.666,0.791,11.528,0.791h0.002c3.678,0,6.945-0.222,9.602-0.64v2.136 c0,1.302,1.059,2.36,2.361,2.36c1.302,0,2.359-1.06,2.359-2.36v-3.331c0.25-0.102,0.489-0.206,0.703-0.314l0.077-0.04l0.041-0.074 c1.078-1.941,2.536-8.245,2.565-15.262c0.817-0.151,1.48-0.571,1.48-1.732V6.947C39.962,5.127,38.332,5.127,37.021,5.127z M6.471,2.336l0.042-0.004l0.04-0.008c0.048-0.009,4.733-0.827,13.355-0.827c8.589,0,13.4,1.076,13.424,1.083 c0.023,0.005,2.217,0.597,2.043,1.936l-0.008,0.072v0.07c0,1.068-0.705,1.945-1.604,2.038c-0.936-0.287-4.465-1.11-14.023-1.11 c-9.29,0-12.603,0.792-13.556,1.108c-0.89-0.102-1.586-0.977-1.586-2.036C4.596,3.676,5.086,2.48,6.471,2.336z M34.083,7.848v1.12 H5.878v-1.12H34.083z M0.559,16.463V6.945c0-1.135,0.762-1.259,2.379-1.259c0.075,0,0.138,0.002,0.208,0.002 c-1.386,3.243-1.97,7.554-2.009,11.829C0.748,17.344,0.559,17.03,0.559,16.463z M35.464,33.113 c-2.608,1.305-7.954,2.05-14.693,2.05h-0.002C13.389,35.162,6.4,34.256,4.858,33.1c-0.712-0.533-1.422-2.279-1.988-4.697 c5.027,0.426,22.487,1.243,34.681-6.466c0,0,0.086-0.104,0.197-0.167C37.371,27.083,36.301,31.528,35.464,33.113z M39.402,16.463 c0,0.715-0.303,1.028-0.926,1.164c-0.028-4.006-0.535-8.205-1.85-11.935c0.128-0.005,0.254-0.007,0.395-0.007 c1.619,0,2.381,0.125,2.381,1.26C39.402,6.945,39.402,16.463,39.402,16.463z" fill="#030104"></path><circle style="fill: rgb(255, 235, 59);" cx="6.177" cy="31.278" r="1.33" fill="#030104"></circle><circle style="fill: rgb(255, 235, 59);" cx="10.148" cy="31.964" r="0.907" fill="#030104"></circle><circle style="fill: rgb(255, 235, 59);" cx="33.784" cy="31.273" r="1.33" fill="#030104"></circle><circle style="fill: rgb(255, 235, 59);" cx="29.812" cy="31.959" r="0.907" fill="#030104"></circle></g></g></svg>', title: '91' },
    { id: 3, svg: '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 39.959 39.959" style="enable-background:new 0 0 39.959 39.959;" xml:space="preserve"><g><g><path style="fill: rgb(255, 235, 59);" d="M37.021,5.127c-0.186,0-0.379,0.001-0.571,0.005c0.022-0.155,0.037-0.312,0.037-0.474 c0.155-1.232-0.634-2.037-1.427-2.528c-0.309-0.233-0.658-0.411-1.045-0.504c-0.246-0.088-0.412-0.132-0.412-0.132 s-4.848-1.115-13.696-1.115S6.355,1.223,6.355,1.223C4.55,1.409,3.476,2.913,3.476,4.659c0,0.104,0.006,0.207,0.014,0.307 C3.462,5.023,3.431,5.075,3.403,5.131C3.247,5.128,3.091,5.128,2.938,5.128c-1.31,0-2.938,0-2.938,1.818v9.518 c0,0.991,0.483,1.441,1.134,1.646c0.019,7.157,1.543,14.055,3.386,15.437v3.672c0,1.302,1.057,2.36,2.361,2.36 s2.36-1.06,2.36-2.36v-2.287c3.295,0.52,7.666,0.791,11.528,0.791h0.002c3.678,0,6.945-0.222,9.602-0.64v2.136 c0,1.302,1.059,2.36,2.361,2.36c1.302,0,2.359-1.06,2.359-2.36v-3.331c0.25-0.102,0.489-0.206,0.703-0.314l0.077-0.04l0.041-0.074 c1.078-1.941,2.536-8.245,2.565-15.262c0.817-0.151,1.48-0.571,1.48-1.732V6.947C39.962,5.127,38.332,5.127,37.021,5.127z M6.471,2.336l0.042-0.004l0.04-0.008c0.048-0.009,4.733-0.827,13.355-0.827c8.589,0,13.4,1.076,13.424,1.083 c0.023,0.005,2.217,0.597,2.043,1.936l-0.008,0.072v0.07c0,1.068-0.705,1.945-1.604,2.038c-0.936-0.287-4.465-1.11-14.023-1.11 c-9.29,0-12.603,0.792-13.556,1.108c-0.89-0.102-1.586-0.977-1.586-2.036C4.596,3.676,5.086,2.48,6.471,2.336z M34.083,7.848v1.12 H5.878v-1.12H34.083z M0.559,16.463V6.945c0-1.135,0.762-1.259,2.379-1.259c0.075,0,0.138,0.002,0.208,0.002 c-1.386,3.243-1.97,7.554-2.009,11.829C0.748,17.344,0.559,17.03,0.559,16.463z M35.464,33.113 c-2.608,1.305-7.954,2.05-14.693,2.05h-0.002C13.389,35.162,6.4,34.256,4.858,33.1c-0.712-0.533-1.422-2.279-1.988-4.697 c5.027,0.426,22.487,1.243,34.681-6.466c0,0,0.086-0.104,0.197-0.167C37.371,27.083,36.301,31.528,35.464,33.113z M39.402,16.463 c0,0.715-0.303,1.028-0.926,1.164c-0.028-4.006-0.535-8.205-1.85-11.935c0.128-0.005,0.254-0.007,0.395-0.007 c1.619,0,2.381,0.125,2.381,1.26C39.402,6.945,39.402,16.463,39.402,16.463z" fill="#030104"></path><circle style="fill: rgb(255, 235, 59);" cx="6.177" cy="31.278" r="1.33" fill="#030104"></circle><circle style="fill: rgb(255, 235, 59);" cx="10.148" cy="31.964" r="0.907" fill="#030104"></circle><circle style="fill: rgb(255, 235, 59);" cx="33.784" cy="31.273" r="1.33" fill="#030104"></circle><circle style="fill: rgb(255, 235, 59);" cx="29.812" cy="31.959" r="0.907" fill="#030104"></circle></g></g></svg>', title: '93' },
    { id: 4, svg: '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 39.959 39.959" style="enable-background:new 0 0 39.959 39.959;" xml:space="preserve"><g><g><path style="fill: rgb(255, 235, 59);" d="M37.021,5.127c-0.186,0-0.379,0.001-0.571,0.005c0.022-0.155,0.037-0.312,0.037-0.474 c0.155-1.232-0.634-2.037-1.427-2.528c-0.309-0.233-0.658-0.411-1.045-0.504c-0.246-0.088-0.412-0.132-0.412-0.132 s-4.848-1.115-13.696-1.115S6.355,1.223,6.355,1.223C4.55,1.409,3.476,2.913,3.476,4.659c0,0.104,0.006,0.207,0.014,0.307 C3.462,5.023,3.431,5.075,3.403,5.131C3.247,5.128,3.091,5.128,2.938,5.128c-1.31,0-2.938,0-2.938,1.818v9.518 c0,0.991,0.483,1.441,1.134,1.646c0.019,7.157,1.543,14.055,3.386,15.437v3.672c0,1.302,1.057,2.36,2.361,2.36 s2.36-1.06,2.36-2.36v-2.287c3.295,0.52,7.666,0.791,11.528,0.791h0.002c3.678,0,6.945-0.222,9.602-0.64v2.136 c0,1.302,1.059,2.36,2.361,2.36c1.302,0,2.359-1.06,2.359-2.36v-3.331c0.25-0.102,0.489-0.206,0.703-0.314l0.077-0.04l0.041-0.074 c1.078-1.941,2.536-8.245,2.565-15.262c0.817-0.151,1.48-0.571,1.48-1.732V6.947C39.962,5.127,38.332,5.127,37.021,5.127z M6.471,2.336l0.042-0.004l0.04-0.008c0.048-0.009,4.733-0.827,13.355-0.827c8.589,0,13.4,1.076,13.424,1.083 c0.023,0.005,2.217,0.597,2.043,1.936l-0.008,0.072v0.07c0,1.068-0.705,1.945-1.604,2.038c-0.936-0.287-4.465-1.11-14.023-1.11 c-9.29,0-12.603,0.792-13.556,1.108c-0.89-0.102-1.586-0.977-1.586-2.036C4.596,3.676,5.086,2.48,6.471,2.336z M34.083,7.848v1.12 H5.878v-1.12H34.083z M0.559,16.463V6.945c0-1.135,0.762-1.259,2.379-1.259c0.075,0,0.138,0.002,0.208,0.002 c-1.386,3.243-1.97,7.554-2.009,11.829C0.748,17.344,0.559,17.03,0.559,16.463z M35.464,33.113 c-2.608,1.305-7.954,2.05-14.693,2.05h-0.002C13.389,35.162,6.4,34.256,4.858,33.1c-0.712-0.533-1.422-2.279-1.988-4.697 c5.027,0.426,22.487,1.243,34.681-6.466c0,0,0.086-0.104,0.197-0.167C37.371,27.083,36.301,31.528,35.464,33.113z M39.402,16.463 c0,0.715-0.303,1.028-0.926,1.164c-0.028-4.006-0.535-8.205-1.85-11.935c0.128-0.005,0.254-0.007,0.395-0.007 c1.619,0,2.381,0.125,2.381,1.26C39.402,6.945,39.402,16.463,39.402,16.463z" fill="#030104"></path><circle style="fill: rgb(255, 235, 59);" cx="6.177" cy="31.278" r="1.33" fill="#030104"></circle><circle style="fill: rgb(255, 235, 59);" cx="10.148" cy="31.964" r="0.907" fill="#030104"></circle><circle style="fill: rgb(255, 235, 59);" cx="33.784" cy="31.273" r="1.33" fill="#030104"></circle><circle style="fill: rgb(255, 235, 59);" cx="29.812" cy="31.959" r="0.907" fill="#030104"></circle></g></g></svg>', title: '94' },
    { id: 5, svg: '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 39.959 39.959" style="enable-background:new 0 0 39.959 39.959;" xml:space="preserve"><g><g><path style="fill: rgb(255, 235, 59);" d="M37.021,5.127c-0.186,0-0.379,0.001-0.571,0.005c0.022-0.155,0.037-0.312,0.037-0.474 c0.155-1.232-0.634-2.037-1.427-2.528c-0.309-0.233-0.658-0.411-1.045-0.504c-0.246-0.088-0.412-0.132-0.412-0.132 s-4.848-1.115-13.696-1.115S6.355,1.223,6.355,1.223C4.55,1.409,3.476,2.913,3.476,4.659c0,0.104,0.006,0.207,0.014,0.307 C3.462,5.023,3.431,5.075,3.403,5.131C3.247,5.128,3.091,5.128,2.938,5.128c-1.31,0-2.938,0-2.938,1.818v9.518 c0,0.991,0.483,1.441,1.134,1.646c0.019,7.157,1.543,14.055,3.386,15.437v3.672c0,1.302,1.057,2.36,2.361,2.36 s2.36-1.06,2.36-2.36v-2.287c3.295,0.52,7.666,0.791,11.528,0.791h0.002c3.678,0,6.945-0.222,9.602-0.64v2.136 c0,1.302,1.059,2.36,2.361,2.36c1.302,0,2.359-1.06,2.359-2.36v-3.331c0.25-0.102,0.489-0.206,0.703-0.314l0.077-0.04l0.041-0.074 c1.078-1.941,2.536-8.245,2.565-15.262c0.817-0.151,1.48-0.571,1.48-1.732V6.947C39.962,5.127,38.332,5.127,37.021,5.127z M6.471,2.336l0.042-0.004l0.04-0.008c0.048-0.009,4.733-0.827,13.355-0.827c8.589,0,13.4,1.076,13.424,1.083 c0.023,0.005,2.217,0.597,2.043,1.936l-0.008,0.072v0.07c0,1.068-0.705,1.945-1.604,2.038c-0.936-0.287-4.465-1.11-14.023-1.11 c-9.29,0-12.603,0.792-13.556,1.108c-0.89-0.102-1.586-0.977-1.586-2.036C4.596,3.676,5.086,2.48,6.471,2.336z M34.083,7.848v1.12 H5.878v-1.12H34.083z M0.559,16.463V6.945c0-1.135,0.762-1.259,2.379-1.259c0.075,0,0.138,0.002,0.208,0.002 c-1.386,3.243-1.97,7.554-2.009,11.829C0.748,17.344,0.559,17.03,0.559,16.463z M35.464,33.113 c-2.608,1.305-7.954,2.05-14.693,2.05h-0.002C13.389,35.162,6.4,34.256,4.858,33.1c-0.712-0.533-1.422-2.279-1.988-4.697 c5.027,0.426,22.487,1.243,34.681-6.466c0,0,0.086-0.104,0.197-0.167C37.371,27.083,36.301,31.528,35.464,33.113z M39.402,16.463 c0,0.715-0.303,1.028-0.926,1.164c-0.028-4.006-0.535-8.205-1.85-11.935c0.128-0.005,0.254-0.007,0.395-0.007 c1.619,0,2.381,0.125,2.381,1.26C39.402,6.945,39.402,16.463,39.402,16.463z" fill="#030104"></path><circle style="fill: rgb(255, 235, 59);" cx="6.177" cy="31.278" r="1.33" fill="#030104"></circle><circle style="fill: rgb(255, 235, 59);" cx="10.148" cy="31.964" r="0.907" fill="#030104"></circle><circle style="fill: rgb(255, 235, 59);" cx="33.784" cy="31.273" r="1.33" fill="#030104"></circle><circle style="fill: rgb(255, 235, 59);" cx="29.812" cy="31.959" r="0.907" fill="#030104"></circle></g></g></svg>', title: '95' },
    { id: 6, svg: '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 39.959 39.959" style="enable-background:new 0 0 39.959 39.959;" xml:space="preserve"><g><g><path style="fill: rgb(255, 235, 59);" d="M37.021,5.127c-0.186,0-0.379,0.001-0.571,0.005c0.022-0.155,0.037-0.312,0.037-0.474 c0.155-1.232-0.634-2.037-1.427-2.528c-0.309-0.233-0.658-0.411-1.045-0.504c-0.246-0.088-0.412-0.132-0.412-0.132 s-4.848-1.115-13.696-1.115S6.355,1.223,6.355,1.223C4.55,1.409,3.476,2.913,3.476,4.659c0,0.104,0.006,0.207,0.014,0.307 C3.462,5.023,3.431,5.075,3.403,5.131C3.247,5.128,3.091,5.128,2.938,5.128c-1.31,0-2.938,0-2.938,1.818v9.518 c0,0.991,0.483,1.441,1.134,1.646c0.019,7.157,1.543,14.055,3.386,15.437v3.672c0,1.302,1.057,2.36,2.361,2.36 s2.36-1.06,2.36-2.36v-2.287c3.295,0.52,7.666,0.791,11.528,0.791h0.002c3.678,0,6.945-0.222,9.602-0.64v2.136 c0,1.302,1.059,2.36,2.361,2.36c1.302,0,2.359-1.06,2.359-2.36v-3.331c0.25-0.102,0.489-0.206,0.703-0.314l0.077-0.04l0.041-0.074 c1.078-1.941,2.536-8.245,2.565-15.262c0.817-0.151,1.48-0.571,1.48-1.732V6.947C39.962,5.127,38.332,5.127,37.021,5.127z M6.471,2.336l0.042-0.004l0.04-0.008c0.048-0.009,4.733-0.827,13.355-0.827c8.589,0,13.4,1.076,13.424,1.083 c0.023,0.005,2.217,0.597,2.043,1.936l-0.008,0.072v0.07c0,1.068-0.705,1.945-1.604,2.038c-0.936-0.287-4.465-1.11-14.023-1.11 c-9.29,0-12.603,0.792-13.556,1.108c-0.89-0.102-1.586-0.977-1.586-2.036C4.596,3.676,5.086,2.48,6.471,2.336z M34.083,7.848v1.12 H5.878v-1.12H34.083z M0.559,16.463V6.945c0-1.135,0.762-1.259,2.379-1.259c0.075,0,0.138,0.002,0.208,0.002 c-1.386,3.243-1.97,7.554-2.009,11.829C0.748,17.344,0.559,17.03,0.559,16.463z M35.464,33.113 c-2.608,1.305-7.954,2.05-14.693,2.05h-0.002C13.389,35.162,6.4,34.256,4.858,33.1c-0.712-0.533-1.422-2.279-1.988-4.697 c5.027,0.426,22.487,1.243,34.681-6.466c0,0,0.086-0.104,0.197-0.167C37.371,27.083,36.301,31.528,35.464,33.113z M39.402,16.463 c0,0.715-0.303,1.028-0.926,1.164c-0.028-4.006-0.535-8.205-1.85-11.935c0.128-0.005,0.254-0.007,0.395-0.007 c1.619,0,2.381,0.125,2.381,1.26C39.402,6.945,39.402,16.463,39.402,16.463z" fill="#030104"></path><circle style="fill: rgb(255, 235, 59);" cx="6.177" cy="31.278" r="1.33" fill="#030104"></circle><circle style="fill: rgb(255, 235, 59);" cx="10.148" cy="31.964" r="0.907" fill="#030104"></circle><circle style="fill: rgb(255, 235, 59);" cx="33.784" cy="31.273" r="1.33" fill="#030104"></circle><circle style="fill: rgb(255, 235, 59);" cx="29.812" cy="31.959" r="0.907" fill="#030104"></circle></g></g></svg>', title: '112' }
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
                        <div class="portfolio-svg-container">${ruta.svg}</div>
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




