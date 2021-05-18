"use strict"

let user = 'LexZavala'

function githubUsername (userName) {

    fetch(`https://api.github.com/users/${userName}/events`, {
        method: 'GET',
        headers: {'Authorization': GITHUB_TOKEN}
    }).then(resp => resp.json())

        .then((resp) => {
            console.log(resp)
            let lastPush = resp[0]
            let createdAt = lastPush.created_at
            let cleanDate = createdAt.split('T')

            console.log(`Last date of push was ${cleanDate[0]}`)
        })
        .catch((resp => alert("error 300, fetch failed")))
}

githubUsername('LexZavala')


// Events public is the right URL, INDEX 0 of the events is your last push, inside of that event there is a "payload", that has an array of "commits" and the index 0 of that  is the last commit

function wait (time) {
    const myPromise = new Promise(function(resolve, reject) {
        if (time.toString().length < 3) {
        setTimeout(resolve, time * 1000);
        } else {
            setTimeout(resolve, time);
        }
    }).then(function() {
        console.log(time.toString().length);
        if (time.toString().length < 3){
            console.log(`Promise fulfilled after ${time} seconds`);
        } else {
            console.log(`Promise fulfilled after ${time} milliseconds`);
        }
    });
}

wait(2000);