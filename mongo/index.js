// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/test');

// getting-started.js
const mongoose = require('mongoose');

main()
.then(() =>{
    console.log("connection successful");
})
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});
const User = mongoose.model("User", userSchema);

User.findByIdAndDelete("659ac4a1806d1fb996e4e40c").then((res) => {
// User.deleteMany({age: 21}).then((res) => {
// User.deleteOne({name: "khushi"}).then((res) => {
    console.log(res);
}).catch((err) =>{
        console.log(err);
    });




// User.updateMany({age: {$gt:18} }, {age: 49})
// User.updateOne({name: "Tony"}, {age: 49})
// User.findOneAndUpdate({name: "Tony"}, {age: 49})
// .then((res) => {
//     console.log(res);
// }).catch((err) =>{
//     console.log(err);
// });



// User.findById("659ac4a1806d1fb996e4e40a")
// User.findOne({age: {$gt: 21}})
// User.find({age: {$gt: 21}})
// .then((res) => {
//     console.log(res);
//     // console.log(res[0].name);
// })
// .catch((err) => {
//     console.log(err);
// });



// User.insertMany([
//     {name:"Tony", email:"tony@123gmail.com", age:45},
//     {name:"Tej", email:"tej@123gmail.com", age:21},
//     {name:"Khushi", email:"khushi@123gmail.com", age:21},
// ]).then((res) =>{
//     console.log(res);
// });



// const Employee = mongoose.model("Employee", userSchema);
// const user2 = new User({
//     name: "tej",
//     email: "tej@123gmail.com",
//     age: 21,
// });
// user2
// .save()
// .then((res) =>{
//     console.log(res);
// })
// .catch((err) =>{
//     console.log(err);
// });