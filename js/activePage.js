/*-----------indicar la pagina que se visita-----------*/

const activePage = window.location.href;
console.log(activePage)

const navLinks = document.querySelectorAll('nav a').forEach(link=>{
    console.log(document.querySelectorAll('nav a'))
    if(link.href.includes(`${activePage}`)){
        link.classList.add('active');
       
    }
});
