// index.js - purpose and description here
// Author: Alyssa Yuen
// Date: 8 May
// Lincense: Public Domain

function isEven(x){
  return (x % 2 == 0)
}
console.log("Is 1 even? ", isEven(1));
console.log("Is 2 even? ", isEven(2));

array = [200, 71, 3, 28, 976, 1093]
console.log("My array", array);

var result = array.map(isEven);
console.log("Test of eveness of array:", result);

var result = array.map(function(x){
  return x ** 0.5;
})
console.log("Squareroot of array:", result);



