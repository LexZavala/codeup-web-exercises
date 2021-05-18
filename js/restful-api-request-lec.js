"use strict"

let getOptions = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    }
};

fetch("https://pointed-ripple-stork.glitch.me/books", getOptions)
    .then(resp => resp.json())
    .then(data =>console.log(data))