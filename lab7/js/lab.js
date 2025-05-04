// index.js - purpose and description here
// Author: Alyssa Yuen
// Date: 28 April
// Lincense: Public Domain


// Define Variables
myTransport = ["BMW Mini Cooper","bus", "ride from friends"];
myMainRide = {
  make: "BMW",
  model: "Mini Cooper",
  color: "Ocean Wave Green",
  year: 2025,
  age: function () {
      return 2025 - this.year;
  }
}
//output
document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
