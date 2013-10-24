//Lewie "Jason" Rogers, 10/21/2013, Functions_Industry

//Average TV Size
var tvSize = prompt("What size TV are your looking to purchase?");
var tvStock = 27 + " inch RCA"; 		//sets up index
if(tvSize > tvStock){		//checks condition
	var stockSizes = 30 + " inch RCA, ";
	var tv22 = 22;
	var tv24 = 24;
	var tv26 = 26;
	var tv27 = 27;
	var tv32 = 32;
	var tv36 = 36;
	var tv42 = 42;
	alert("These are your TV choices... " + stockSizes + tv32 + " inch RCA, " + tv36 + " inch Vizio, " + tv42 + " inch Samsung");
	console.log("These are your TV choices... " + stockSizes + tv32 + " inch RCA, " + tv36 + " inch Vizio, " + tv42 + " inch Samsung");
	tvStock --; //increments or decrements the index
}
if(tvSize < tvStock){		//checks condition
	var stockSizes = 27 + " inch RCA, ";
	var tv22 = 22;
	var tv24 = 24;
	var tv26 = 26;
	var tv27 = 27;
	var tv32 = 32;
	var tv36 = 36;
	var tv42 = 42;
	alert("These are your TV choices... " + stockSizes + tv22 + " inch RCA, " + tv24 + " inch Vizio, " + tv26 + " inch Samsung");
	console.log("These are your TV choices... " + stockSizes + tv22 + " inch RCA, " + tv24 + " inch Vizio, " + tv26 + " inch Samsung");
	tvStock --; //increments or decrements the index
}
document.write("These are your TV choices... " + stockSizes + tv22 + " inch RCA, " + tv24 + " inch Vizio, " + tv26 + " inch Samsung");
