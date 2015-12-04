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

 