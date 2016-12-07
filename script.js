(function() {
	var params={};
	window.location.search
		.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(str,key,value) {
				params[key] = value;
			}
		);

	$( ".frage-input1" ).val(params.firstname);
	$( ".frage-input2" ).val(params.farbe);

}());

var validate = function () {

    var korrekteAntwort = "peter";
    var antwort = $( ".frage-input").val().toLowerCase();

    if (antwort === korrekteAntwort) {
        $('#auflösung-aufgabe1').text("Hurra!!!");
    } else {
        $('#auflösung-aufgabe1').text("FALSCH!!!");
    }
};