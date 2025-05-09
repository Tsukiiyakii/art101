// index.js - purpose and description here
// Author: Alyssa Yuen
// Date: 4 May
// Lincense: Public Domain


// sortUserName - a function
function sortUserName() {
  var userName = window.prompt("Hi. Let me fix your name");
  console.log("userName =", userName);
  //split string to array
  var nameArray = userName.split('');
  // sort the array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySortc=", nameArraySort);
  //join array back to a string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSOrted);
  return nameSorted;
}




//output
document.writeln("Your name is now fixed: ",
    sortUserName(), "</br");
    