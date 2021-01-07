//Select elements
const iconEle = document.querySelector(".weather-icon");
const tempEle = document.querySelector(".temp");
const descEle = document.querySelector(".description");
const locationEle = document.querySelector(".location");
const notificationEle = document.querySelector(".notification");

//App data
const weather = {};

weather.temperature = {
    unit: "celsius"
}

//App consts and vars
const Kelvin = 273;
//API KEY
const key = "35049d5dd83bcba24b8fb7425d086641";

//check if browser supports geolocation
if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError);
}else{
    notificationEle.style.display = "block";
    notificationEle.innerHTML = "Browser doesn't Support Geolocation";
}
//set user's position
function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    getWeather(latitude, longitude);
}

//show error if there is any
function showError(error){
    notificationEle.style.display = "block";
    notificationEle.innerHTML = `${error.message}`;
}

//get weather from API
function getWeather(lati, longi){
    let api = `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=${key}`;
    console.log(api);

    fetch(api).then(function(response){
        let data = response.json();
        return data;
    }).then(function(data){
        weather.temperature.value = Math.floor(data.main.temp - Kelvin);
        weather.description = data.weather[0].description;
        weather.iconId = data.weather[0].icon;
        weather.city = data.name;
        weather.country = data.sys.country;
    }).then(function(){
        displayWeather();
    });
}

//display weather
function displayWeather(){
    iconEle.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
    tempEle.innerHTML = `${weather.temperature.value}°<span>C</span>`;
    descEle.innerHTML = weather.description;
    locationEle.innerHTML = `${weather.city}, ${weather.country}`;
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