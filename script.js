function calcularVolumen() {
    const largo = parseFloat(document.getElementById("largo").value);
    const ancho = parseFloat(document.getElementById("ancho").value);
    const alto = parseFloat(document.getElementById("alto").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(largo) || isNaN(ancho) || isNaN(alto)) {
        resultado.textContent = "Por favor ingresa todos los valores.";
        return;
    }

    const volumen = largo * ancho * alto;
    resultado.textContent = `El volumen es ${volumen} cm³.`;
}

function toggleModo() {
    document.body.classList.toggle("dark-mode");
    const btn = document.getElementById("modoBtn");
    if (document.body.classList.contains("dark-mode")) {
        btn.textContent = "☀️ Modo Claro";
    } else {
        btn.textContent = "🌙 Modo Oscuro";
    }
}
