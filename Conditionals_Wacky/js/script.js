//Lewie "Jason" Rogers, 10/10/2013, Conditionals_Wacky

//Fish size?
var whatFish = prompt("What kind of fish do you have?");//Total sales
var fishType = new Array("Oscar, Guppy, Molly, Swords, African Cichlids");
if(fishType = ""{
	//if its less than $500
	alert("Your fish is an aggressive species" + fishType);//Shows balance after first discount and finishes order
	console.log("Please keep your fish in at least a 20 gallon aquarium.");//Ending script
}else{
	alert("Your fish is a community fish and can be kept with other fish of this type" + fishType);//Max discount is applied and shown
	console.log("Your final balance is $" + finalBill);//Final cost
}
alert("Your discount is $" + discount);//Announces your discount
var creditSales = onlineSales - discount;//Calculates new var after discount is applied
var extraDiscount = 0.05;//extra discount for sales over $500
var maxDiscount = creditSales * extraDiscount;//Calculates new var after max discount is applied
var finalBill = creditSales - maxDiscount;//final cost
if(creditSales < 500){
	//if its less than $500
	alert("Your balance is $" + creditSales);//Shows balance after first discount and finishes order
	console.log("Thank you for your order.");//Ending script
}else{
	alert("Your final balance is $" + finalBill);//Max discount is applied and shown
	console.log("Your final balance is $" + finalBill);//Final cost
}


if(document.fishType.name.value =="fishType"){
var name=document.fishType.name
name.value="";
alert("What kind of fish do you have?");
name.focus();
return false;
}