(function() {
	var params={};
	window.location.search
		.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(str,key,value) {
				params[key] = value;
			}
		);

	$( ".frage-input" ).val(params.firstname) ;

}());