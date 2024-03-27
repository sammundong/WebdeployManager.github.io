// Nampo
var mapContainer2 = document.getElementById('nampo'),
mapOption2 = { 
	center: new kakao.maps.LatLng(35.0993410, 129.027127), 
	level: 3 // 지도의 확대 레벨
};

var map2 = new kakao.maps.Map(mapContainer2, mapOption2);

var markerPosition2  = new kakao.maps.LatLng(35.0993410, 129.027127); 

var marker2 = new kakao.maps.Marker({
	position: markerPosition2
});

marker2.setMap(map2);
