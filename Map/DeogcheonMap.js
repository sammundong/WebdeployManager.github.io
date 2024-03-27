var mapContainer4 = document.getElementById('deogcheon'),
mapOption4 = { 
	center: new kakao.maps.LatLng(35.2102581, 129.008073), 
	level: 3 // 지도의 확대 레벨
};

var map4 = new kakao.maps.Map(mapContainer4, mapOption4);

var markerPosition4  = new kakao.maps.LatLng(35.2102581, 129.008073); 

var marker4 = new kakao.maps.Marker({
	position: markerPosition4
});

marker4.setMap(map4);
