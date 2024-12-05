document.addEventListener("DOMContentLoaded", function () {
  // Datos de los servicios con imágenes
  const serviciosData = [
    { icono: "assets/img/servicios/controladores.jpg", titulo: "Controladores", descripcion: "Los controladores de Copatra son esenciales para garantizar el funcionamiento eficiente y seguro de nuestras rutas." },
    { icono: "assets/img/servicios/IMG_4607.webp", titulo: "Contratación", descripcion: "En Copatra, creemos que el éxito de nuestro servicio comienza con un equipo comprometido y capacitado." },
    { icono: "assets/img/servicios/PHOTO-2024-05-07-12-04-20.JPG", titulo: "Gerente", descripcion: "El gerente de Copatra lidera nuestro equipo con una visión clara y estratégica, enfocado en ofrecer un servicio de calidad." },
    { icono: "assets/img/servicios/mantenimiento.jpg", titulo: "Mantenimiento", descripcion: "Realizamos un mantenimiento preventivo y correctivo continuo en nuestras unidades para garantizar la seguridad de los pasajeros." },
    { icono: "assets/img/servicios/IMG_4555 (1).jpg", titulo: "Atención al Cliente", descripcion: "Contamos con un equipo de atención al cliente dispuesto a resolver cualquier duda o inconveniente de nuestros pasajeros." },
    { icono: "assets/img/servicios/IMG_4557.jpg", titulo: "Monitoreo de Rutas", descripcion: "Implementamos tecnología de monitoreo de rutas en tiempo real, optimizando los tiempos de traslado y mejorando la experiencia del usuario." }
  ];

  // Contenedor de servicios
  const serviciosContainer = document.querySelector("#servicios-container");
  serviciosData.forEach(item => {
    const servicioDiv = document.createElement("div");
    servicioDiv.classList.add("servicio");

    servicioDiv.innerHTML = `
      <div class="icono"><img src="${item.icono}" alt="${item.titulo}"></div>
      <h3>${item.titulo}</h3>
      <p>${item.descripcion}</p>
    `;

    serviciosContainer.appendChild(servicioDiv);
  });

  // Datos de Comentarios con imágenes
  const testimoniosData = [
    {
      nombre: "Camila Restrepo",
      fecha: "Hace 3 meses",
      estrellas: "★★★★☆",
      comentario: "La plataforma me ha ayudado mucho, aunque algunos aspectos pueden mejorar. Aún así, es muy recomendable.",
      imagen: "assets/img/testimonios/foto-de-perfil-adecuada.jpg"
    },
    {
      nombre: "MFKazuya",
      fecha: "Hace 2 meses",
      estrellas: "★★★☆☆",
      comentario: "El servicio es bueno, pero hay ciertos detalles que podrían optimizarse, especialmente la interfaz de usuario.",
      imagen: "assets/img/testimonios/IMG_4568.jpg"
    },
    {
      nombre: "Jonh Carmona",
      fecha: "Hace 1 mes",
      estrellas: "★★★★★",
      comentario: "Una experiencia increíble, todo se manejó con mucha eficiencia y el proceso fue transparente desde el principio.",
      imagen: "assets/img/testimonios/5fa43c9755611.jpeg"
    },
    {
      nombre: "Mariana Montoya",
      fecha: "Hace 1 mes",
      estrellas: "★★★★☆",
      comentario: "El servicio fue excelente, aunque la atención al cliente podría ser más rápida en algunos casos.",
      imagen: "assets/img/testimonios/dee36934bdb15a82e5a825cd74aacddb.jpg"
    },
    {
      nombre: "Camila Bentacurt",
      fecha: "Hace 1 mes",
      estrellas: "★★★★☆",
      comentario: "En general, quedé satisfecha con la experiencia. Algunas mejoras en la comunicación serían útiles.",
      imagen: "assets/img/testimonios/🧺.jpeg"
    }
  ];
  
  // Contenedor de testimonios
  const testimoniosContainer = document.querySelector("#testimonios-container");
  testimoniosData.forEach(testimonio => {
    const testimonioDiv = document.createElement("div");
    testimonioDiv.classList.add("testimonio");

    testimonioDiv.innerHTML = `
      <img src="assets/img/testimonios/Google__G__logo.svg.webp" alt="Google Logo" class="icono-google">
      <div class="info">
        <img src="${testimonio.imagen}" alt="Imagen de usuario" class="imagen">
        <div class="texto">
          <p class="nombre">${testimonio.nombre}</p>
          <p class="fecha">${testimonio.fecha}</p>
        </div>
      </div>
      <div class="estrellas">${testimonio.estrellas}</div>
      <p class="comentario">${testimonio.comentario}</p>
    `;

    testimoniosContainer.appendChild(testimonioDiv);
  });

  // Carrusel de testimonios
  const carrusel = document.querySelector('.carrusel');
  const flechaIzquierda = document.querySelector('.flecha.izquierda');
  const flechaDerecha = document.querySelector('.flecha.derecha');
  const testimonios = document.querySelectorAll('.testimonio');
  const testimoniosVisibles = 3; // Número de testimonios visibles
  let indiceActual = 0;

  // Calcula el ancho total de un testimonio (incluido el gap)
  const anchoTestimonio = testimonios[0].offsetWidth + parseInt(getComputedStyle(carrusel).gap);

  // Función para mover el carrusel
  function moverCarrusel() {
    const desplazamiento = indiceActual * anchoTestimonio;
    carrusel.style.transform = `translateX(-${desplazamiento}px)`;
  }

  // Función para cambiar el índice del carrusel
  function cambiarIndice(incremento) {
    indiceActual = (indiceActual + incremento + testimonios.length) % testimonios.length;
    moverCarrusel();
  }

  // Flechas para navegar entre los testimonios
  flechaDerecha.addEventListener('click', () => cambiarIndice(1));
  flechaIzquierda.addEventListener('click', () => cambiarIndice(-1));

  // Carrusel automático (opcional)
  setInterval(() => cambiarIndice(1), 3000); // Cambia cada 3 segundos
});
