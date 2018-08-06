'use strict';

// Main jumbotron - navigation - hide logo in burger menu
var burger = document.querySelector('.menu'),
    logo = document.querySelector('.hide-logo');

burger.addEventListener('click', function(event) {
    logo.classList.toggle('hide-menu');
})