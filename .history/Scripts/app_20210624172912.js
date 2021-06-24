/* custom scripts go here */

//IIFE - Immediately Invoked Function Expression
//AKA: Anonymous Self-Executing Function

(function() {

	// initialization function
	function Start() {
		console.log("App started...");
	}

	// event listener
	window.addEventListener("load", Start);

})();


