$(document).ready(function() {
	$(".box1").click(function() {
		$(".box1").toggleClass("animate1");
	});

	$(".box2").click(function() {
		$(".box2").toggleClass("animate2");
	});

	$(".box3").hover(function() {
		$(".box3").toggleClass("animate2");
	});
	$(".box4").click(function() {
		$(".box4").toggleClass("animate3");
	});
});