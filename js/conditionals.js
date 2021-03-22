"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
function analyzeColor (color){
    if (color === "blue"){
        return "blue is the color of the sky";
    } else if (color === "red"){
        return "Strawberries are red";
    } else if  (color === "cyan"){
        return "I don't know anything about cyan";
    }
}

console.log(analyzeColor("blue"));
console.log(analyzeColor("red"));
console.log(analyzeColor("cyan"));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
console.log(randomColor)
switch (randomColor){
case "blue":
    alert("blue is the color of the sky");
    break;
case "red":
    alert("Strawberries are red");
    break;
case "cyan":
    alert("I don't know anything about cyan");
    break;
default:
    alert ("This color I do not identify");
}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
var colorInput = prompt("Enter a color of your liking for a fun fact").toLowerCase()
analyzeColor(colorInput);
alert(analyzeColor(colorInput));
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal (luckNum, totalAmount){
    var bill;
    switch (luckNum){
        case 0:
        bill = totalAmount
        alert("Sorry there is no discount for this, your total is $" + bill);
        break;
        case 1:
        bill = (totalAmount - (totalAmount * .10)).toFixed(2);
        alert("Congrats you get a 10% discount, your total is $" + bill);
        break;
        case 2:
        bill = (totalAmount - (totalAmount * .25)).toFixed(2);
        alert("Congrats you get a 25% discount, your total is $" + bill);
        break;
        case 3:
        bill = (totalAmount - (totalAmount * .35)).toFixed(2);
        alert("Congrats you get a 35% discount, your total is $" + bill);
        break;
        case 4:
        bill = (totalAmount - (totalAmount * .50)).toFixed(2);
        alert("Congrats you get a 50% discount, your total is $" + bill);
        break;
        case 5:
        bill = (totalAmount - (totalAmount * 1)).toFixed(2);
        alert("Congrats you get a 100% discount, your total is $" + bill);
        break;
    }
    return bill;
}
console.log(calculateTotal(4, 100));
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
    var luckyNumber = Math.floor(Math.random() * 6);
    var totalBill = prompt("What was your total?");
    var finalBill = calculateTotal(luckyNumber, totalBill);
    alert("Your lucky number was "+ luckyNumber + " which makes your price before the discount $" + totalBill + " and your price after the discount $" + finalBill);
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
if (confirm("Would you like to enter a number?")){
    var numberInput = prompt("Enter a number of your liking :)");
}
if  (!isNaN(numberInput)){
    (numberInput % 2 == 0) ? alert(numberInput + " is even") : alert(numberInput + " is odd");
    alert(numberInput + " plus 100 equals to " + (parseFloat(numberInput) + 100));
    (numberInput > 0) ? alert(numberInput + " is positive") : alert(numberInput + " is negative");
} else {
    alert("That is not a number");
}

var num = prompt("enter your number")
function isPos (num){
    if (num > 0) {
        alert(num + " is Positive ");
    } else {
        alert(num + " is Negative");
    }
}
function isOdd (num){
    if (num % 2 == 0) {
        alert(num + " is Even ");
    } else {
        alert(num + " is Odd");
    }
}
function plus100 (num){
    alert(num + " plus 100 is " + ((parseFloat(num)) + 100));
}

if (!isNaN(num)) {
    isPos(num);
    plus100(num);
    isOdd(num);
} else {
    alert("this is not a number");
}
