var mapContainer7 = document.getElementById('Haeundae'),
mapOption7 = { 
	center: new kakao.maps.LatLng(35.1619089148594, 129.1606821668149), 
	level: 3 // 지도의 확대 레벨
};

var map7 = new kakao.maps.Map(mapContainer7, mapOption7);

var markerPosition7  = new kakao.maps.LatLng(35.1619089148594, 129.1606821668149); 

var marker7 = new kakao.maps.Marker({
	position: markerPosition7
});

marker7.setMap(map7);	