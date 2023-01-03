const sun = document.querySelector('.fa-sun');
const moon = document.querySelector('.fa-moon');
const body = document.querySelector('#container');

sun.addEventListener("click", function () {
    sun.style.display = "none";
    moon.style.display = "block";
    body.style.backgroundColor = "black";
})


moon.addEventListener("click", function () {
    sun.style.display = "block";
    moon.style.display = "none";
    body.style.backgroundImage = "linear-gradient(to bottom, white, gray 70%)";
})