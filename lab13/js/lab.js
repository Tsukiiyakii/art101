/*
   // index.js - purpose and description here
// Author: Alyssa Yuen
// Date: 26 May
// Lincense: Public Domain
*/

// FizzBuzz function
function Fizzbuzz(str) {
   // Example implementation: loop through numbers 1 to 200
   return FizzBuzz(str.length);
}
//Loop through numbers 1 to 200 and build the output string
let oneLongString = "";
for (let num = 1; num <= 200; num++) {
   let output = "";
   if (num % 3 === 0) output += "Fizz";
   if (num % 5 === 0) output += "Buzz";
   if (num % 7 === 0) output += "Boom";
   if (output === "") output = num;
   oneLongString += output + "<br>";
   console.log(output);
   $("#output").html(oneLongString);
   console.log(oneLongString);
}