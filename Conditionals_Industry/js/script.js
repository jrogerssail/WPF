//Lewie "Jason" Rogers, 10/10/2013, Conditionals_Industry

//What is my batting average?
var onlineSales = prompt("Total number of sales.");//Total number of at-bats
var discount = onlineSales * .20;//Number of basehits
var totalSales = discount;//Walks are subtracted from at-bats
//var extraDiscount = 0.05;
var maxDiscount = totalSales * extraDiscount;
if(totalSales > 500){
	//if its less than .280
	alert("Your discount is $" + totalSales);
	console.log("Thank you for your order.");
}else{
	alert("Your discount is $" + maxDiscount);
	console.log("Your discount is $" + maxDiscount);
}
//alert("Your discount is $" + totalSales);//Gives player results
//console.log(else);//Displays batting average in console
