const p = document.querySelector('p');
const firstLink = document.querySelector('a');
const sun = document.querySelector('.fa-sun');
const moon = document.querySelector('.fa-moon');
const body = document.querySelector('body');
const main = document.querySelector('#main__container--all');
const title = document.querySelector('h1');
const getStarted = document.querySelector('.main__button--first');
const tryPlatform = document.querySelector('.main__button--second');
const footer = document.querySelector('footer');
const footerLink = document.querySelector('.footer__link');

sun.addEventListener("click", sunEffect);
moon.addEventListener("click", nightEffect);


function sunEffect () {
    sun.style.display = "none";
    moon.style.display = "block";
    p.style.color = 'white';
    firstLink.style.color = 'white';
    body.style.backgroundColor = 'rgb(31, 31, 31)';
    main.style.backgroundColor = "black";
    title.style.color = "white";
    getStarted.style.backgroundColor = "white";
    getStarted.style.color = "black";
    tryPlatform.style.color = "white";
    footer.style.color = "white";
    footerLink.style.color = "white";
}

function nightEffect () {
    sun.style.display = "block";
    moon.style.display = "none";
    p.style.color = 'black';
    firstLink.style.color = 'black';
    body.style.backgroundColor = 'rgb(169, 169, 169)';
    main.style.backgroundColor = "rgb(224, 224, 224)";
    title.style.color = "black";
    getStarted.style.backgroundColor = "black";
    getStarted.style.color = "white";
    tryPlatform.style.color = "black";
    footer.style.color = "black";
    footerLink.style.color = "black";
}
