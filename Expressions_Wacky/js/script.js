//Lewie "Jason" Rogers, 10/10/2013, Expression_Wacky

//Gathering contact info and giving a discount code for signing up
var batSize = new Array("29/19<br />30/20<br />31/21<br />32/22"); //Users baseball bat size
document.write(batSize); //showing bat sizes online
var batSizes = prompt("What size bat are you looking for?"); //bat size prompt
var space = new Array("<br />"); //spacer
document.write(space);
var batBrand = new Array("<br />Easton<br />Nike<br />Demarinni<br />Louisville Slugger"); //Bat brands
var batCost = 149.00;//Cost for bats
var batBrands = prompt("What brand are you looking for?"); //Asking what brand
document.write(batBrand);
console.log(batSize + batBrand);//JS Console
var shipCharge = 9.99; //shipping charge
var itemChargeTax = batCost * 0.07 + shipCharge; //total cost
alert("The price of your bat is $" + itemChargeTax + )//Answer to user inputs
document.write("The price of your bat is $" + itemChargeTax + "<br />");