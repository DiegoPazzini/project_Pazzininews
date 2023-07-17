$(document).ready(function() {
    console.log('main.js loaded');
  
    $('.botao-menu button').click(function() {
      $('.menu').slideToggle();
    })
  })