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