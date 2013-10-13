//Lewie "Jason" Rogers, 10/10/2013, Expression_Personal

//Finding the area of a bedroom to re-tile
var width = prompt("What is the width of the room in feet?"); //Room width
var length = prompt("What is the length of the room in feet?");//Room length
var area = width * length;//Formula to find the sq area of a room
alert(" The area of your room is " + area + " sq feet")//Answer to user inputs
var tile = prompt("What is the size of the tile in inches?");
var convert = tile/12;
var final = area/convert;//Formula to find the sq area of a room
alert(" You need " + final + " tiles")//Answer to user inputs
console.log(final);//JS Console
