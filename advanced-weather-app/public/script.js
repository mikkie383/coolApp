const searchEle = document.querySelector('.city-search');
const searchBox = new google.maps.places.SearchBox(searchEle);
searchBox.addListener('places_changed', () => {
    const place = searchBox.getPlaces()[0];
    if(place == null) return
    const latitude = place.geometry.location.lat();
    const longitude = place.geometry.location.lng();
    fetch('/weather', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            latitude: latitude,
            longitude: longitude
        })
    }).then(res => res.json()).then(data => {
        console.log(data);
        setWeatherData(data, place.formatted_address);
    });
});
//use Skycons with canvas
//const icon = new Skycons({color: '#222'});
//icon.set('icon', 'clear-day');
//icon.play();
const weather_icon = document.getElementById('icon');
const locationEle = document.querySelector('.location');
const statusEle = document.querySelector('.status');
const windEle = document.querySelector('[valueW]');
const tempEle = document.querySelector('[valueT]');
const preciEle = document.querySelector('[valueH]');

weather_icon.src = "http://openweathermap.org/img/w/01d.png";

//change temperaturn variables
const weather = {};

weather.temperature = {
    unit: "celsius"
}
const Kelvin = 273;

function setWeatherData(data, place){
    locationEle.textContent = place;
    statusEle.textContent = data.weather[0].main;
    weather.temperature.value = Math.floor(data.main.temp - Kelvin);
    tempEle.innerHTML = `${weather.temperature.value}°<span>C</span>`;
    preciEle.textContent = `${data.main.humidity}%`;
    windEle.textContent = data.wind.speed;
    const icon_url = "http://openweathermap.org/img/w/"+data.weather[0].icon+".png";
    weather_icon.src =  icon_url;
}

//change celsius <-> fahrenheit
tempEle.addEventListener("click", function(){
    if(weather.temperature.value === undefined) return;

        if(weather.temperature.unit == "celsius"){
            let fahrenheit = (weather.temperature.value) * 9/5 + 32;
            fahrenheit = Math.floor(fahrenheit);

            tempEle.innerHTML = `${fahrenheit}°<span>F</span>`;
            weather.temperature.unit = "fahrenheit";
        }else{
            tempEle.innerHTML = `${weather.temperature.value}°<span>C</span>`;
            weather.temperature.unit = "celsius";
        }
});