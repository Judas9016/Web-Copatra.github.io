// Función para revelar más detalles de los valores
function revealValues() {
    var details = document.getElementById('valuesDetails');
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
        setTimeout(function () {
            details.style.opacity = "1"; // Asegura que sea visible con animación
        }, 50);
    } else {
        details.style.opacity = "0"; // Desaparece de nuevo
        setTimeout(function () {
            details.style.display = "none";
        }, 500);
    }
}


// Mostrar la página solo después de que todo se haya cargado
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");
  
    // Oculta la pantalla de carga
    loader.style.opacity = "0"; // Transición suave
    setTimeout(() => {
      loader.style.display = "none"; // Oculta completamente
      content.style.display = "block"; // Muestra el contenido
    }, 300); // Espera el tiempo de transición
  });