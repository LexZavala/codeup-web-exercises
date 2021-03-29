"use strict"

//example of format

 // for (var i = 0; i <= 100;  i++){
 //     console.log(i);
 // }

function showMultiplicationTable (num){
    for (var i = 1; i <= 10; i++) {
        // console.log(`$\`${num}x${i}= ${num * i}\`){num}x${i}= ${num * i}`);
        console.log(num + "x" + i + "= " + num * i);
    }
}
showMultiplicationTable(7);


for (var i = 0; i <= 10; i++){
    var randomNum = Math.floor(Math.random() * 20) + 180;
    if (randomNum % 2 === 0){
        console.log(randomNum + " is even!");
    } else {
        console.log(randomNum + " is odd!");
    }
}

// for (var i =1; i <= 9; i++){
//     console.log(i);
//     while ( i <= 999999999){
//         i * 11
//     }
// }

for(var i=1; i<=9; i++){
    var num ='';
    for(var x =0; x <i; x++){
        num += i;
        ;
    }
    console.log(num)
}
