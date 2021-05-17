"use strict"

// template for creating a promise
const myPromise = new Promise((fulfill, reject) => {
    if (Math.random() > 0.5){
        fulfill();
    } else {
        reject();
    }
});
console.log(myPromise);

