"use strict"

fetch(url, {headers: {'Authorization': GITHUB_TOKEN}}).then(resp => console.log(resp) );