// let object = {
//     a: "A",
//     b: "B",
//     c: "C",
//     d: "D"
// }

// let keys = ["c", "a", "d", "b"];

// keys.forEach((key)=> { //loop through keys array


//   console.log(object[key])
// })

// ----------------------------------------------------------
const titles = [
    { id: 1, title: "Title 1" },
    { id: 2, title: "Title 2" },
    { id: 3, title: "Title 3" },
];

const posts = [
    { id: 1, post: "This is post 1" },
    { id: 3, post: "This is post 3" },
    { id: 2, post: "This is post 2" },
];

const combinedArray = titles.map((tvalue) => {
    console.log("tvalue",tvalue)
    tvalue.post = posts.find((posts) =>
    
        posts.id === tvalue.id).post
        console.log("posts",posts)
    return tvalue;
})

console.log(combinedArray)




// //Expected output
// [
//     { "id": 1, "title": "Title 1", "post": "This is post 1" },
//     { "id": 2, "title": "Title 2", "post": "This is post 2" },
//     { "id": 3, "title": "Title 3", "post": "This is post 3" }
// ]



