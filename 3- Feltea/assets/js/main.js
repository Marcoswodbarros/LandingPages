let section = document.querySelector('#ingredients');
let obs = document.querySelector('.ingredients__obs');
let sections = document.querySelector('.ingredients__container');
let arrowDown = document.querySelector('.fa-circle-chevron-down');
let arrowUp = document.querySelector('.fa-circle-chevron-up');

arrowDown.addEventListener('click', showMenu);
arrowUp.addEventListener('click', hideMenu);


function showMenu () {
    arrowDown.style.display = 'none';
    arrowUp.style.display = 'flex';
    sections.style.display = 'flex';
}

function hideMenu () {
    arrowDown.style.display = 'flex';
    arrowUp.style.display = 'none'
    sections.style.display = 'none';
}