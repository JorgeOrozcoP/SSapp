var misREctanguloas = new Array();
var miMapa;

var misVeggies = [false, false, false, false, false, false];

function initialize() {
var mapOptions = {
  center: new google.maps.LatLng(18.983,-97.783),//Acatzingo
  zoom: 16,
  mapTypeId: google.maps.MapTypeId.SATELLITE
};
miMapa = new google.maps.Map(document.getElementById("map-canvas"),
    mapOptions);
}

//iniciar mapa
google.maps.event.addDomListener(window, 'load', initialize);


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
	    fillColor: "ForestGreen",
	    fillOpacity: 0.7,
	    strokeColor: "Green",
	    strokeOpacity: 1.0
	  });

	misREctanguloas.push(nuevoRect);

	nuevoRect.setMap(miMapa);

	document.getElementById("contenedorVeggies").style.display = "block";

}

function botonVeggieAction(idVeggie){

	if(misVeggies[idVeggie] == false){
		document.getElementById("v"+idVeggie).style.backgroundImage = "url('../img/veggies/"+idVeggie+"s.png')";
		misVeggies[idVeggie] = !misVeggies[idVeggie];
	}
	else{
		document.getElementById("v"+idVeggie).style.backgroundImage = "url('../img/veggies/"+idVeggie+".png')";
		misVeggies[idVeggie] = !misVeggies[idVeggie];
	}
}