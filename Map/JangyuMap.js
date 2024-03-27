var mapContainer6 = document.getElementById('jangyu'),
mapOption6 = { 
	center: new kakao.maps.LatLng(35.1945656, 128.801966), 
	level: 3 // 지도의 확대 레벨
};

var map6 = new kakao.maps.Map(mapContainer6, mapOption6);

var markerPosition6  = new kakao.maps.LatLng(35.1945656, 128.801966); 

var marker6 = new kakao.maps.Marker({
	position: markerPosition6
});

marker6.setMap(map6);
