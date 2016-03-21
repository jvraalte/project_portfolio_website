$( document ).ready(function() {
/*	$("h1").on("click", function(){
		alert("you clicked me!")
	});*/
	$("h1").fadeOut(1000);
	$("h1").fadeIn(1000);
	$("h1").slideDown(3000);
	/*$("h1").slideUp(3000);*/

	$("h1").on("click", function(){
		alert("hello!")
	});

	$("p").on("myCustomEvent", function() {
		alert("hello")
	});
	/*alert("hello")*/
});

