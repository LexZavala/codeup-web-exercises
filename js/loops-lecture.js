"use strict"
//
// var slices = 8;
// while (slices > 0) {
//     console.log("I'll have a slice");
//     slices = slices - 1;
//     console.log("Now there are " + slices + " left!");
// }
//
// // Pseudocode
//
// // Ask the user for input
// // Get the user input
// // Declare a user input variable
// // Store user input in variable
// // Declare a variable to the store total (accumulator)
// // Keep storing the new totals in the accumulator
// // Tell the user how to end the program (sentinel value)
// // Loop back around and do it all again, over and over until the user tells us to stop
//
// var priceOfItem = prompt("Enter the price of your first item");
// alert("The price of your item was $" + priceOfItem);
// var totalCost = priceOfItem;
// var userInput = "";
// //create sentinel value
// while(userInput !== "STOP") {
//     userInput = prompt("Enter the price of your next item \r\n\
//     Enter STOP when you are done");
//     if (userInput === "STOP"){
//         alert( "Alrighty, your final total is $" + totalCost);
//     } else {
//         priceOfItem = parseFloat(userInput);
//         totalCost = parseFloat(totalCost) + parseFloat(priceOfItem);
//         alert("Your total is now $" + totalCost.toFixed(2));
//     }

// var number = Math.floor(Math.random() * 6) +1;
// var guess;
// do {
//     guess = parseInt(prompt("Enter a number between 1 and 6"));
// }while(guess !== number)
//     alert("Your guess of " + guess + " matches the number generated by the computer: " + number);

var allCones = Math.floor(Math.random() * 50) +50;
console.log("Cones I started the day with " + allCones);
do {
    var conesSold = Math.floor(Math.random() * 5) + 1;

    if (conesSold > allCones){
        alert("Cannot sell you " + conesSold + " I only have " + allCones + " left!");
        console.log("Cannot sell you " + conesSold + " I only have " + allCones + " left!");
    } else {
        alert ("I have " + allCones + " and I am selling you " + conesSold);
        var allCones = allCones - conesSold;
        console.log("sold " + conesSold + " cones");
        console.log("Cones after sale " + allCones);
    }
} while (allCones > 0);
    alert("I am sorry, I sold all of my cones!");