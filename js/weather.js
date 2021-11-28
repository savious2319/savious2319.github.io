const API_KEY = '8bc84835dde898db83ab1a239d6898d7';

function onGeoSuccess(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;
}

function onGeoError(){
    alert('Cannot find your location.');
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);