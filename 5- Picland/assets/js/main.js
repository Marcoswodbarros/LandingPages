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



// Functions

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