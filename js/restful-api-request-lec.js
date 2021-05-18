"use strict"

let getOptions = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    }
};
const getBooks = () => {
    fetch("https://pointed-ripple-stork.glitch.me/books", getOptions)
        .then(resp => resp.json())
        .then(books => {
            console.log(books);
            let htmlStr = "";
            for (let book of books) {
                htmlStr += `<h2>${book.title}</h2><p>by: ${book.author.firstName} ${book.author.lastName}</p>`;
            }
            $('#container').html(htmlStr);
        });
}

fetch("https://pointed-ripple-stork.glitch.me/books/1", getOptions)
    .then(resp => resp.json())
    .then(book => console.log(book));

// POST
let newBook = {
    "title": "Percy Jackson & The Lightning Thief",
    "author": {
        "firstName": "Rick",
        "lastName": "Riordan"
    }
};

let postOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(newBook),
}

$('#addButton').click(() => {
    fetch("https://pointed-ripple-stork.glitch.me/books", postOptions)
    .then(getBooks);

});

// PUT - edits an entire resource at once. Think of it as an overwrite
let putThis = {
    "title": "Percy Jackson & The Sea Of Monsters",
    "author": {
        "firstName": "Rick",
        "lastName": "Riordan"
    }
};

let putOptions = {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(putThis),
}

fetch("https://pointed-ripple-stork.glitch.me/books/6", putOptions)
    .then(getBooks);

// PATCH
let patchThis = {
    "title": "Percy Jackson & The Titan's Curse",
};

let patchOptions = {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(patchThis),
}

fetch("https://pointed-ripple-stork.glitch.me/books/7", patchOptions)
    .then(getBooks);

// DELETE

let deleteOptions = {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json',
    }
};
$('#uniqueBooks').click(() => {
    let inputVal = $('#id-to-delete').val();
    console.log(inputVal);
    fetch(`https://pointed-ripple-stork.glitch.me/books/${inputVal}`, deleteOptions)
        .then(getBooks);
})
//     fetch("https://pointed-ripple-stork.glitch.me/books", getOptions)
//         .then(resp => resp.json())
//         .then(books => {
//             let uniqueBooks = [];
//             for (let book of books){
//                 if (uniqueBooks.length === 0){
//                     uniqueBooks.push(book);
//                     continue;
//                 }
//                 for (let existingBook of uniqueBooks){
//                     if (book.title !== existingBook.title || book.author.firstName !== existingBook.author.firstName || book.author.lastName !== existingBook.author.lastName ){
//                         uniqueBooks.push(book)
//                     } else {
//                         fetch(`https://pointed-ripple-stork.glitch.me/books/${book.id}`, deleteOptions)
//                             .then(getBooks)
//                     }
//                 }
//             }
//         })
// });


//    CALL THE FUNCTION
// getBooks();


