//Lewie "Jason" Rogers, 10/21/2013, Functions_Personal

//ERA or Earned Run Average
var earnedRuns = prompt("How many earned runs were charged to the pitcher?");//Total number of earned runs charged to the pitchers
var inningsPitched = prompt("How many innings did the pitcher pitch?");//Total number of innings pitched by the pitcher
var era = function(e, i){ //Function for finding ERA or How many runs the pitcher gives up for every 9 innings pitched.
	var completeGame = 9; //Number of innings for complete game
	var era = (e / i) * completeGame; //Formula for finding ERA
	return era; //Returns Result
}

var pitchersEra = era(earnedRuns, inningsPitched); //Variable to be output

console.log("The pitchers ERA is " + pitchersEra); //console to see results

//(earned runs / innings pitched) x 9 for number of innings per complete game = ERA or Earned Run Average






