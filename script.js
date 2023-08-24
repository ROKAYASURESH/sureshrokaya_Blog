// left to write
var darkBtn = document.querySelector('#dark-btn');
darkBtn.onclick = function () {
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-teme")
}

var settingsmenu = document.querySelector('.settings-menu');

function settingsmenuToggle()
{
    settingsmenu.classList.toggle('settings-menu-height');
}

var menu = document.querySelector('.menu-bar');

function menuToggle()
{
    menu.classList.toggle('menu-bar-height');
}