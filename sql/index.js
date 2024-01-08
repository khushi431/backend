// CJS
const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const { url } = require('inspector');


app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'data_app',
    password: 'Khushi@1234'
  });
  let getRandomUser = User => {
    return [
       faker.string.uuid(),
       faker.internet.userName(),
       faker.internet.email(),
       faker.internet.password(), 
    ];
  }
  //inserting new data
    //  let q = "INSERT INTO user (id , username, email, password)VALUES(?, ?, ? ,?)";
    // let q = "INSERT INTO user (id , username, email, password)VALUES ?";
    // let data = [];
    // for(let i = 1; i<=100; i++){
    //     data.push(getRandomUser());  // 100 fake users
    // }
//      let user = [["123b", "123_newuserb", "abc@gmail.comb", "abcb"],
//      ["123c", "123_newuserc", "abc@gmail.comc", "abcc"]
// ];
     //   let q = "SHOW TABLES";

     //Home route
app.get("/", (req,res) => {
    let q = `SELECT count(*) FROM user`;
    try{
    connection.query(q, (err, result) => {
      if(err) throw err;
      let count = result[0]["count(*)"];
      // console.log(result[0]["count(*)"]);
      res.render("home.ejs", {count});
      // res.send("success");
      // console.log(result.length);
      // console.log(result[0]);
      // console.log(result[1]);
    });
  } catch(err){
      console.log(err);
      res.send("some error in database");
  }
    // res.send("welcome to home page")
});

//Show route
app.get("/user", (req,res) => {
  let q =`SELECT * FROM user`;

  try{
    connection.query(q,(err, users) => {
      if(err) throw err;
      // let count = result[0]["count(*)"];
      // console.log(result[0]["count(*)"])
      // console.log(result);
      // res.send(result);
      res.render("showusers.ejs", {users});
    });
  } catch(err){
      console.log(err);
      res.send("some error in database");
  }
    // res.send("welcome to home page")
});


//add user

app.get("/user/new", (req, res) => {
  // res.send("serving working well!");
  res.render("newuser.ejs");
});

app.post("/user", (req, res) => {
  // console.log(req.body);
  let{ id ,username, email , password} = req.body;
  // user.push({id ,username, email, password });
  let q= `INSERT INTO user (id ,username, email, password ) values (?, ?, ?, ?)`;
  res.redirect("/user");
  // res.send("user req working");
  // res.render("new.ejs");
  try{
    connection.query(q,[id, username, email, password], (err, users) => {
      if(err) throw err;
      res.render("newuser.ejs", {users});
    });
  } catch(err){
      console.log(err);
      res.send("some error in database");
  };
});


//Edit route 
app.get("/user/:id/edit", (req, res) => {
  let {id }= req.params;
  let q = `SELECT * FROM user WHERE id = '${id}'`;
  try{
    connection.query(q, (err, result) => {
      if(err) throw err;
      let user = result[0];
      res.render("edit.ejs", {user});
    });
  } catch(err){
      console.log(err);
      res.send("some error in database");
  }
    // res.send("welcome to home page")
});
  // console.log(id);

  //update route
  app.patch("/user/:id",(req, res) =>{
    let {id }= req.params;
    let {password: formPass , username: newUsername} = req.body;
    let q = `SELECT * FROM user WHERE id = '${id}'`;
    try{
      connection.query(q, (err, result) => {
        if(err) throw err;
        let user = result[0];
        if(formPass != user.password) {
          res.send("Wrong Password");
        } else{
          let q2 = `UPDATE user SET username ='${newUsername}' WHERE id = '${id}'`;
          connection.query(q2, (err, result) => {
            if(err)throw err;
            res.redirect("/user")
            // res.send(result);
          });
        }
        // res.send(user);
      });
    } catch(err){
        console.log(err);
        res.send("some error in database");
    }
  });
  //delete post
app.get("/user/:id/delete", (req, res) =>{
  let{id} = req.params;
  let q = `SELECT * FROM user WHERE id = "${id}"`;
  try{
     connection.query(q,(err, result) => {
      if(err)throw err;
      let user = result[0];
      res.render("delete.ejs", {user});
     });
  }catch(err){
    console.log(err);
    res.send("Some error in database");
  }
});

  app.delete("/user/:id", (req, res) => {
    let {id} = req.params;
    let {password: formPass} = req.body;
    let q = `SELECT * FROM user WHERE id = "${id}"`;
    try{
      connection.query(q,(err, result)=> {
        if(err) throw err;
        let user = result[0];
        if(formPass != user.password) {
          res.send("Wrong Password")
        } else{
          let q2 = `DELETE FROM user WHERE id = "${id}"`;
          connection.query(q2, (err, result) => {
            if(err)throw err; 
            res.redirect("/user");
          });
        }
        // res.render("delete.ejs", {user});
      });
    } catch(err){
        console.log(err);
    }
    // res.send("delete success");
  });

app.listen("8080",() =>{
    console.log("server is listening to 8080");
}); 

// try{
//     connection.query(q, [data], (err, result) => {
//       if(err) throw err;
//       console.log(result);
//       // console.log(result.length);
//       // console.log(result[0]);
//       // console.log(result[1]);
//     });
//   } catch(err){
//       console.log(err);
//   }
//   connection.end();

// let createRandomUser = User => {
//     return {
//       userId: faker.string.uuid(),
//       username: faker.internet.userName(),
//       email: faker.internet.email(),
//       avatar: faker.image.avatar(),
//       password: faker.internet.password(),
//       birthdate: faker.date.birthdate(),
//       registeredAt: faker.date.past(),
//     };
//   }
//   console.log(createRandomUser());

// let getRandomUser = User => {
//     return {
//       id: faker.string.uuid(),
//       username: faker.internet.userName(),
//       email: faker.internet.email(),
//       password: faker.internet.password(), 
//     };
//   }
//   console.log(getRandomUser());

// let getRandomUser = User => {
//     return [
//        faker.string.uuid(),
//        faker.internet.userName(),
//        faker.internet.email(),
//        faker.internet.password(), 
//     ];
//   }