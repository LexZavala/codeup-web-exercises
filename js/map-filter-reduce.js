"use strict"

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// let emailsOnly = [];
//
// emailsOnly = users.map(function (user){
//     let emailOnly = user.email;
//     return emailOnly;
//
// });

// ES6

let es6Emails = users.map(user => user.email);

// console.log(emailsOnly)
console.log(es6Emails)

let filteredUsers = users.filter((user) => {
    console.log(user.languages.length);
    let languagesKnown = user.languages.length;
    if (languagesKnown >= 3){
        return user;
    }
});

console.log(filteredUsers);

// Reduce method exercises

const yearsAvg = users.reduce((total, user, index) => {
    total += user.yearsOfExperience;
    console.log(total);
    if (index === users.length -1) {
        return total / users.length
    } else {
        return total;
    }
}, 0);
console.log(yearsAvg);


//SHORTEST VERSION - if grabbed from the emails array
let longestUserEmail = es6Emails.reduce((a, b) => a.length > b.length ? a : b);
console.log("Longest email is : " + longestUserEmail);

// SHORT VERSION
// const longestEmail = users.reduce((longest, user) => {
//     if (longest.email.length > user.email.length){
//         return longest;
//     } else {
//         return user;
//     }
// }).email;
// console.log(longestEmail);

let longestEmail = users.reduce((longest, user, index, usersArray) => {
    if (index === usersArray.length -1){
        longest.push(user.email);
        longest.sort(function (email1, email2){
            return email2.length - email1.length;
        });
        return longest[0];
    } else {
        longest.push(user.email);
        return longest;
    }
}, []);
console.log(longestEmail);

const nameList = users.reduce((nameList, user, index, usersArray) =>{
    if (index === usersArray.length -1) {
        nameList.push(user.name);
        let niceJoin = nameList.join(", ");
        niceJoin = "list of instructors are: " +niceJoin + ".";
        return niceJoin;
    }
    nameList.push(user.name);
     return nameList;
}, []);
console.log(nameList);

// const uniqueLang = users.reduce((lang, user, index, usersArray) => {
//     lang = lang.concat(user.languages);
//     console.log(lang);
//     let noRepeat = [];
//     for (let i = 0; i <= lang.length; i++){
//         if (noRepeat.includes(lang[i])){
//             return;
//         } else {
//             noRepeat.splice(lang[i]);
//         }
//         return noRepeat;
//     }
// }, []);
// console.log(uniqueLang);

// BONUS
const uniqueLang = users.reduce((lang, user, index, usersArray) => {

if (index === array.length - 1) {
    // return getUniqueValues(nameArray);
    return [... new Set(nameArray)].sort(); // Set creates a new array with the unique values
} else {
    return nameArray;
    // return getUniqueValues(nameArray);
}
}, []);
console.log(uniqueArray);



