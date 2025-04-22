function loguear() {
    let user = document.getElementById("usuario").value;
    let pass = document.getElementById("clave").value;
    if (user === "juan" && pass === "1234") {
        window.location.href = "./index5.html";
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}