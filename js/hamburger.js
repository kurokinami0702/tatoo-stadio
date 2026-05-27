window.onload = function(){
    var nav = document.getElementById('nav-wrapper');
    var hamburger = document.getElementById('js-hamburger');
    var blackbg = document.getElementById('js-black-bg');

    hamburger.addEventListener('click', function () {
        nav.classList.toggle('open');
    });

    blackbg.addEventListener('click',function(){
        nav.classList.remove('open')
    })
}