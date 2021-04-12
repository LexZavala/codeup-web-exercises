"use strict"
var fruits = ["apple", "banana", "orange", "apple", "pineapple"];

function allIndexesOf (arr,value){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        if(value === arr[i]){
            newArr.push(i);
        }
    } console.log(newArr);
}

allIndexesOf(fruits, "apple");
allIndexesOf(fruits, "guava");
allIndexesOf(fruits, "pineapple");


var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];

// function removeAll (arr, value){
//     for(var i = 0; i < arr.length; i++){
//         var index = arr.indexOf(value);
//         if(value === arr[i]){
//             var newArr = arr.slice(index, 2);
//         }
//     } console.log(newArr);
// }

function removeAll(arr, value) { return arr.filter(function(ele){ return ele !== value; });}

console.log(removeAll(bugs, "ant"));
console.log(removeAll(bugs, "mosquito"));
console.log(removeAll(bugs, "roach"));

