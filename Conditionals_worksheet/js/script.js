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

////////////function calcMPG() {
//////////var startMiles;
////////var endMiles;
//////var gallons;
////if (alert(isNAN())){
//d//ocument.write("You must enter a number");
//}else {
//(startMiles>0) && (endMiles>0) && (gallons>0)
//answer = (endMiles-startMiles)/gallons;
//console.log(answer);
//}


//LAST CHANCE FOR GAS
var myMPG = prompt("What is the MPG of your car?"); //Drivers MPG
var myTank = prompt("What is gas gauge reading in PERCENT?");//Gas in tank
var carTank = prompt("How many gallons does your tank hold?");//Max gallons of tank
var canI = myMPG * carTank/myTank;
if(canI < 200){
	//if its less than 200
	console.log("You only have X gallons of gas in your tank, better get gas now while you can!");
}else{
	//if it's greater or equal to 200
	console.log("Yes, you can make it without stopping for gas!");
}





