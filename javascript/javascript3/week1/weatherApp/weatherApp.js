const btnGetCity = document.getElementById('btnGetCity');
const btnGetLoc = document.getElementById('btnGetLoc');
const displayMessage = document.getElementById("displayMessage");
const displayWeather = document.getElementById("displayWeather");

//applying onload to show the weather 
window.onload = () => {
    const localCity = localStorage.getItem("city");
    const localLatitude = localStorage.getItem("lat");
    const localLongitude = localStorage.getItem("lon");
    if (localCity) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${localCity}&appid=dd21c3c1e2f0d9ee54c07f78a56b8a9c&units=metric`
        fetchWeather(url);
    } else if (localLatitude && localLongitude) {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${localLatitude}&lon=${localLongitude}&appid=dd21c3c1e2f0d9ee54c07f78a56b8a9c&units=metric`
        fetchWeather(url);
    }
};

btnGetCity.addEventListener("click", getWeatherByCityName);
btnGetLoc.addEventListener("click", getWeatherByGeoLoc);

function getWeatherByCityName() {
    displayWeather.hidden = true;
  const cityInput = document.getElementById("cityInput").value;
    if (cityInput) {
        localStorage.setItem("city", cityInput);
        displayMessage.innerHTML = "Processing"
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=dd21c3c1e2f0d9ee54c07f78a56b8a9c&units=metric`
        fetchWeather(url);
    } else {
        displayMessage.innerHTML = "Type the city first"
    }
}

function getWeatherByGeoLoc() {
    displayWeather.hidden = true;
    function success(pos) {
        displayMessage.innerHTML = "Processing"
        localStorage.setItem("lat", pos.coords.latitude);
        localStorage.setItem("lon", pos.coords.longitude);
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=dd21c3c1e2f0d9ee54c07f78a56b8a9c&units=metric`
        fetchWeather(url);
    }
    function error(err) {
        displayMessage.innerHTML = "Couldn't get your current location"
    }
    navigator.geolocation.getCurrentPosition(success, error);
};

function fetchWeather(url) {
  fetch(url)
        .then(res => res.json())
        .then(data => {
            renderWeatherData(data);
        })

}

function renderWeatherData(data) {
    displayMessage.innerHTML = "";
    displayWeather.hidden = false;
    renderCityName(data.name);
    renderTemp(data.main.temp);
    renderIcon(data.weather[0].icon);
    renderWindSpeed(data.wind.speed);
    
    renderWindDirection(data.wind.deg);
    renderCloudness(data.clouds.all);
    renderSunriseSunset(data.sys.sunrise, data.sys.sunset);
    renderMap(data.coord.lat, data.coord.lon);
}

function renderSunriseSunset(sunriseUnixTime, sunsetUnixTime) {

    // multiplying by 1000 so that it comes up in milliseconds
    const dateSunrise = new Date(sunriseUnixTime * 1000);
    const dateSunset = new Date(sunsetUnixTime * 1000);

    const sunriseSpan = document.getElementById("sunrise");
    sunriseSpan.innerHTML = `Sunrise: ${dateSunrise.getHours()}:${dateSunrise.getMinutes()}`;

    const sunsetSpan = document.getElementById("sunset");
    sunsetSpan.innerHTML = `Sunset: ${dateSunset.getHours()}:${dateSunset.getMinutes()}`;
}

function renderCloudness(clouds) {
    const cloudsSpan = document.getElementById("clouds");
    cloudsSpan.innerHTML = "Cloudness:" + clouds + "%";
}

function renderWindSpeed(speed) {
    const windSpan = document.getElementById("wind");
    windSpan.innerHTML = "Wind speed: " + speed + " m/s";
}
//adding wind direction arrow as an optional
function renderWindDirection(deg) {
    const windArrow = document.getElementById("arrow");
    const degrees = deg - 90;
    windArrow.style.transform = `rotate(${degrees}deg)`;
}

function renderIcon(iconCode) {
    const img = document.querySelector("img");
    img.src = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
}

function renderTemp(temp) {
    const displayTemp = document.getElementById("temp");
    displayTemp.innerHTML = "+" + Math.round(temp) + "°";
}

function renderCityName(cityName) {
    const displayCity = document.getElementById("city");
    displayCity.innerHTML = cityName;
}

function renderMap(latitude, longitude) {

    //adding script for map callback to document
    const script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDFGlu0GRChxbWdneIqV7lkJrS8B3Hw-ts&callback=initMap';
    script.async = true;

    // attaching initMap callback function to the `window` object
    window.initMap = function () {
       const mapProp = {
            center: new google.maps.LatLng(latitude, longitude),
            zoom: 10,
        };
        map = new google.maps.Map(document.getElementById("map"), mapProp);
    };

    // Appending the 'script' element to 'head'
    document.body.appendChild(script);
}