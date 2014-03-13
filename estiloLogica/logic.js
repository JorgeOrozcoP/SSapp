var misREctanguloas = new Array();

function insertaNuevoRegistro(){

	var centro = miMapa.getCenter();

	var coords = [
      centro,
      new google.maps.LatLng(centro.lat(), centro.lng()+0.0010),
      new google.maps.LatLng(centro.lat()+0.0010, centro.lng()+0.0010),
      new google.maps.LatLng(centro.lat()+0.0010, centro.lng())
  	];

	 var nuevoRect = new google.maps.Polygon({
	    paths: coords,
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