const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const nombre = form.querySelector('#nombre').value;
  const email = form.querySelector('#email').value;
  const mensaje = form.querySelector('#mensaje').value;

  if (!nombre) {
    alert('Por favor ingrese su nombre');
    return;
  }

  if (!email) {
    alert('Por favor ingrese su email');
    return;
  }

  if (!mensaje) {
    alert('Por favor ingrese su mensaje');
    return;
  }

  const validarFormulario = (e) => {
	switch (e.target.name) {
		case "usuario":
			validarCampo(expresiones.usuario, e.target, 'usuario');
		break;
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
			validarPassword2();
		break;
		case "password2":
			validarPassword2();
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
	}
}
});