let body = document.querySelector('body');
let sun = document.querySelector('.fa-sun');
let moon = document.querySelector('.fa-moon');
let button = document.querySelector('.main__button');
let section = document.querySelector('.section__container--second');
let footer = document.querySelector('.footer__name');

sun.addEventListener('click', sunOff);
moon.addEventListener('click', moonOff);


function sunOff () {
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
    sun.style.display = 'none';
    moon.style.display = 'block';
    button.style.color = 'black';
    button.style.backgroundColor = 'white';
    section.style.borderColor = 'white';
    footer.style.color = 'white';
}

function moonOff () {
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
    sun.style.display = 'flex';
    moon.style.display = 'none';
    button.style.color = 'white';
    button.style.backgroundColor = 'black';
    section.style.borderColor = 'black';
    footer.style.color = 'black';
}