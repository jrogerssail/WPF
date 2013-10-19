//Lewie "Jason" Rogers, 10/10/2013, Conditionals_Industry

//What is my batting average?
var onlineSales = prompt("Total number of sales.");//Total sales
var discount = onlineSales * .20;//affiliate discount
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