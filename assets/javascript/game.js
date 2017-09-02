$(document).ready(function() {
	console.log("Start game")

var wins = 0;
var losses = 0;
var userScore = 0;		
   
// Generates a random number to start the game 
var randomnumber = Math.floor(Math.random() * 120) + 19;
	$("#randomnum-div").text(randomnumber);        

// Generates a random number for each crystal at start of game
var crystal1 = Math.floor(Math.random() * 12) + 1;
console.log("crystal 1 = " + crystal1);

var crystal2 = Math.floor(Math.random() * 12) + 1;
console.log("crystal 2 = " + crystal2);

var crystal3 = Math.floor(Math.random() * 12) + 1;
console.log("crystal 3 = " + crystal3);

var crystal4 = Math.floor(Math.random() * 12) + 1;
console.log("crystal 4 = " + crystal4);


// Saves points for each gem to User Score on click
$("#c1").on("click", function() {
	userScore = userScore + crystal1;
	$("#yourscore-div").text(userScore);
	console.log(userScore);
	winner();
	loser();
});
$("#c2").on("click", function() {
	userScore = userScore + crystal2;
	$("#yourscore-div").text(userScore);
	console.log(userScore);
	winner();
	loser();
});
$("#c3").on("click", function() {
	userScore = userScore + crystal3;
	$("#yourscore-div").text(userScore);
	console.log(userScore);
	winner();
	loser();
});
$("#c4").on("click", function() {
	userScore = userScore + crystal4;
	$("#yourscore-div").text(userScore);
	console.log(userScore);
	winner();
	loser();
});


// function winner() {
// 	if (userScore === randomnumber) {
// 	console.log("You win");
// 	window.alert("You win! Let's do it again!")
// 	win++;	
// 	$(wins-div).text(winner);
// }};


function loser() {
	if (userScore < randomnumber) {
	console.log("You lost");
	window.alert("You lost. Please try again.")	
	losses++;
	$("#losses-div").text(losses);	
	reset()
}};

function reset() {
	console.log("Reset game")
	userScore = 0;
	$("#yourscore-div").text(userScore);
};	

randomnumber = 0;
var randomnumber = Math.floor(Math.random() * 120) + 19;
	$("#randomnum-div").text(randomnumber); 

var crystal1 = Math.floor((Math.random() * 12) + 1);
console.log("crystal 1 = " + crystal1);
var crystal2 = Math.floor((Math.random() * 12) + 1);
console.log("crystal 2 = " + crystal2);
var crystal3 = Math.floor((Math.random() * 12) + 1);
console.log("crystal 3 = " + crystal3);
var crystal4 = Math.floor((Math.random() * 12) + 1);
console.log("crystal 4 = " + crystal4);
 
});
