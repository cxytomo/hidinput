$(document).ready(function(){
	var select = document.getElementById("item-npp")
	, segmnt = select.value
	// , result = $("")
	, addr = $("#sub-btn").attr("cmcc-ajax");
	$.ajax({
		url: addr,
		statusCode: {404: function(){alert("Page not found!");}}		
	}).done(function(data) {
		var rest;
		console.log(data);
		$.each(data, function(n,value){
			console.log(n + ':' + value);
		});
		rest = $('ul').html(licon);
		rest.attr('id','result');
		$('.content').append(rest);
	});

	select.onchange = function(){
		segmnt = this.value;
	};

});