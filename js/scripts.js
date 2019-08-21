$(document).ready(function(){
	$("#palindrome").submit(function(event){
		event.preventDefault();
		var newPhrase = $("#phrase").val();
		var splitPhrase = newPhrase.split("");

		var backwardsPhrase = splitPhrase.reverse();

		var joinedBackwardsPhrase = backwardsPhrase.join("");
		console.log(joinedBackwardsPhrase);
		console.log(newPhrase);



			// for (var i=0; i<newPhrase.length; i++){
			// 	for(var x=0; x<joinedBackwardsPhrase.length; x++){
					if(newPhrase !== joinedBackwardsPhrase){
						alert("Not!")
					}else {
						alert("Is!")
					}
				



$("#result").text(result);
			// for(var i=0; i<splitPhrase.length; i++){
			// 	for(var x=0; x<backwardsPhrase.length; i++){
			// 		if ()
			// 	}
			// }
		// var joinedBackwardsPhrase = backwardsPhrase.join();


			// for (var i=0; i<phrase.length; i++){
			// 	var
			// }

	});
});
