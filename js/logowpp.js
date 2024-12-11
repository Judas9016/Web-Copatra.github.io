// Función para crear y mostrar el botón de WhatsApp
(function() {
    // Función para crear el botón de WhatsApp
    function createWhatsappButton() {
        // Crear el contenedor del botón
        const button = document.createElement('a');
        const message = "¡Buen día!";  // El mensaje predefinido para enviar en WhatsApp
        button.href = `https://wa.me/573042063568?text=${encodeURIComponent(message)}`;  // Cambia este número por tu propio número y agrega el mensaje
        button.target = "_blank"; // Abrir el enlace en una nueva ventana
        button.id = "whatsapp-button"; // Asignamos un ID al botón

        // Crear la imagen (icono de WhatsApp)
        const icon = createIcon();
        
        // Crear el texto del botón
        const text = createText();

        // Agregar la imagen y el texto al botón
        button.appendChild(icon);
        button.appendChild(text);

        return button;
    }

    // Función para crear el icono de WhatsApp
    function createIcon() {
        const icon = document.createElement('img');
        icon.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png";  // URL del icono de WhatsApp
        icon.alt = "WhatsApp"; // Texto alternativo
        return icon;
    }

    // Función para crear el texto del botón
    function createText() {
        const text = document.createElement('span');
        text.innerText = "¡Chatea con nosotros!";  // Texto actualizado con los signos de exclamación
        return text;
    }

    // Función para mostrar el botón con animación después de cargar la página
    function showButtonOnLoad(button) {
        window.onload = function() {
            button.classList.add('show'); // Asegúrate de tener esta clase en tu CSS para la animación
        };
    }

    // Crear el botón de WhatsApp
    const whatsappButton = createWhatsappButton();

    // Agregar el botón al body de la página
    document.body.appendChild(whatsappButton);

    // Mostrar el botón cuando la página haya cargado
    showButtonOnLoad(whatsappButton);
})();
