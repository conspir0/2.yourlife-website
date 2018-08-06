'use strict';

// Main jumbotron - navigation - hide logo after clicked burger menu
var burger = document.querySelector('.menu'),
    logo = document.querySelector('.hide-logo');

burger.addEventListener('click', function(event) {
    
    // Hide logo
    logo.classList.toggle('hide-menu');
})