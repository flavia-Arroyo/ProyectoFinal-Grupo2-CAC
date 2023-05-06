
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




/*const items = nav.querySelectorAll('.items');

items.forEach((a)=>{
    a.addEventListener('click', ()=>{
        a.classList.add('select');
        console.log(a.toggle)
    })
})*/