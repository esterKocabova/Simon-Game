
var gamePattern = []
var buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence() {
   return Math.floor(Math.random() * 4);
}

var randomNumber = nextSequence();

var randomChosenColour = buttonColours[randomNumber]

gamePattern.push(randomChosenColour)

console.log(randomNumber)

console.log(randomChosenColour)

console.log(amePatern)