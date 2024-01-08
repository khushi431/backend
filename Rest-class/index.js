const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true}));
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
// app.use(express.static (path.join(__dirname, "public")));

let posts = [
    {    
        id: uuidv4(),
        username : "khushi",
        content : "i love coding",
    },
    {   
        id: uuidv4(),
        username : "tej",
        content : "i love coding",
    },
    {   
        id: uuidv4(),
        username : "sim",
        content : "i love coding",
    },
];

app.get("/posts", (req, res) => {
    // res.send("serving working well!");
    res.render("index.ejs",{posts});
});


app.get("/posts/new", (req, res) => {
    // res.send("serving working well!");
    res.render("new.ejs");
});

app.post("/posts", (req, res) => {
    // console.log(req.body);
    let{username, content} = req.body;
    let id  = uuidv4();
    posts.push({id,username , content });
    res.redirect("/posts");
    // res.send("post req working");
    // res.render("new.ejs");
});

app.get("/posts/:id", (req, res) => {
    let {id} = req.params;
    console.log(id);
    let post = posts.find((p) => id === p.id); 
    // console.log(post); 
    // res.send("request working");
    res.render("show.ejs", {post});
});

app.patch("/posts/:id", (req, res) => {
    let { id} = req.params;
    let newContent =  req.body.content;
    let post = posts.find((p) => id === p.id); 
    post.content = newContent;
    console.log(post);
    console.log(newContent);
    console.log(id);
    res.redirect("/posts");
    // console.log("patch req woerkibg");
});

app.get("/posts/:id/edit", (req, res) => {
    let { id} = req.params;
    let post = posts.find((p) => id === p.id); 
    res.render("edit.ejs", {post});
    console.log("patch req working");
});

app.delete("/posts/:id", (req, res) => {
    let { id} = req.params;
     posts = posts.filter((p) => id !== p.id);
    // res.send("delete success");
    res.redirect("/posts");
});

app.listen(port, () => {
    console.log("listening to port : 8080");
});