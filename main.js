$(document).ready(function(){
	var select = document.getElementById("item-npp")
	, segmnt = select.value
	// , result = $("")
	, addr = $("#sub-btn").attr("cmcc-ajax");
	$.ajax({
		url: addr,
		statusCode: {404: function(){alert("Page not found!");}}		
	}).done(function(data) {
		console.log($);
		data.each(function(n,value){
			value.each(function(n,value){
				console.log(value);
			});
		});
	});

	select.onchange = function(){
		segmnt = this.value;
	};

});