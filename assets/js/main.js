const sun = document.querySelector('.fa-sun');
const moon = document.querySelector('.fa-moon');
const body = document.querySelector('#container');
const title = document.querySelector('h1');
const get = document.querySelector('.main__button--first');
const tryPlat = document.querySelector('.main__button--second');
const footer = document.querySelector('footer');
const link = document.querySelector('.footer__link');

sun.addEventListener("click", sunEffect);
moon.addEventListener("click", nightEffect);


function sunEffect () {
    sun.style.display = "none";
    moon.style.display = "block";
    body.style.backgroundColor = "black";
    title.style.color = "white";
    get.style.backgroundColor = "white";
    get.style.color = "black";
    tryPlat.style.color = 'white';
    footer.style.color = 'white';
    link.style.color = 'white';
}

function nightEffect () {
    sun.style.display = "block";
    moon.style.display = "none";
    body.style.backgroundColor = "white";
    title.style.color = "black";
    get.style.backgroundColor = "black";
    get.style.color = "white";
    tryPlat.style.color = 'black';
    footer.style.color = 'black';
    link.style.color = 'black';
}
