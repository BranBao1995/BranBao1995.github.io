

var navbar = document.querySelector('.navbar');

var sticky = navbar.offsetTop;


function stickOnTop () {

    if (window.pageYOffset >= sticky) {

        navbar.classList.add('sticky');

    } else {

        navbar.classList.remove('sticky');

    }

};

window.onscroll = function() {stickOnTop()};