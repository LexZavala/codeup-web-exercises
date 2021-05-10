"use strict";

$.ajax("https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,minutely,current&appid=" + WEATHER_MAP_TOKEN).done(function (resp){
    console.log(resp);
    var today = resp.daily[0]
    var todayDate = new Date(today.dt * 1000);
    console.log(todayDate);
});