'use strict';
/* global $*/
function applicationButton(){
  $('.button').on('click',function(){
    let link = window.location='https://cgillette12.github.io/Codys-BookMark-app/'
    return link;
    
  });
}
function toggleNav(){
  $('.icon').on('click',function(event){
    let finder = $(event.target).closest('nav');
    finder.toggleClass('responsive');
    console.log(finder);
  });
}
$(function(){
  applicationButton();
  toggleNav();
});