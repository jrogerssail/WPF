//Lewie "Jason" Rogers, 10/10/2013, Conditionals_worksheet

//HOT ENOUGH?
//Is it hot enough to go to beach?
var myTemp = prompt("What is the current temp?"); //Input the current temp
//var temp = 80; //Not used in formula
if(myTemp < 75){
	//if its less than 75
	console.log("We will go to the beach!");
}else{
	//if it's greater or equal to 75
	console.log("We will go to movies.");
}

//STUFF YOUR FACE
var myWeight = prompt("What is your current weight"); //Competitors Weight
if(myWeight < 250){
	//if its less than 250
	console.log("The competitor needs to gain some weight!");
}else{
	//if it's greater or equal to 250
	console.log("The competitor qualifies for the heavyweight division.");
}

//GROUP 1 - LAST CHANCE FOR GAS
var myMPG = prompt("What is the MPG of your car?"); //Drivers MPG
var myTank = prompt("What is gas gauge reading in PERCENT?");//Gas in tank
var carTank = prompt("How many gallons does your tank hold?");//Max gallons of tank
var canI = myMPG * carTank/myTank;//Final formula
if(canI < 200){
	//if its less than 200
	console.log("You only have X gallons of gas in your tank, better get gas now while you can!");
}else{
	//if it's greater or equal to 200
	console.log("Yes, you can make it without stopping for gas!");
}

//GROUP 2 - CHECK THE LOGIN
var userName = Array("Jason", "Mason", "Matthew", "Colette", "Abby", "Baylee" );
var myMPG = prompt("What is the MPG of your car?"); //Drivers MPG
var myTank = prompt("What is gas gauge reading in PERCENT?");//Gas in tank
var carTank = prompt("How many gallons does your tank hold?");//Max gallons of tank
var canI = myMPG * carTank/myTank;//Final formula
if(canI < 200){
	//if its less than 200
	console.log("You only have X gallons of gas in your tank, better get gas now while you can!");
}else{
	//if it's greater or equal to 200
	console.log("Yes, you can make it without stopping for gas!");
}
var unArray = ["Philip", "George", "Sarah", "Michael"];  // as many as you like - no comma after final entry
var pwArray = ["Password1", "Password2", "Password3", "Password4"];  // the corresponding passwords;




