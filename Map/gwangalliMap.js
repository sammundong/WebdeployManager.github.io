var mapContainer8 = document.getElementById('Gwangalli'),
mapOption8 = { 
	center: new kakao.maps.LatLng(35.154874971197174, 129.11785992379328), 
	level: 3 // 지도의 확대 레벨
};

var map8 = new kakao.maps.Map(mapContainer8, mapOption8);

var markerPosition8  = new kakao.maps.LatLng(35.154874971197174, 129.11785992379328); 

var marker8 = new kakao.maps.Marker({
	position: markerPosition8
});

marker8.setMap(map8);
