var mapContainer3 = document.getElementById('seomyeon'),
mapOption3 = { 
	center: new kakao.maps.LatLng(35.1567039, 129.061105), 
	level: 3 // 지도의 확대 레벨
};

var map3 = new kakao.maps.Map(mapContainer3, mapOption3);

var markerPosition3  = new kakao.maps.LatLng(35.1567039, 129.061105); 

var marker3 = new kakao.maps.Marker({
	position: markerPosition3
});

marker3.setMap(map3);

