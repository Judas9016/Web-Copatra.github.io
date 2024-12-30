document.addEventListener("DOMContentLoaded", function () {
    const navItems = [
        // Enlace para "Rutas", ajustado para comportarse de manera diferente en home y en otras páginas
        { href: "index.html", text: "Rutas" },
        { href: "servicios.html", text: "Equipo de trabajo" },
        { href: "empresa.html", text: "Empresa" },
        { href: "https://beewo.herokuapp.com/formatos/generate_questions/rHpHfKE5ZTMCNVymBKCDHe2s/0/0", text: "PQRS" },
        { href: "#contact", text: "Contáctanos" }, // Aquí agregamos el enlace "Contactanos"
        { href: "ubicanos.html", text: "Ubícanos" } 
    ];

    // Función para generar los elementos de navegación
    function generateNavItems(navItems, containerId) {
        const navbarContainer = document.getElementById(containerId);
        if (!navbarContainer) return;

        // Verificar si estamos en la página de inicio
        const isHomePage = window.location.pathname === "/index.html" || window.location.pathname === "/";

        navItems.forEach(item => {
            const li = document.createElement("li");
            li.className = "nav-item";

            // Ajustar el comportamiento para "Rutas"
            if (item.href === "index.html") {
                if (isHomePage) {
                    // Si estamos en la página de inicio, hacer que el enlace vaya a #portfolio
                    li.innerHTML = `<a class="nav-link" href="#portfolio">${item.text}</a>`;
                } else {
                    // Si no estamos en la página de inicio, redirigir al home y luego a #portfolio
                    li.innerHTML = `<a class="nav-link" href="index.html#portfolio">${item.text}</a>`;
                }
            } else if (item.href === "#contact") {
                // Ajustar el comportamiento para "Contactanos"
                if (isHomePage) {
                    // Si estamos en la página de inicio, hacer que el enlace vaya a #contact
                    li.innerHTML = `<a class="nav-link" href="#contact">${item.text}</a>`;
                } else {
                    // Si no estamos en la página de inicio, redirigir al home y luego a #contact
                    li.innerHTML = `<a class="nav-link" href="index.html#contact">${item.text}</a>`;
                }
            } else {
                // Para el enlace PQRS, agregar target="_blank" para abrir en una nueva pestaña
                if (item.href === "https://beewo.herokuapp.com/formatos/generate_questions/rHpHfKE5ZTMCNVymBKCDHe2s/0/0") {
                    li.innerHTML = `<a class="nav-link" href="${item.href}" target="_blank">${item.text}</a>`;
                } else {
                    li.innerHTML = `<a class="nav-link" href="${item.href}">${item.text}</a>`;
                }
            }

            navbarContainer.appendChild(li);
        });
    }

    // Ejecutar la función
    generateNavItems(navItems, "navbar-items");
});



/* Footer */
document.addEventListener("DOMContentLoaded", function () {
    // Datos para las imágenes del footer
    const footerImagesData = [
        { url: 'https://www.instagram.com/asotransvaa?igsh=MXQ5a2dhNWx4NGh2Nw==', src: 'assets/img/logos/asotransvaa1.jpg ', alt: 'Imagen 1' },
        { url: 'https://www.fcm.org.co/simit/#/home-public', src: 'assets/img/logos/simit.png', alt: 'Imagen 2' },
        { url: 'https://www.medellin.gov.co/es/secretaria-de-movilidad/', src: 'assets/img/logos/secretariademovilidad.png', alt: 'Imagen 4' },
        { url: 'https://www.metropol.gov.co/', src: 'assets/img/logos/areametropolitana.png', alt: 'Imagen 3' },
    ];

    const footerImagesContainer = document.querySelector('.footer-images');
    footerImagesData.forEach(item => {
        const anchor = document.createElement('a');
        anchor.href = item.url;
        anchor.target = "_blank";  // Aseguramos que se abra en una nueva pestaña

        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.alt;
        img.classList.add('footer-img');  // Clase para el estilo

        anchor.appendChild(img);
        footerImagesContainer.appendChild(anchor);
    });

    const socialIcons = document.querySelectorAll('.footer-social .icon');

    socialIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            const link = icon.getAttribute('data-link');
            let url = '';

            switch (link) {
                case 'facebook':
                    url = 'https://www.facebook.com/profile.php?id=61569216698408';
                    break;
                case 'twitter':
                    url = 'https://x.com/Copatra60';
                    break;
                case 'instagram':
                    url = 'https://www.instagram.com/copatra.60/?next=%2F';
                    break;
                default:
                    url = '#';
                    break;
            }

            window.open(url, '_blank'); // Abre el enlace en una nueva pestaña
        });
    });
    

    // Datos de los enlaces en el footer
    const navbarLinks = [
        { href: "index.html", text: "Inicio" },
        { href: "servicios.html", text: "Equipo de trabajo" },
        { href: "empresa.html", text: "Empresa" },
        { href: "https://beewo.herokuapp.com/formatos/generate_questions/rHpHfKE5ZTMCNVymBKCDHe2s/0/0", text: "PQRS", target: "_blank" }, // Solo PQRS abrirá en una nueva pestaña
        { href: "index.html", text: "Contáctanos" },
        { href: "ubicanos.html", text: "Ubícanos" },
        { href: "politica-privacidad.html", text: "Política de SST y Política de Seguridad Vial" }
    ];

    const isHomePage = window.location.pathname === "/index.html";

    const footerLinksContainer = document.querySelector('.footer-links');
    navbarLinks.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');

        if (link.text === "Contáctanos") {
            if (isHomePage) {
                a.href = "#contact";
            } else {
                a.href = "index.html#contact";
            }
        } else {
            a.href = link.href;
        }

        a.textContent = link.text;

        // Solo para el enlace de "PQRS", añadimos el target "_blank"
        if (link.target) {
            a.target = link.target;
        }

        li.appendChild(a);
        footerLinksContainer.appendChild(li);
    });

    // Función de imagen por defecto en caso de error
    img.onerror = () => {
        img.src = 'assets/img/logos/default.png'; // Imagen por defecto
    };

    // Efecto Parallax en el footer
    window.addEventListener('scroll', function () {
        const scrolled = window.scrollY; // Píxeles desplazados
        document.querySelector('.footer').style.backgroundPosition = `center ${scrolled * 0.4}px`;
    });
});




