//Lewie "Jason" Rogers, 10/10/2013, Expression_Wacky

//Gathering contact info and giving a discount code for signing up
var batSize = new Array("29/19<br />30/20<br />31/21<br />32/22"); //Users bat size
document.write(batSize);
var batSizes = prompt("What size bat are you looking for?" "<br />29/19<br />30/20<br />31/21<br />32/22"); //bat size questions
var space = ("<br />"); //Users first name
document.write(space);
var batBrand = new Array("<br />Easton<br />Nike<br />Demarinni<br />Louisville Slugger" "<br />"); //Users first name
var batCost = new Array("<br />Easton 149.00<br />Nike 149.00<br />Demarinni 139.00<br />Louisville Slugger 129.00"); //Users first name
var batBrands = prompt("What brand are you looking for?"); //Room width
document.write(batBrand);
console.log(batSize + batBrand);//JS Console
var ideal = batSize + batBrand;//Formula to find the sq area of a room
alert(" The best bat match is " + ideal + " baseball bat")//Answer to user inputs
var shipCharge = 9.99;
var itemChargeTax = batCost * 0.07 + shipCharge;
alert(" The price of your bat aint $ " + itemChargeTax + )//Answer to user inputs
document.write("The price of your bat is $" + itemChargeTax + "<br />");


