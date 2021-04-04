// (function() {
//     "use strict"
//     function allIndexesOf (arr, value){
//         if (value == -1){
//             return [];
//         } else {
//             return arr.indexOf(value);
//         }
//     }
//
//     var fruits = ["apple", "banana", "orange", "apple", "pineapple"];
//
//     console.log(allIndexesOf(fruits, "apple"));
//
// })()

// Extra array and Objects exercises

// Problem 1
function filterNumbers(arr){
    var numArr = [];
    for (var i = 0; i < arr.length; i++){
        if (typeof arr[i] === "number"){
            numArr.push(arr[i]);
        }
    }
    return numArr.sort(function (a, b){
        return a - b;
    });
}
console.log(filterNumbers([2, 4, 60, "jello" , "banana"]))

// Problem 2
   var Dogs = [
        {
            name: "Chompers",
            breed: "Pug",
            age: 7
        },
        {
            name: "Freddy",
            breed: "Lab",
            age: 4
        },
        {
            name: "Mr. Pig",
            breed: "Mastif",
            age: 10
        }
    ]

function getOlder(arr){
    arr.forEach(function (dog){
        dog.age = dog.age + 1;
        console.log(dog.name + " is " + dog.age + " years old!");
    })
}
console.log(getOlder(Dogs));

// Problem 3
var Cars = [
    {
        make: 'Volvo',
        color: 'red',
        year: 1996,
        isDirty: true
    },
    {
        make: 'Toyota',
        color: 'black',
        year: 2004,
        isDirty: false
    },
    {
        make: 'Ford',
        color: 'white',
        year: 2007,
        isDirty: true
    }
]

function washCars(arr){
    arr.forEach(function (car){
        car.isDirty = false;
    })
}

// Problem 4
var Admins = [
    {
        isAdmin: true,
        email: 'user1@email.com'
    },
    {
        isAdmin: true,
        email: 'user2@email.com'
    },
    {
        isAdmin: false,
        email: 'user3@email.com'
    }
]

function adminList (arr){
    // var count = 0; (Before refactor)
    // var emailArr = []; (1st refactor)
    var objectArr = [];
    arr.forEach(function (admin, index){
        if (admin.isAdmin === true ){
            // count += 1; (Before Refactor)
            // emailArr.push(admin.email); (1st refactor)
            objectArr.push(admin);

        }
    });
    // console.log("There are " + count + " Admins"); (Before Refactor)
    // console.log(emailArr); (1st refactor)
    console.log(objectArr);
}
adminList(Admins);

// Problem 5