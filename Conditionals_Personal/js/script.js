//Lewie "Jason" Rogers, 10/10/2013, Conditionals_Personal

//What is my batting average?
var atBats = prompt("Enter number of at-bats.");//Total number of at-bats
var baseHits = prompt("Enter number of basehits");//Number of basehits
var walks = prompt("How many walks have you earned");//Walks are subtracted from at-bats
var totalAtBats = atBats - walks;//Finding number of at-bats for batting average
var battingAverage = baseHits /totalAtBats;//Actual batiing average
alert("Your batting average is " + battingAverage);//Gives player results
if(battingAverage < .280){
//if its less than .280
	console.log("Sorry you did not qualify for All-Stars.");
 }else{
	console.log("You qualify for All-Stars!");
	}
	console.log(battingAverage);//Displays batting average in console