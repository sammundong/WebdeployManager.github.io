// Hadan
var mapContainer1 = document.getElementById('hadan');
mapOption1 = { 
	center: new kakao.maps.LatLng(35.11133307638991, 128.9640575744152), 
	level: 3 // 지도의 확대 레벨
};

var map1 = new kakao.maps.Map(mapContainer1, mapOption1);

var markerPosition1  = new kakao.maps.LatLng(35.11133307638991, 128.9640575744152); 

var marker1 = new kakao.maps.Marker({
	position: markerPosition1
});

marker1.setMap(map1);	
