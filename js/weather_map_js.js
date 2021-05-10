"use strict";

$.ajax("https://api.openweathermap.org/data/2.5/onecall" , {
    data: {
        APPID: WEATHER_MAP_TOKEN,
        lon: -98.4936,
        lat: 29.4241,
        units: "imperial",
        exclude: "minutely,hourly,current"
    }
}).done(function (resp){
    console.log(resp);
    // Date sorting variables
    var today = resp.daily[0];
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

    function renderWeather() {
        $('#date').html(organizedDate);
        $('#description').html(todayDescription);
        $('#temperature').html(currentTemp);
        $('#maxAndMin').html("Max: "+ maxTemp + " Min: " + minTemp);
        $('#feelsLike').html("Feels like: " + feelsLikeTemp);
    }

    renderWeather();

    console.log(todayDate);
    console.log(todayOverallTemp);
    console.log(currentTemp);
    console.log(todayDescription);
    console.log(humidity);
    console.log(feelsLike);
    console.log(feelsLikeTemp);
});

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