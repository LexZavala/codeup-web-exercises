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

const longestEmail = users.reduce((total, user) => {
    console.log(user.email);
}, 0);



