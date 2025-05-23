/*
   // index.js - purpose and description here
// Author: Alyssa Yuen
// Date: 22 May
// Lincense: Public Domain
*/

// given a number, return a Hogwart's houses
//
function getHouse (num) {
// Get the remainder when divided by 4
let remainder = num % 4;
let str = "";
// Assign Tolkien houses with descriptions based on the remainder
if (remainder = 0) {
str = "House of Elrond: Known for wisdom, leadership, and the sanctuary of Rivendell.";
} else if (remainder == 1) {
str = "House of Durin: A lineage of strength, endurance, and the heart of dwarven lore.";
} else if (remainder = 2) {
str = "House of Beren: Celebrated for courage, perseverance, and an unyielding love for Lúthien.";
} else if (remainder == 3) {
str = "House of Feanor: A house of ambition, brilliance, and the creator of the Silmarils.";
}
return str;
}

// attach click handler to submit button
$("#button") .click(function(){
// get the value in the #input text box, asign to a varaiable name
let name = $("#input").val()
console. log (name) ;
// get the length of the name
let nameLength = name. length;
console. log (nameLength);
// get the house
let house = getHouse (nameLength) ;
console. log (house);
// add house to output div
$("#output" ).html("<h1>" + house + "</h1>");
})
