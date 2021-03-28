"use strict"

//example of format

 // for (var i = 0; i <= 100;  i++){
 //     console.log(i);
 // }

function showMultiplicationTable (num){
    for (var i = 1; i <= 10; i++) {
        console.log(`${num}x${i}= ${num * i}`);
    }
}
showMultiplicationTable(7);

Math.floor(Math.random() * 20) + 180