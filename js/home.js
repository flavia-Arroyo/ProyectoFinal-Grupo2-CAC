
/*------------menu desplegable----*/
const button = document.querySelector('.button')
const nav = document.querySelector('.nav')

button.addEventListener('click', ()=>{
    nav.classList.toggle('activo');
})


const menuOpciones = nav.querySelectorAll('.li');

menuOpciones.forEach((li) => {
    li.addEventListener('click', ()=>
        nav.classList.remove('activo'));
        
        
        
})


