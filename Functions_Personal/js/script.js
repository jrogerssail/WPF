//Lewie "Jason" Rogers, 10/21/2013, Functions_Personal

//ERA or Earned Run Average
var earnedRuns = prompt("How many earned runs were charged to the pitcher?");//Total sales
var inningsPitched = prompt("How many innings did the pitcher pitch?");//Total sales
var era = function(e, i){
	var completeGame = 9;
	var era = (e / i) * completeGame;
	return era;
}

var pitchersEra = era(earnedRuns, inningsPitched);

console.log("The pitchers ERA is " + pitchersEra);

//(earned runs / innings pitched) x 9 for number of innings per complete game = ERA or Earned Run Average






