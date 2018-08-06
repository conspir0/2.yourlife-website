'use strict';

// Main jumbotron - navigation - hide logo & content after clicked burger menu
var burger = document.querySelector('.menu'),
    logo = document.querySelector('.hide-logo'),
    mJumbotronContent = document.querySelector('.main-jumbotron-content');
console.log(logo);
console.log(mJumbotronContent);
burger.addEventListener('click', function(event) {
    
    // Hide logo
    logo.classList.toggle('hide-menu');
    
    // Hide content
    mJumbotronContent.classList.toggle('bolek');
})