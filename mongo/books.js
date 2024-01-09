const mongoose = require('mongoose');

main()
.then(() =>{
    console.log("connection successful");
})
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 20,
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        min: [1, "price is too low for amazon selling"],
    },
    discount: {
        type: Number,
        default: 0,
    },
    category: {
        type: String,
        enum: ["fiction", "non-fiction"],
    },
    genre: [String]
});

const Book = mongoose.model("Book",bookSchema);

//updation
Book.findByIdAndUpdate("659d43b30ea64e3f303c43e4",
 {price:-100},
 {runValidators: true}) 
.then((res) =>{
    console.log(res);
}).catch((err) =>{
    console.log(err.errors.price.properties.message);
});

// let book1 = new Book({
//     title: "Marvel comics v2",
//     price: 600,
//     genre:["comics", "superheroes","fiction"],
// });
// book1
// .save()
// .then((res) => {
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });