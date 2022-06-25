const API_KEY = "adebcffe7438e412d32fdbbcf4167da2";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng =position.coords.longitude;
    console.log(`lat : ${lat}, lng : ${lng}`);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        
        weather.innerHTML = data.weather[0].main;
        city.innerHTML = data.name;

    });
}
function onGeoError(){
    alert("can`t find you. no weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);

