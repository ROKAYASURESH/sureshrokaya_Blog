// left to write
var darkBtn = document.querySelector('#dark-btn');
darkBtn.onclick = function () {
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-teme")
}