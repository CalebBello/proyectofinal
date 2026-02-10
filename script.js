const correctPassword = "tiramisu";
let attempts = 0;

// 1) Configuramos el botón cuando carga la página
document.addEventListener("DOMContentLoaded", () => {
    const enterBtn = document.getElementById("enterBtn");
    if (enterBtn) {
        enterBtn.addEventListener("click", checkPassword);
    }
});

// 2) Función que se ejecuta al hacer clic
function checkPassword() {
    const input = document.getElementById("passwordInput").value; // OJO: .value
    const errorMsg = document.getElementById("errorMsg");
    const hint = document.getElementById("hint");

    attempts++;

    if (input === correctPassword) {
        errorMsg.textContent = "";
        hint.textContent = "";
        window.location.href = "amigo.html";
    } else {
        errorMsg.textContent = "Contraseña incorrecta";

        if (attempts === 1) {
            hint.textContent = "Dulce como tú";
        } else if (attempts === 2) {
            hint.textContent = "Casi pero sin tilde y en minúsculas";
        } else if (attempts >= 3) {
            hint.textContent = "Pregúntale al jefe 😠";
        }
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const botonSecreto = document.getElementById("botonSecreto");
    botonSecreto.addEventListener("click", () => {
        window.location.href = "amigo.html"; // cambia por la página que quieras
    });
});
