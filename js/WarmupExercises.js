"use strict"

function returnSeven (){
    return 7;
}

function multiplyBy5 (num){
    if (typeof num !== "number") {
        return 0;
    } else {
        return num * 5;
    }
}
