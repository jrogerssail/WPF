//Lewie "Jason" Rogers, 10/10/2013, Conditionals_Personal

//Can player be added to Homerun Derby?
//var age = prompt("Enter Age:", "");
//var isOverSixty = parseInt(age) > 60;
//console.log("Older than 60: " + isOverSixty);
//var result = a * b * b / 800;
//var discount = 10%;
var atBats = prompt("Enter number of at-bats.");
var baseHits = prompt("Enter number of basehits");
var walks = prompt("How many walks have you earned");
var totalAtBats = atBats - walks;
var battingAverage = baseHits /totalAtBats;
alert("Your batting average is " + battingAverage);
console.log(battingAverage);

var userName = prompt("Enter username:", "");
var savedName = new Array("Jason", "Mason", "Matthew", "Colette", "Abby", "Baylee");
var savedName = parseInt(userName) == savedName;
if(userName [0] [1] [2] [3] [4] [5] == savedName);
console.log("Correct username: " + savedName);

var msgArray = new Array();
msgArray[0] = "Hello";
msgArray[99] = "world";

if (msgArray.length == 100)
   console.log("The length is 100.");
var mycars = new Array();
var userName = prompt("Enter car");
var savedName = new Array("Jason", "Mason", "Matthew", "Colette", "Abby", "Baylee");
mycars[0] = "Saab";
mycars[1] = "Volvo";
mycars[2] = "BMW";
console.log(mycars);

var userName = prompt("Enter username");
var savedName = new Array("Jason", "Mason", "Matthew", "Colette", "Abby", "Baylee");
if(userName [0] [1] [2] [3] [4] [5] = "Correct username!");
if(userName = new Array){
	//if its less than 250
	console.log("username is correct!");
}else{
	//if it's greater or equal to 250
	console.log("Please try again.");
}
//console.log(userName [0] [1] [2] [3] [4] [5] = new Array);
//var myHr = prompt("How many homeruns have you hit this season?"); //Player Homeruns
//var myGames = prompt("How many games have you played this season?"); //Player Homeruns
//var temp = 80; //Not used in formula
//if("myHr < 8" + "myGames < 10"){
	//if less than 8
	//console.log("Eat more meat and play more games!");
//}else{
	//if more or equal to 8
	//console.log("You are invited to compete in the Homerun Derby!");
//}

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
//function login(){
	var userName = prompt("Enter username");
	var savedName = Array("Jason", "Mason", "Matthew", "Colette", "Abby", "Baylee");
	var passWord = prompt("Enter password");
	var userPass = new Array("Password1", "Password2", "Password3", "Password4", "Password5", "Password6");
	if(userName == "savedName" && "passWord" == "savedPass"){
		console.log("Successful Login");
	}else{
		console.log("Crappy Login");
	};
	//var UserNameQuestion = prompt("What is your user name?");
	////////////var UserName = Array("Jason", "Mason", "Matthew", "Colette", "Abby", "Baylee");
	//////////if(UserNameQuestion == 'UserName'){
	//if its less than 200
	////////console.log("Successful username");
//////}else{
	//if it's greater or equal to 200
	////console.log("The username is no good");
//}
	//console.log(UserNameQuestion + UserName);
	 //Drivers MPG
	//var userName = new Array("Jason", "Mason", "Matthew", "Colette", "Abby", "Baylee");
	//var userPass = new Array("Password1", "Password2", "Password3", "Password4", "Password5", "Password6");
	//if(userName==''){
		//return true;
	//}
	//if (userPass==''){
		//return true;
	//}
//};




