$(document).ready(function(){
	var select = document.getElementById("item-npp")
	, segmnt = select.value
	// , result = $("")
	, addr = $("#sub-btn").attr("cmcc-ajax");
	$.ajax({
		url: addr,
		statusCode: {404: function(){alert("Page not found!");}}		
	}).done(function() {
		console.log("in");
		// console.log(lala);
		// var dataset = data.data;
		// console.log(dataset);
	});
	select.onchange = function(){
		segmnt = this.value;
		console.log(segmnt);
	};
});