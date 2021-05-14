"use strict"

let output = '';
let prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];

// prices.forEach(function (item, index){
//     output += `<p>${item} is at the index of ${index} </p>`
//     $('#output').html(output);
// });
//
// prices.forEach(function (price, index){
//     let tax = (price * 0.0825).toFixed(2);
//     let total = (parseFloat(price) + parseFloat(tax)).toFixed(2);
//     output += `<p> Item number ${index + 1}. Price $${price}. Tax is ${tax}. Total is ${total}`
//     $('#output').html(output);
// });

let pricesAfterTax = [];

pricesAfterTax = prices.map(function (price){
    let tax = (price * 0.0825).toFixed(2);
    let total = (parseFloat(price) + parseFloat(tax)).toFixed(2);
    return parseFloat(total);
});

pricesAfterTax.forEach(function (item) {
    output += `<p>${item}</p>`
    $('#output').html(output);
});

