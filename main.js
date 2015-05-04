$(document).ready(function(){
	var select = document.getElementById("item-npp")
	, segmnt = select.value
	// , result = $("")
	, addr = $("#sub-btn").attr("cmcc-ajax");
	$.ajax({
		url: addr,
		statusCode: {404: function(){alert("Page not found!");}}		
	}).done(function(data) {
		console.log($JSON.parse(data));
		// $.each(data, function(n,eval(value))){
		// 	console.log(n + ':' );
		// });
	});

	select.onchange = function(){
		segmnt = this.value;
	};

});