const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelector('.menu li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
            options.forEach(option => {
                option.classList.add('active');
            });
            option.classList.add('active');
        });
    });
});


function myFunction() {
    var element = document.getElementById("mobile-menu");
    element.classList.toggle("show")
}

function showCode() {
    var element = document.getElementById("CSS_code");
    element.classList.toggle("CSS_code")
}

function moveDown() {
    var element = document.getElementById("element");
    element.classList.toggle("move_down")
}

function moveUp() {
    var element = document.getElementById("element");
    element.classList.toggle("move_up")
}

function moveLeft() {
    var element = document.getElementById("element");
    element.classList.toggle("move_left")
}

function moveRight() {
    var element = document.getElementById("element");
    element.classList.toggle("move_right")
}

function bounce() {
    var element = document.getElementById("element");
    element.classList.toggle("bounce")
}

function fade() {
    var element = document.getElementById("element");
    element.classList.toggle("fade")
}

function blink() {
    var element = document.getElementById("element");
    element.classList.toggle("blink")
}

function tremble() {
    var element = document.getElementById("element");
    element.classList.toggle("tremble")
}

function rotate() {
    var element = document.getElementById("element");
    element.classList.toggle("rotate")
}