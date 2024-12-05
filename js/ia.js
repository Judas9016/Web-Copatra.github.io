// JavaScript
const chatbox = document.getElementById('chatbox');
const questionArea = document.querySelector('.question-area');
const chatContainer = document.getElementById('chat-container');
const openChatBtn = document.getElementById('open-chat-btn');
const closeChatBtn = document.getElementById('close-chat-btn');

// Lista de preguntas y respuestas
const qaList = [
    {
        question: "¿Qué tipos de transporte manejan: carga, pasajeros, turismo o algo más?",
        answer: "Manejamos pasajeros."
    },
    {
        question: "¿Tienen servicio de transporte internacional?",
        answer: "Actualmente solo ofrecemos transporte nacional."
    },
    {
        question: "¿Cuáles son los horarios de atención?",
        answer: "Nuestros horarios son de lunes a viernes de 8:00 AM a 6:00 PM."
    },
    {
        question: "¿Ofrecen servicios personalizados para turismo?",
        answer: "Sí, podemos personalizar rutas y horarios según tus necesidades."
    }
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
