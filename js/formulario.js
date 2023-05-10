const form = document.querySelector('form');

function validarFormulario(e){
	console.log(e)

	const nombre = form.querySelector('#nombre').value;
	const email = form.querySelector('#email').value;
	const mensaje = form.querySelector('#mensaje').value;
	const telefono = form.querySelector('#telefono').value;

	console.log(nombre);
	console.log(email);
	console.log(mensaje);
	console.log(telefono);
}


form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!nombre) {
    alert('Por favor ingrese su nombre');
	return;
  }

  if (!email) {
    alert('Por favor ingrese su email');
    return;
  }

  if (!telefono) {
    alert('Por favor ingrese su telefono');
    return;
  }

  if (!mensaje) {
    alert('Por favor ingrese su mensaje');
    return;
  }

  

});