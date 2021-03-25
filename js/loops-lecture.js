// "use strict"
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
    }
}
