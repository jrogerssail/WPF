//Lewie "Jason" Rogers, 10/10/2013, Expression_Wacky

//Gathering contact info and giving a discount code for signing up
var batSize = new Array("29/19<br />30/20<br />31/21<br />32/22"); //Users first name
document.write(batSize);
var batSizes = prompt("What size bat are you looking for?"); //Room width
var space = new Array("<br />"); //Users first name
document.write(space);
var batBrand = new Array("<br />Easton<br />Nike<br />Demarinni<br />Louisville Slugger"); //Users first name
var batCost = 149.00;//Formula to find the sq area of a room
var batBrands = prompt("What brand are you looking for?"); //Room width
document.write(batBrand);
console.log(batSize + batBrand);//JS Console
var shipCharge = 9.99;
var itemChargeTax = batCost * 0.07 + shipCharge;
alert("The price of your bat is $" + itemChargeTax + )//Answer to user inputs
document.write("The price of your bat is $" + itemChargeTax + "<br />");