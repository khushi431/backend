const express = require("express");
const app = express();
const path = require("path");  

const port = 8080;

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"/views"));


app.get("/", (req, res) => {
    res.render("home.ejs");
});

//instagram ejs
app.get("/ig/:username", (req, res) => {
    let{ username } = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    if(data){
        res.render("instagram.ejs", { data });
    }
    else{
        res.render("error.ejs");
        }
    // console.log(data);
    
}); 

app.listen(port, () => {
    console.log(`listening on port ${port}`);
}); 