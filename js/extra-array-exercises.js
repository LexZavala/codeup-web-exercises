(function() {
    "use strict"
    function allIndexesOf (arr, value){
        if (value == -1){
            return [];
        } else {
            return arr.indexOf(value);
        }
    }

    var fruits = ["apple", "banana", "orange", "apple", "pineapple"];

    console.log(allIndexesOf(fruits, "apple"));

})()