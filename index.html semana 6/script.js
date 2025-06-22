const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const edad = document.getElementById("edad");
const submit = document.getElementById("submit");

// Expresiones regulares
const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
const passwordRegex = /^(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])[A-Za-z\\d!@#\\$%\\^&\\*]{8,}$/;

function validar() {
  let valido = true;

  // Nombre
  if (nombre.value.length < 3) {
    document.getElementById("error-nombre").textContent = "Mínimo 3 caracteres.";
    valido = false;
  } else {
    document.getElementById("error-nombre").textContent = "";
  }

  // Email
  if (!emailRegex.test(email.value)) {
    document.getElementById("error-email").textContent = "Correo no válido.";
    valido = false;
  } else {
    document.getElementById("error-email").textContent = "";
  }

  // Password
  if (!passwordRegex.test(password.value)) {
    document.getElementById("error-password").textContent = "Mínimo 8 caracteres, un número y un carácter especial.";
    valido = false;
  } else {
    document.getElementById("error-password").textContent = "";
  }

  // Confirmación de contraseña
  if (confirmPassword.value !== password.value) {
    document.getElementById("error-confirm-password").textContent = "Las contraseñas no coinciden.";
    valido = false;
  } else {
    document.getElementById("error-confirm-password").textContent = "";
  }

  // Edad
  if (parseInt(edad.value) < 18) {
    document.getElementById("error-edad").textContent = "Debes tener al menos 18 años.";
    valido = false;
  } else {
    document.getElementById("error-edad").textContent = "";
  }

  submit.disabled = !valido;
}

// Validaciones en tiempo real
[nombre, email, password, confirmPassword, edad].forEach(input => {
  input.addEventListener('input', validar);
});

// Al enviar el formulario
formulario.addEventListener('submit', e => {
  e.preventDefault();
  alert('¡Formulario enviado con éxito!');
});
