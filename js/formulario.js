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

	const nombre = form.querySelector('#nombre').value;
	const email = form.querySelector('#email').value;
	const mensaje = form.querySelector('#mensaje').value;
	const telefono = form.querySelector('#telefono').value;

	const expresiones={
		nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
		email:  /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		telefono: /^\d{7,14}$/ ,
		mensaje: /^[a-zA-Z0-9.,;]{10,199}$/, 

	}


	if(!expresiones.nombre.test(nombre)){
		alert('Por favor, ingrese nombre...')
	};

	if(!expresiones.email.test(email)){
		alert('Por favor, ingrese email...')
	};
	
	if(!expresiones.telefono.test(telefono)){
		alert('Por favor, ingrese telefono...')
	};
	console.log(mensaje.split(''));
	if(!expresiones.mensaje.test(mensaje) && mensaje.split('').length<10){
		alert('Por favor, ingrese mensaje - caracteres desde 10 a 199...')
	};

	form.querySelector('#nombre').value = '';
	form.querySelector('#email').value = '';
	form.querySelector('#telefono').value = '';
	form.querySelector('#mensaje').value = '';


	console.log(nombre);
	console.log(email);
	console.log(mensaje);
	console.log(telefono);

	event.preventDefault()
  });
  