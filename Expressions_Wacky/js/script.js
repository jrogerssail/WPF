//Lewie "Jason" Rogers, 10/10/2013, Expression_Wacky

//Gathering contact info and giving a discount code for signing up
var batSize = new Array("29/19<br />30/20<br />31/21<br />32/22"); //Users first name
document.write(batSize);
var batSizes = prompt("What size bat are you looking for?"); //Room width
var space = new Array("<br />"); //Users first name
document.write(space);
var batBrand = new Array("<br />Easton<br />Nike<br />Demarinni<br />Louisville Slugger"); //Users first name
var batBrands = prompt("What brand are you looking for?"); //Room width
document.write(batBrand);
alert("Thank you " + batSize + " for signing up, here's your discount code WPF2013")//Answer to user inputs
console.log(batSize + batBrand);//JS Console
var ideal = batSize + batBrand;//Formula to find the sq area of a room
alert(" The best bat match is " + ideal + " baseball bat")//Answer to user inputs