// (function () {
"use strict"

var theTruck = {
    make: "Toyota",
    model: "Tacoma",
    truck: true,
    seat:5,
    color: "Voodo Blue",
    mileage: 10,
    drive: function (){
        console.log("vroom vroom!");
        this.mileage++;
        },
    packages: {
        technology:false,
        navigation: false,
        premiumOffRoad: true
    }
}

var yourTruck = {
    make: "Ford",
    model: "F150",
    truck: true,
    seat:6,
    color: "Red",
    mileage: 101250,
    tonneau: false
}

function isNew(car){
    return car.mileage <= 15;
}
// })();
