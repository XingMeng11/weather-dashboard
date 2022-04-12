


city_name = "Alhambra";
my_api = "4cba51bc9bb6ffec7cf7a85280ce65b3";


function getlocationApi(my_api,city_name){
  var requesturl = "http://api.openweathermap.org/geo/1.0/direct?q=" + city_name + "&limit=&appid=" + my_api;

  fetch(requesturl)    
    .then(function (response){
      return response.json();
    })
    .then(function (data){
      localStorage.setItem("longtitude",data[0].lon);
      localStorage.setItem("latitude",data[0].lat);
    })
}

getlocationApi(my_api,city_name);
lon = localStorage.getItem("longtitude");
lat = localStorage.getItem("latitude");

function getWeatherInfo(lon, lat){
  var requesturl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat +  "&lon=" + lon + "&exclude=minutely,hourly,alerts&appid=" + my_api;
  fetch(requesturl)    
    .then(function (response){
      return response.json();
    })
    .then(function (data){
      localStorage.setItem("temperature",data.current.temp);
      localStorage.setItem("wind",data.current.wind_speed);
      localStorage.setItem("humidity",data.current.humidity);
      localStorage.setItem("uv",data.current.uvi);
    })
}

getWeatherInfo(lon, lat);

temperature = (parseFloat(localStorage.getItem("temperature")) - 273.15) * 9 / 5   + 32 ;
var current_temp = document.querySelector(".temperature");
current_temp.textContent = "Temp: " + temperature.toFixed(2) ;

wind_speed = localStorage.getItem("wind");
var current_wind = document.querySelector(".wind");
current_wind.textContent = "Wind Speed: " +  wind_speed;

humidity = localStorage.getItem("humidity");
var current_humidity = document.querySelector(".humidity");
current_humidity.textContent = "Humidity: " +  humidity;

uv = localStorage.getItem("uv");
var current_uv = document.querySelector(".uv");
current_uv.textContent = "UV index: " +  uv;



function getWeatherInfo(lon, lat){
    var requesturl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat +  "&lon=" + lon + "&exclude=minutely,hourly,alerts&appid=" + my_api;
    fetch(requesturl)    
      .then(function (response){
        return response.json();
      })
      .then(function (data){
        console.log(data);
        localStorage.setItem("predict_icon1",data.daily[0].weather[0]["icon"]);
        localStorage.setItem("predict_temp1",data.daily[0].temp["day"]);
        localStorage.setItem("predict_wind_speed1",data.daily[0].wind_speed);
        localStorage.setItem("predict_humidity1",data.daily[0].humidity);
      })
  }
  
predict_icon1 = localStorage.getItem("predict_icon1");
var predict_icon1_show = document.querySelector("#day1").querySelector(".icon");
predict_icon1_show.textContent = predict_icon1

predict_temperature1 = parseFloat(localStorage.getItem("predict_temp1"));
var predict_temp1_show = document.querySelector("#day1").querySelector(".temperature");
predict_temp1_show.textContent = "Temp: " +  ((predict_temperature1 - 273.15) * 9 / 5   + 32).toFixed(2) + "F";

predict_wind1 = parseFloat(localStorage.getItem("predict_wind_speed1"));
var predict_wind1_show = document.querySelector("#day1").querySelector(".wind");
predict_wind1_show.textContent = "Wind: " +  predict_wind1.toFixed(2) + "MPH";

predict_humidity1 = parseFloat(localStorage.getItem("predict_humidity1"));
var predict_humidity1_show = document.querySelector("#day1").querySelector(".humidity");
predict_humidity1_show.textContent = "Humidity: " +  predict_humidity1.toFixed(0) + "%";

