const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const edad = document.getElementById("edad");
const submit = document.getElementById("submit");

// Validación: correo válido y contraseña de 6 dígitos numéricos
const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
const passwordRegex = /^\\d{6}$/;

function validar() {
  let valido = true;

  if (nombre.value.trim().length < 3) {
    document.getElementById("error-nombre").textContent = "Debe tener al menos 3 caracteres.";
    valido = false;
  } else {
    document.getElementById("error-nombre").textContent = "";
  }

  if (!emailRegex.test(email.value)) {
    document.getElementById("error-email").textContent = "Correo inválido.";
    valido = false;
  } else {
    document.getElementById("error-email").textContent = "";
  }

  if (!passwordRegex.test(password.value)) {
    document.getElementById("error-password").textContent = "Debe tener exactamente 6 dígitos numéricos.";
    valido = false;
  } else {
    document.getElementById("error-password").textContent = "";
  }

  if (confirmPassword.value !== password.value || confirmPassword.value === '') {
    document.getElementById("error-confirm-password").textContent = "Las contraseñas no coinciden.";
    valido = false;
  } else {
    document.getElementById("error-confirm-password").textContent = "";
  }

  if (parseInt(edad.value) < 18 || edad.value === '') {
    document.getElementById("error-edad").textContent = "Debes tener al menos 18 años.";
    valido = false;
  } else {
    document.getElementById("error-edad").textContent = "";
  }

  submit.disabled = !valido;
}

[nombre, email, password, confirmPassword, edad].forEach(input => {
  input.addEventListener('input', validar);
});

formulario.addEventListener('submit', e => {
  e.preventDefault();
  alert('✅ ¡Formulario enviado con éxito!');
});
