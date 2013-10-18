//Lewie "Jason" Rogers, 10/10/2013, Conditionals_Industry

//What is my batting average?
var onlineSales = prompt("Total number of sales.");//Total number of at-bats
var discount = onlineSales * .2;//Number of basehits
var totalSales = prompt("Did you sale more than $500?");//Walks are subtracted from at-bats
//var totalAtBats = atBats - walks;//Finding number of at-bats for batting average
//var battingAverage = baseHits /totalAtBats;//Actual batiing average
alert("Your discount is $" + totalSales);//Gives player results
if(totalSales < 500){
	//if its less than .280
	console.log("Thank you for your order.");
}else{
	(totalSales * .05);
	console.log("You qualified for an additional discount");
}
console.log(totalSalesDiscount);//Displays batting average in console
