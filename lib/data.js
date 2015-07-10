$(function() {
	if (device.ios()) {
	    $("#link").attr( "href","https://itunes.apple.com/fr/app/barid-bank-mobile/id720775151?mt=8" );
	} else if (device.android()) {
	    $("#link").attr( "href","https://play.google.com/store/apps/details?id=com.saphir.baridbankmobile&hl=fr" );
	} else if (device.blackberry()) {
	    $("#link").attr( "href","https://appworld.blackberry.com/webstore/content/37585890/?countrycode=MA&lang=fr" );
	} else{
	    $("#link").attr( "href","#" );
	}
});

(function($) {
    $(window).load(function () {
$.magnificPopup.open({
 items: {
	     src: 'http://www.youtube.com/watch?v=vt50CJ8Hkns'
     },
  type: 'iframe',
    mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
		 fixedContentPos: false,

  iframe: {
	    	markup: '<div class="mfp-iframe-scaler">'+
            		'<div class="mfp-close"></div>'+
            		'<iframe id="player" class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
            		'</div>', 
        patterns: {
            youtube: {
	              index: 'youtube.com/', 
	              id: 'v=', 
	              src: '//www.youtube.com/embed/%id%?autoplay=1&enablejsapi=1' 
		        }
		     },
		     srcAction: 'iframe_src', 
			 

	
     } ,	
	  callbacks: {
  open: function () {
    new YT.Player('player', {
      events: {
        'onStateChange': onPlayerStateChange
       }
    });
  }
}
	 
  
});
   });
})(jQuery);

function onPlayerStateChange(event) {
	
    if (event.data == YT.PlayerState.ENDED) {
        $.magnificPopup.close();
    }
}