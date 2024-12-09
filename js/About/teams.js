// Datos del equipo
const teamMembers = [
    {
        name: "Gerencia General",
        role: "",
        image: "assets/img/team/IMG_4795.jpg",
        skills: ["Liderazgo", "Planificación estratégica", "Comunicación efectiva", "Resolución de problemas"],
        description: "Juliana coordina las operaciones diarias con eficiencia y asegura la fluidez de los procesos administrativos.",
    },
    {
        name: "Secretaria",
        role: "",
        image: "assets/img/team/IMG_4849.jpg",
        skills: ["Gestión administrativa", "Habilidades de comunicación", "Multitarea", "Discreción y confidencialidad"],
        description: "Alexandra coordina las operaciones diarias con eficiencia y asegura la fluidez de los procesos administrativos.",
    },
    {
        name: "Director Administrativo",
        role: "",
        image: "assets/img/team/IMG_4798.jpg",
        skills: ["Gestión operativa", "Análisis y solución de problemas", "Liderazgo y gestión de equipos", "Control presupuestario", "Conocimiento normativo"],
        description: "Juan Diego lidera con visión estratégica para garantizar el éxito administrativo.",
    },
    {
        name: "Auxiliar Contable",
        role: "",
        image: "assets/img/team/IMG_4787.webp",
        skills: ["Registro y control contable", "Análisis de datos financieros", "Conocimiento normativo", "Organización y eficiencia"],
        description: "Daniela lidera los procesos administrativos con gran destreza y enfoque en resultados.",
    },
    {
        name: "Auxiliar Logística",
        role: "",
        image: "assets/img/team/IMG_4791.webp",
        skills: ["Gestión de inventarios", "Coordinación de transporte", "Manejo de herramientas tecnológicas", "Resolución de problemas", "Trabajo en equipo"],
        description: "Olga garantiza que las operaciones logísticas fluyan sin contratiempos para satisfacer las necesidades del equipo.",
    },
    {
        name: "Lider Logística",
        role: "",
        image: "assets/img/team/IMG_4790.webp",
        skills: ["Planificación estratégica", "Análisis y optimización de procesos", "Manejo de tecnología", "Gestión de inventarios"],
        description: "jhon garantiza que las operaciones logísticas fluyan sin contratiempos para satisfacer las necesidades del equipo.",
    },
    {
        name: " Seguridad y Salud en el Trabajo",
        role: "",
        image: "assets/img/team/IMG_4788.webp",
        skills: ["Gestión de riesgos laborales", "Conocimiento normativo", "Capacitación y concienciación", "Investigación de incidentes", "Desarrollo de sistemas SST"],
        description: "Jessica protege la integridad de los empleados mediante programas efectivos de seguridad laboral.",
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
teamFooter.textContent = "¡Estamos comprometidos en ofrecer lo mejor a nuestros clientes!";
