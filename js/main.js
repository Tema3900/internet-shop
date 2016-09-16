'use strict';
/*
var menuElem = document.getElementById('slide_uot_menu');

document.getElementsByClassName('hamburger').onclick = function() {
    menuElem.classList.toggle('open');
}
*/











$(document).ready(function() {
    $('.hamburger').on('click', function(e){
        e.preventDefault();
        $(this).addClass('open');
        $('.slide_out_menu').addClass('open');

        if ($('.slide_out_menu').hasClass('open')) {
            $('.menu-close').on('click', function(e){
                e.preventDefault();
                $('.slide_out_menu').removeClass('open');
            })
        }
    });
});
    


