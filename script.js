(function() {
	var params={};
	window.location.search
		.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(str,key,value) {
				params[key] = value;
			}
		);

	$( ".frage-input" ).val(params.firstname) ;

}());

var validate = function () {

    var korrekteAntwort = "peter";
    var antwort = $( ".aufgabe-input").val().toLowerCase();

    if (antwort === korrekteAntwort) {
        $('#auflösung-aufgabe1').text("Hurra!!!");
    } else {
        $('#auflösung-aufgabe1').text("FALSCH!!!");
    }
};