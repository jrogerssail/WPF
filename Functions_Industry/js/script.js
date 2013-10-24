//Lewie "Jason" Rogers, 10/21/2013, Functions_Industry

//Average TV Size
var tvSize = prompt("What size TV are your looking to purchase?");
var tvStock = 27 + "inch RCA"; 		//sets up index
if(tvSize > tvStock){		//checks condition
	var stockSizes = (22, 24, 26);
	console.log(stockSizes + 'These are you TV choices');
	tvStock --; //increments or decrements the index
}

console.log("These are you TV choices " + tvStock);



//console.log('---------- For Loops ----------')

//tvChoices(22inch RCA, 22inch Samsung, 24inch RCA);



