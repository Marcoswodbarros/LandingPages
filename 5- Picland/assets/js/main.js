let arrowDown = document.querySelector('.camera__down');
let arrowUp = document.querySelector('.camera__up');
let forestDown = document.querySelector('.forest__down');
let forestUp = document.querySelector('.forest__up');
let cameras = document.querySelector('.section__img--cameras');
let forests = document.querySelector('.section__img--forests');

arrowDown.addEventListener('click', showCamera);
arrowUp.addEventListener('click', hideCamera);

forestDown.addEventListener('click', showForest);
forestUp.addEventListener('click', hideForest);



// Functions - Arrows

function showCamera () {
    arrowDown.style.display = "none";
    arrowUp.style.display = "block";
    cameras.style.display = "block";
}

function hideCamera () {
    arrowDown.style.display = "block";
    arrowUp.style.display = "none";
    cameras.style.display = "none";
}


function showForest () {
    forestDown.style.display = "none";
    forestUp.style.display = "block";
    forests.style.display = "block";
}

function hideForest () {
    forestDown.style.display = "block";
    forestUp.style.display = "none";
    forests.style.display = "none";
}


// Functions - Dark mode

let body = document.querySelector('body');
let sun = document.querySelector('.fa-sun');
let moon = document.querySelector('.fa-moon');

sun.addEventListener('click', moonOn);
moon.addEventListener('click', sunOn);

function moonOn () {
    body.style.backgroundColor = "black";
    moon.style.color = "white";
    moon.style.display = "block";
    sun.style.display = "none";
}

function sunOn () {
    body.style.backgroundColor = "white";
    moon.style.display = "none";
    sun.style.display = "block";
}