"use strict"

let output = '';
let prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];

prices.forEach(function (item, index){
    output += `<p>${item} is at the index of ${index} </p>`
    $('#output').html(output);
});

prices.forEach(function (item, index){
    let tax = (item * 0.0825).toFixed(2);
    let total = (parseFloat(item) + parseFloat(tax)).toFixed(2);

});

