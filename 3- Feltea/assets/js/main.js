let section = document.querySelector('#ingredients');
let obs = document.querySelector('.ingredients__obs');
let sections = document.querySelector('.ingredients__container');

obs.addEventListener('click', showMenu);
sections.addEventListener('click', hideMenu);


function showMenu () {
    sections.style.display = 'flex';
}

function hideMenu () {
    sections.style.display = 'none';
}