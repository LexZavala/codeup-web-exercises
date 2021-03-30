"use strict"


for (var i = 1; i<= 50; i = i % 2 !== 1) {
    var input = prompt("Enter an odd number between 1-50")
    console.log(input);
    if (input % 2 === 1) {
        break;
    }
}

// for (var i = 1; i<= 50; i = i % 2 !== 1) {
//     console.log("Here is an odd number: " + parseFloat(i));
//     if (i === input){
//         console.log("Yikes skipping this number: " + i);
//         continue;
//     }
// }


// var oddNum = 0;
// while(oddNum % 2 !== 1 || oddNum < 1 && oddNum > 50){
//     oddNum = parseFloat(prompt("Enter an odd number between 1-50"));
//     console.log(oddNum);
//     if (oddNum % 2 === 1 && (oddNum < 1 && oddNum > 50)){
//         break;
//     }
// }
// var oddNum = parseInt(prompt("Give me an odd number between 1-50:"));

function isNumEven(num){
    return num % 2 === 0;
}

function isNumberInRange (num){
    return num >= 1 && num <= 50;
}


while(true){
    if (!isNumEven(oddNum) && isNumberInRange(oddNum)){
        break;
    }
    var oddNum = parseInt(prompt("Give me an odd number between 1-50:"));
}

for (var i = 1; i<= 50; i += 2) {
    if ( i === oddNum){
        console.log("Yikes! Skipping number: "+ oddNum);
        continue;
    }
}