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

