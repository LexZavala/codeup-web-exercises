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

            console.log(`Last date of push was ${cleanDate[0]}`
        })
}

githubUsername('LexZavala')


// Events public is the right URL, INDEX 0 of the events is your last push, inside of that event there is a "payload", that has an array of "commits" and the index 0 of that  is the last commit