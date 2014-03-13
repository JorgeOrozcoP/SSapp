var misREctanguloas = new Array();

function insertaNuevoRegistro(){

	var centro = miMapa.getCenter();

	var bounds = new google.maps.LatLngBounds(
      centro,
      new google.maps.LatLng(centro.lat()+0.0010, centro.lng()+0.0010)
  	);

	 var nuevoRect = new google.maps.Rectangle({
	    bounds: bounds,
	    editable: true,
	    draggable: true,
	    fillColor: "Lime",
	    fillOpacity: 0.5,
	    strokeColor: "LimeGreen",
	    strokeOpacity: 1.0
	  });

	misREctanguloas.push(nuevoRect);

	nuevoRect.setMap(miMapa);



}