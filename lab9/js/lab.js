/*
lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page
Requirements: jQuery must be loaded for this script to work.
Author: Alyssa Yuen
Date: 12 May 2025
Lincense: Public Domain
*/
// add buttom to challenge section
$("#challenge").apend("<button id='button-challenge'>Make Special</button>");
// add a click listner to the challenge button 
$("#button-challenge").click(function(){
  // now add (or subtract) the "special" class to the section
  $("#challenge").toggleClass("special");
});
