(function() {

	var params={};
	window.location.search
		.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(str,key,value) {
				params[key] = value;
			}
		);

	$( "form" ).append("<input name='firstname' type='hidden' value=" + params.firstname + ">");

}());