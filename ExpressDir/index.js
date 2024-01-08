const express = require("express");
const app = express();

console.dir(app);

let port = 8080;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

// app.get("/", (req, res) => {
//     res.send("you contacted root path");
// })

// app.get("/apple", (req, res) => {
//     res.send("you contacted apple path");
// })

// app.get("/orange", (req, res) => {
//     res.send("you contacted orange path");
// })
// app.get("*", (req, res) => {
//     res.send("This path does not exist");
// })

// app.post("/", (req, res) => {
//     res.send("you get a post request");
// })


// app.use((req, res) => {
//     console.log(req);
//     console.log("request recieved");
//     res.send("this is a basic resonse");


// });
app.post("/", (req, res) => {
    res.send("hello, i m root");
});

// app.get("/:username/:id", (req, res) => {
//     console.log(req.params);
//     res.send("hello, i m root");
// });

app.get("/:username/:id", (req, res) => {
    let {username, id} = req.params;
      let htmlStr = `<h1>Welcome to the page of @${username}</h1>`
      res.send(htmlStr);
});

// app.get("/search",(req, res) => {
//     console.log(req.query);
//     res.send("no results"); 
// });

app.get("/search",(req, res) => {
   let {q} = req.query;
   if(!q){
    res.send("<h1>nothing searched</h1>");
   }
    res.send(`<h1>search results of query:${q}</h1>`);
});

