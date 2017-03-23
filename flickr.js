$(document).ready(function() {
    $("#search").click(function(){
    	var value = $("#text").val();
    	$.getJSON( "http://api.flickr.com/services/feeds/photos_public.gne?tags="+value+"&tagmode=any&format=json&jsoncallback=?")
    	.done(function(data) {
        	$.each(data.items, function(i,item) {
          		$("<img>").attr("src", item.media.m).appendTo("#images");
        	});
		});
    });
});