const mongoose = require('mongoose');
const { insertMany } = require('./models/chat');
const Chat = require('./models/chat.js');

main()
.then(() => {
    console.log("connection successfull");
})
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
let allChats = [
    {
        from: "aman",
        to:"harman",
        msg:"hello bro?",
        created_at: new Date()
    },
    {
        from: "karishma",
        to: "gunn",
        msg: "hi, waiting for you",
        created_at: new Date()
    },
    {
        from: "smiley",
        to: "simer",
        msg: "hi, m outside the home",
        created_at: new Date()
    },
    {
        from: "aarza",
        to: "hasrat",
        msg: "i love my sister",
        created_at: new Date()
    },
    {
        from: "tej",
        to: "khushi",
        msg: "where are youuu??",
        created_at: new Date()
    },
];
Chat.insertMany(allChats);