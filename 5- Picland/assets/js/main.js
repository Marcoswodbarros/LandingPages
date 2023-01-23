let arrowDown = document.querySelector('.fa-circle-chevron-down');
let arrowUp = document.querySelector('.fa-circle-chevron-up');
let cameras = document.querySelector('.section__img--container');

arrowDown.addEventListener('click', show);
arrowUp.addEventListener('click', hide);

function show () {
    arrowDown.style.display = "none";
    arrowUp.style.display = "block";
    cameras.style.display = "block";
}

function hide () {
    arrowDown.style.display = "block";
    arrowUp.style.display = "none";
    cameras.style.display = "none";
}