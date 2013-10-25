//Lewie "Jason" Rogers, 10/21/2013, Functions_Wacky

//Halloween Candy
var hershey = prompt("How many pieces are in the bag?"); //Ask user question
var skittles = prompt("How many pieces are in the bag?"); //Ask user question
var reeses = prompt("How many pieces are in the bag?"); //Ask user question
var smarties = prompt("How many pieces are in the bag?"); //Ask user question
var snickers = prompt("How many pieces are in the bag?"); //Ask user question
var mars = prompt("How many pieces are in the bag?"); //Ask user question
var bagSize = 20 + " Halloween bags"; 		//sets up index
var candyType = hershey, skittles, reeses, smarties, snickers, mars;
if(candyType > 18){ //checks condition
	var extraHershey = hershey - bagSize + " extra pieces, ";
	var extraSkittles = skittles - bagSize + " extra pieces, ";
	var extraReeses = reeses - bagSize + " extra pieces, ";
	var extraSmarties = smarties - bagSize + " extra pieces, ";
	var extraSnickers = snickers - bagSize + " extra pieces, ";
	var extraMars = mars - bagSize + " extra pieces, ";
	alert("You will have " + stockSizes + extraHershey + "Hersheys" + extraSkittles + " Skittles, " + extraReeses + " Reese's" + extraSmarties + " Smarties" + extraSnickers + " Snickers" + extraMars + " Mars");
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
