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
let h2 = document.querySelector('h2');
let menu = document.querySelector('.fa-bars');
let title = document.querySelector('h1');
let camerasTitle = document.querySelector('.section__cameras--title');
let forestTitle = document.querySelector('.section__forests--title');

sun.addEventListener('click', moonOn);
moon.addEventListener('click', sunOn);

function moonOn () {
    body.style.backgroundColor = "black";
    moon.style.color = "white";
    moon.style.display = "block";
    sun.style.display = "none";
    h2.style.color = "white";
    menu.style.color = "white";
    title.style.color = "white";
    camerasTitle.style.color = "white";
    forestTitle.style.color = "white";
    arrowDown.style.color = "white";
    arrowUp.style.color = "white";
    forestDown.style.color = "white";
    forestUp.style.color = "white";
}

function sunOn () {
    body.style.backgroundColor = "white";
    moon.style.display = "none";
    sun.style.display = "block";
    h2.style.color = "black";
    menu.style.color = "black";
    title.style.color = "black";
    camerasTitle.style.color = "black";
    forestTitle.style.color = "black";
    arrowDown.style.color = "black";
    arrowUp.style.color = "black";
    forestDown.style.color = "black";
    forestUp.style.color = "black";
}