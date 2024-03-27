var mapContainer5 = document.getElementById('kyungsung'),
mapOption5 = { 
	center: new kakao.maps.LatLng(35.1371905, 129.101708), 
	level: 3 // 지도의 확대 레벨
};

var map5 = new kakao.maps.Map(mapContainer5, mapOption5);

var markerPosition5  = new kakao.maps.LatLng(35.1371905, 129.101708); 

var marker5 = new kakao.maps.Marker({
	position: markerPosition5
});

marker5.setMap(map5);
