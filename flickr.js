$(document).ready(function() {
    $("#search").click(function(){
	$("#images").empty();
    	var value = $("#text").val();
    	var flickerAPI="https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    	$.getJSON( flickerAPI, {
    		tags: value,
    		tagmode: "any",
    		format: "json"
  		}).done(function(data) {
        	$.each(data.items, function(i,item) {
          		$("<img>").attr("src", item.media.m).appendTo("#images");
        	});
		});
    });
    $("#searchF").click(function(){
	$("#images").empty();	
    	var flickerAPI="https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    	$.getJSON( flickerAPI, {
    		tags: "fuenlabrada",
    		tagmode: "any",
    		format: "json"
  		}).done(function(data) {
        	$.each(data.items, function(i,item) {
          		$("<img>").attr("src", item.media.m).appendTo("#images");
        	});
		});
    });
});
