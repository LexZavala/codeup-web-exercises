"use strict"

// The following is code for Excersises 1 & 2
console.log("Hello from External JavaScript");
    alert("Welcome to my Website!");
    var favoriteColor = prompt("What is your favorite color?");
    alert( "Great " + favoriteColor + " is my favorite color as well!")

// The following is code for Excercise 3 (Rental)
console.log ("Movie Rental Prompt Starts")

    var littleMermaidDays = prompt("How many days did you rent 'Little Mermaid'?");
    var brotherBearDays = prompt("How many days did you rent 'Brother Bear'?");
    var herculesDays = prompt("How many days did you rent 'Hercules'?");
    var costPerDay = 3;

console.log (littleMermaidDays, brotherBearDays , herculesDays)

    var totalRental = (costPerDay * littleMermaidDays) + (costPerDay * brotherBearDays) + (costPerDay * herculesDays);
    console.log(totalRental)
    alert("Awesome, the cost per day is $3 so your total rental is $27");

// The following is code for Excercise 3 (Contractor)
console.log ("Contracting Confirm Starts")
    confirm("Click OK if you are contracting with Google, Amazon and Facebook.");
    var googlePay = prompt("How much does Google pay you per hour?");
    var amazonPay = prompt("How much does Amazon pay you per hour?");
    var facebookPay = prompt("How much does Facebook pay you per hour?");
console.log( googlePay, amazonPay, facebookPay)
    var googleHours = 6;
    var amazonHours = 4;
    var facebookHours = 10;
    var totalPay = (googlePay * googleHours) + (amazonPay * amazonHours) + (facebookPay * facebookHours);
console.log(totalPay)
    alert("We have your hours logged in and with 6 hours at Google, 4 at Amazon and 10 at Facebook, your total pay is $" + totalPay)

// The following is code for Excercise 3 (Student Enrollment)
    var classAvailability = prompt("Please type yes or no if your class is available and not full");
    var isNotFull = ( classAvailability.toLowerCase() === "yes" );
console.log(classAvailability)
    var scheduleAvailability = prompt("Please type yes or no if your schedule is clear");
    var scheduleClear = (scheduleAvailability.toLowerCase() === "yes");
console.log(scheduleAvailability)
    var studentEnrolled = scheduleClear && isNotFull;
    alert("You are enrolled: " + studentEnrolled);
console.log(studentEnrolled)

// The following is code for Excercise 3 (Product Offer)
    var validOffer = true;
    var expiredCheck = prompt("Enter yes or no if the offer has expired?");
    var isNotExpired = (expiredCheck.toLowerCase() === "no");
    var memberCheck = prompt("Enter yes or no if you are a Premium member?");
    var isNotPremium = (memberCheck.toLowerCase() === "no");
    var isPremium = (memberCheck.toLowerCase() === "yes");
console.log(isNotPremium)
    var itemAmount = prompt("How many things are you buying?");
    var twoItems = (itemAmount >= 2);
console.log(itemAmount)
    var qualifies = isNotExpired && (isPremium || twoItems);
    alert("You qualify for the product offer: " + qualifies);


