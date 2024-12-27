// JavaScript
const chatbox = document.getElementById('chatbox');
const questionArea = document.querySelector('.question-area');
const chatContainer = document.getElementById('chat-container');
const openChatBtn = document.getElementById('open-chat-btn');
const closeChatBtn = document.getElementById('close-chat-btn');

// Lista de preguntas y respuestas
const qaList = [
    {
        question: "¿Qué debo hacer si tengo alguna queja o sugerencia sobre el servicio?",
        answer: "Si deseas presentar una queja o sugerencia sobre nuestro servicio, puedes hacerlo a través de los canales de atención de la cooperativa. Los vehículos cuentan con un código QR visible en cada unidad, que te redirigirá directamente a nuestra plataforma para radicar tu queja o sugerencia de manera fácil y rápida. Además, puedes acceder al siguiente enlace para completar el formulario correspondiente: Formulario de Quejas y Sugerencias. Nos comprometemos a revisar y responder a tu solicitud a la mayor brevedad posible."
    },
    {
        question: "¿Cómo se actualiza la tarifa del pasaje y cuándo entra en vigencia?",
        answer: "La tarifa del pasaje en Medellín es establecida anualmente por el gobierno local, específicamente por la Secretaría de Movilidad de la ciudad. Esta tarifa puede ajustarse cada año, generalmente en el mes de enero, de acuerdo con los lineamientos y decisiones del gobierno municipal. Los cambios en la tarifa son informados con antelación a través de medios oficiales."
    },
    {
        question: "¿Cuáles son los horarios del servicio del transporte público?",
        answer: "Los horarios del transporte público en la cooperativa antioqueña de transportadores son los siguientes.\n\n" +
                "SUCRE:\n" +
                "90 pinal: 3:45 a.m. a 21:30 p.m.\n" +
                "91 llanadas: 3:57 a.m. a 22:00 p.m.\n\n" +
                "CAICEDO:\n" +
                "93- VILLALILIAM: 3:57 a.m. a 21:30 p.m.\n" +
                "94- SANTA LUCÍA: 3:50 a.m. a 22:05 p.m.\n" +
                "95- VILLATINA: 3:57 a.m. a 21:30 p.m.\n\n" +
                "112- PALMAS: 5:40 a.m. a 21:04 p.m."
    },
    
    
    
    {
        question: "¿Cuál es el horario de atención en la oficina de atención al cliente?",
        answer: "Nuestro horario de atención en la oficina es de lunes a viernes, de 7:00 a.m. a 1:00 p.m. y de 2:00 p.m. a 5:00 p.m. Durante este tiempo, nuestro equipo estará disponible para resolver tus dudas, ofrecerte información sobre nuestras rutas o ayudarte con cualquier trámite que necesites realizar."
    },
    
    
    {
        question: "¿Cuáles son los horarios de atención?",
        answer: "Nuestros horarios son de lunes a viernes de 8:00 AM a 6:00 PM."
    },
    
    {
        question: "¿Qué rutas y recorridos ofrece la empresa?",
        answer: `
        SUCRE
        090- PINAL
        TERMINAL EL PINAL - ENGRASADERO - CONTROL EL ENANO - BIBLIOTECA LA LADERA - SECTOR ITM - BAJANDO PARA EL PARQUE DE BOSTON - AVENIDA ORIENTAL - SAN ANTONIO Y ALPUJARRA. (MINORISTA)

        091- LLANADAS
        TERMINAL – LLANADAS - DROGUERÍA LAS COLINAS - FERRETERÍA LA 28 - COLINAS DE ENCISO - Escuela Normal Superior de Medellín - CANCHA LOS MANGOS - PARROQUIA FEDERICO OZANAM - CONTROL CAI - BAJANDO PARA EL PARQUE DE BOSTON - AVENIDA ORIENTAL - SAN ANTONIO Y ALPUJARRA (MINORISTA)

       CAICEDO
        093- CAICEDO – LA TOMA- MINORISTA
        Terminal 93 – salida - lavadero 093 - Tres Esquinas - Villatina - Escuela Miguel de Aguinaga – estrechura - Perlas control - Caracas bajando - Pablo Tobón Uribe - Playa bajando - clínica Soma - San Antonio bajando - Alpujarra bajando.

      094- SANTA LUCÍA
        Terminal 094 - Tres Esquinas – Villatina - Escuela Miguel de Aguinaga - estrechura - Perlas control - Caracas bajando - Pablo Tobón Uribe - Playa bajando - clínica Soma - San Antonio bajando – Alpujarra, MINORISTA.

        095- VILLATINA, PERLAS, MINORISTA
        Terminal 95 salida - Parqueadero salida 95 - Villatina - Escuela Miguel de Aguinaga - Perlas control - Caracas bajando - Pablo Tobón Uribe - Playa bajando - clínica Soma - San Antonio bajando – Alpujarra, Minorista.

        LAS PALMAS
        112- PALMAS
        `
    },
    {
        question: "¿Cómo puedo obtener información sobre las paradas y frecuencias de los autobuses?",
        answer: "Acercándose a cualquiera de nuestras terminales y puntos de control. Los vehículos cuentan con un rótulo donde se detallan los puntos estratégicos de las paradas de destino. Igualmente, puedes visitar nuestros puntos de atención digitales y físicos para solicitar información adicional."
    },
];

// Función para agregar mensajes al chat
function addMessage(message, className) {
    const messageElement = document.createElement('div');
    messageElement.className = className;
    messageElement.textContent = message;
    chatbox.appendChild(messageElement);
    chatbox.scrollTop = chatbox.scrollHeight; // Desplazar hacia abajo automáticamente
}

// Generar los botones para las preguntas
qaList.forEach((item) => {
    const button = document.createElement('button');
    button.className = 'question-btn';
    button.textContent = item.question;

    // Al hacer clic en una pregunta, mostrarla y luego la respuesta
    button.addEventListener('click', () => {
        addMessage(item.question, 'user-message'); // Mostrar la pregunta
        setTimeout(() => addMessage(item.answer, 'bot-message'), 700); // Responder con un retraso
    });

    // Agregar el botón a la sección de preguntas
    questionArea.appendChild(button);
});

// Función para abrir y cerrar el chatbot
openChatBtn.addEventListener('click', () => {
    chatContainer.style.display = "flex"; // Abrir el chat
    openChatBtn.style.display = "none";  // Ocultar el botón de abrir
    document.body.classList.add('chat-open'); // Deshabilitar desplazamiento horizontal cuando el chat está abierto
});

// Función para cerrar el chatbot y borrar el historial de mensajes
closeChatBtn.addEventListener('click', () => {
    chatContainer.style.display = "none"; // Cerrar el chat
    openChatBtn.style.display = "flex";   // Mostrar el botón de abrir
    chatbox.innerHTML = '';               // Borrar el historial de mensajes
    document.body.classList.remove('chat-open'); // Restaurar desplazamiento cuando el chat está cerrado
});
