/* ---------evento menu-close----------- */
const menu = document.querySelector('.cabezera-icono');
const sidebar = document.querySelector('.sidebar');


menu.addEventListener('click',()=>{
    menu.classList.toggle('active')
    sidebar.classList.toggle('active');
})

/* ---------evento - thema----------- */

const thema = document.querySelector('.cabezera-thema')
const body = document.querySelector('body');

thema.addEventListener('click',()=>{
    thema.classList.toggle('active');
    body.classList.toggle('claro');
    
    if (!body.classList.contains('claro')) {
        localStorage.setItem('modo', 'oscuro');
    } else {
        localStorage.setItem('modo', 'claro');
    }
})

const getmodo = localStorage.getItem('modo');

if (getmodo === ('claro')) {
    body.classList.toggle('claro');
    thema.classList.toggle('active')
} else {
    body.classList.remove('claro');
    thema.classList.remove('active')
}
