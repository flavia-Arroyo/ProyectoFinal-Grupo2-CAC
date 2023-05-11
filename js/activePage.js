/*-----------indicar la pagina que se visita-----------*/

const activePage = window.location.pathname;
console.log(activePage)

const navLinks = document.querySelectorAll('nav a').forEach(link=>{
    console.log(navLinks)
    if(link.href.includes(`${activePage}`)){
        link.classList.add('active');
       
    }
});
