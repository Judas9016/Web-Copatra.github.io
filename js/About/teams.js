// Datos del equipo
const teamMembers = [
    {
        name: "Gerencia General",
        role: "",
        image: "assets/img/team/IMG_4795.jpg",
        skills: ["Organización", "Comunicación efectiva", "Manejo de agendas"],
        description: "Alexandra coordina las operaciones diarias con eficiencia y asegura la fluidez de los procesos administrativos.",
    },
    {
        name: "Secretaria",
        role: "",
        image: "assets/img/team/",
        skills: ["Organización", "Comunicación efectiva", "Manejo de agendas"],
        description: "Alexandra coordina las operaciones diarias con eficiencia y asegura la fluidez de los procesos administrativos.",
    },
    {
        name: "Director Administrativo",
        role: "",
        image: "assets/img/team/",
        skills: ["Gestión empresarial", "Liderazgo", "Estrategia corporativa"],
        description: "Juan Diego lidera con visión estratégica para garantizar el éxito administrativo.",
    },
    {
        name: "Daniela Acosta Gómez",
        role: "",
        image: "assets/img/team/IMG_4787.webp",
        skills: ["Gestión administrativa", "Análisis financiero", "Trabajo en equipo"],
        description: "Daniela lidera los procesos administrativos con gran destreza y enfoque en resultados.",
    },
    {
        name: "Tesorería",
        role: "",
        image: "assets/img/team/",
        skills: ["Contabilidad", "Gestión presupuestaria", "Organización"],
        description: "Yuli se asegura de que las finanzas de la empresa estén en orden y los recursos se utilicen eficientemente.",
    },
    {
        name: "Administrativa",
        role: "",
        image: "assets/img/team/",
        skills: ["Planificación estratégica", "Comunicación interna", "Solución de problemas"],
        description: "Leidy desempeña un rol clave en la planificación y supervisión de las actividades administrativas.",
    },
    {
        name: "Logística",
        role: "",
        image: "assets/img/team/IMG_4791.webp",
        skills: ["Coordinación logística", "Optimización de procesos", "Gestión de inventarios"],
        description: "Olga garantiza que las operaciones logísticas fluyan sin contratiempos para satisfacer las necesidades del equipo.",
    },
    {
        name: "Logística",
        role: "",
        image: "assets/img/team/IMG_4790.webp",
        skills: ["Coordinación logística", "Optimización de procesos", "Gestión de inventarios"],
        description: "Olga garantiza que las operaciones logísticas fluyan sin contratiempos para satisfacer las necesidades del equipo.",
    },
    {
        name: " Seguridad y Salud en el Trabajo",
        role: "",
        image: "assets/img/team/IMG_4788.webp",
        skills: ["Prevención de riesgos", "Capacitación en seguridad", "Cumplimiento normativo"],
        description: "Jesica protege la integridad de los empleados mediante programas efectivos de seguridad laboral.",
    },
];

// Selecciona los contenedores
const teamCarousel = document.getElementById("teamCarousel");
const teamDescription = document.getElementById("teamDescription");
const teamFooter = document.getElementById("teamFooter");

// Agrega contenido al carrusel
teamMembers.forEach((member, index) => {
    const isActive = index === 0 ? "active" : ""; // La primera diapositiva debe ser activa
    const carouselItem = document.createElement("div");
    carouselItem.className = `carousel-item ${isActive}`;
    carouselItem.innerHTML = `
        <div class="text-center">
            <img src="${member.image}" alt="${member.name}" class="rounded-circle">
            <h5>${member.name}</h5>
            <p class="text-muted">${member.role}</p>
            <ul class="list-unstyled">
                ${member.skills.map(skill => `<li>${skill}</li>`).join("")}
            </ul>
            <p>${member.description}</p>
        </div>
    `;
    teamCarousel.appendChild(carouselItem);
});

// Configurar el encabezado y el pie de página
teamDescription.textContent = "Nuestro equipo está compuesto por profesionales altamente capacitados para cumplir con cada objetivo.";
teamFooter.textContent = "¡Estamos comprometidos con ofrecer lo mejor a nuestros clientes!";
