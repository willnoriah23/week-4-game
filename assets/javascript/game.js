// var crystalCollector {


// setupGame: function()	{
// 	var random = Math.floor(Math.random() * 101) + 19;
// 	$("#random-number").html(random);	

// }

$(document).ready(function() {

	$("#crystals").on("click", function() {
	 var random = Math.floor(Math.random() * 12) + 1;
     $("#random-number").html(random);	
  });

    });







// crystalCollector.setupGame() 

