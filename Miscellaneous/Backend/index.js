const express = require("express");
const app = express();
const port = 8080;

//standard line
app.use(express.urlencoded({extended:true}));

// for json data -->
// app.use(express.json());

app.get("/register", (req, res) => {
    let { user, password}= req.query;
    res.send(`standard GET response. Welcome ${user}!`);
});
app.post("/register", (req, res) => {
 // This will show the JSON payload in thee console
//  console.log(req.body);
    let { user, password } = res.body;
    res.send(`standard POST response. Welcome ${user}!`);
});


app.listen(port, () => {

    console.log(`listening to port ${port}`);
});