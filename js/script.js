/*
* @Author: Pop Alexandru
* @Date:   2017-09-08 14:26:52
* @Last Modified by:   Pop Alexandru
* @Last Modified time: 2017-09-08 17:45:02
*/
var video = document.getElementsByTagName('video')[0];
var address = document.getElementById('address');
var mapp = document.getElementById('map');
var text = document.getElementById('text');
var arrow = document.getElementById('arrow');
    video.onended = function(e) {
    	test();
    };
    function test(){
    	video.className = "hidden";
    	video.style.transition = "all 10s";
     	address.style.display = "inline";
     	mapp.style.display = "block";
     	arrow.style.display ="none";
     	text.className="text2 ";
     	text.innerHTML = "j'vais";

     }
video.addEventListener('webkitAnimationEnd',function( event ) { 
	video.style.display = 'none'; 
}, false);
	function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 10,
          fullscreenControl : false
        });
        var infoWindow = new google.maps.InfoWindow({map: map});
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
         window.map = map;
        } else {
          handleLocationError(false, infoWindow, map.getCenter());
        }
    }
