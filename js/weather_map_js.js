"use strict";

mapboxgl.accessToken = 'pk.eyJ1IjoibGV4emF2YWxhIiwiYSI6ImNrb2VnNzR3czBhOGkycHMzd3NoeW1jdnYifQ.u5ISMGdLEU1QCy4rlCbOzw';
var map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/navigation-guidance-night-v4', // style URL
    center: [-98.4936, 29.4241], // starting position [lng, lat]
    zoom: 10 // starting zoom
});

var marker = new mapboxgl.Marker({
    color: "#06d6a0",
}).setLngLat([-98.4936, 29.4241])
    .addTo(map);

var popup = new mapboxgl.Popup()
    .setLngLat(marker.getLngLat())
    .setHTML("<h3 class='libertyFont'>Statue of Liberty</h3>")
    // .addTo(map);

// popup.addClassName('libertyFont'); took this off so that I could add it to the h3 instead, making it consistent

marker.setPopup(popup);
marker.setDraggable(true);

marker.on('dragend', function (){
    var newCoords = marker.getLngLat().toArray();
    console.log(newCoords);
    $('#allWeather').empty();
    weatherPanels(newCoords);
    marker.setPopup();
});

var coords = marker.getLngLat().toArray();
console.log(coords);

function weatherPanels(coordinates){
    $.ajax("https://api.openweathermap.org/data/2.5/onecall", {
        data: {
            APPID: WEATHER_MAP_TOKEN,
            lon: coordinates[0],
            lat: coordinates[1],
            units: "imperial",
            exclude: "minutely,hourly,current"
        }
    }).done(function (resp) {
        console.log(resp);
        var html = '';
        for (var i = 0; i <= 4; i++) {
            // Date sorting variables
            var today = resp.daily[i];
            console.log(today);
            var todayDate = new Date(today.dt * 1000);
            var shortDayName = todayDate.toLocaleString('en-us', {weekday: 'long'});
            var shortMonth = todayDate.toLocaleString('en-us', {month: 'long'});
            var shortDayNum = todayDate.toLocaleString('en-us', {day: 'numeric'});
            var shortYear = todayDate.toLocaleString("en-US", {year: "numeric"})
            var organizedDate = shortDayName + ", " + shortMonth + " " + shortDayNum + " " + shortYear;

            // Rest of variables
            var todayOverallTemp = today.temp;
            var currentTemp = todayOverallTemp.day.toFixed() + "°F";
            var maxTemp = todayOverallTemp.max.toFixed() + "°F";
            var minTemp = todayOverallTemp.min.toFixed() + "°F";
            var todayDescription = today.weather[0].description;
            var humidity = today.humidity + "%";
            var feelsLike = today.feels_like;
            var feelsLikeTemp = feelsLike.day.toFixed() + "°F";
            var bothMaxMin = "Max: " + maxTemp + " Min: " + minTemp



            function renderWeather() {
                $('#allWeather').append(
                    '<div class="card col-2 " style="width: 18rem;">'
                    + '<div class=""><div class="card-body"><h5 class="card-title date" id="date">' + organizedDate
                    + '</h5><p class="card-text description" id="description">'
                    + todayDescription + '</p></div>'
                    + '<ul class="list-group list-group-flush">'
                    + '<li class="list-group-item temperature">' + currentTemp + '</li>'
                    + '<li class="list-group-item maxAndMin">' + bothMaxMin + '</li>'
                    + '<li class="list-group-item feelsLike">'+ "Feels Like: " + feelsLikeTemp + '</li>'
                    + '</ul>'
                    + '</div>'
                    + '</div>'
                );

            }
            renderWeather();
        }

        // console.log(todayDate);
        // console.log(todayOverallTemp);
        // console.log(currentTemp);
        // console.log(todayDescription);
        // console.log(humidity);
        // console.log(feelsLike);
        // console.log(feelsLikeTemp);
    });
}

weatherPanels(coords);

//     ?lat=33.44&lon=-94.04&exclude=hourly,minutely,current&appid=" + WEATHER_MAP_TOKEN).done(function (resp){
//     console.log(resp);
//     var today = resp.daily[0]
//     var todayDate = new Date(today.dt * 1000);
//     console.log(todayDate);
// });

// var date = new Date(dailyForecast.dt * 1000);
// var human = date.toLocaleString();
// console.log(human);
// var humanDay = todayDate.toLocaleString('en-us', {weekday: 'long'});
// console.log(humanDay);
// var humanMonth = todayDate.toLocaleString('en-us', {month: 'long'});
// console.log(humanMonth);
// var humanDate = todayDate.toLocaleString('en-us', {day: 'numeric'});
// console.log(humanDate)
// var humanYear = todayDate.toLocaleString("en-US", {year: "numeric"})
// console.log(humanYear)