const express =require("express");
const app = express();
const bodyParser = require("body-parser");


let users = require("./state").users;

app.use(bodyParser.json());

app.post("/users",(req,res)=>{
  users.push(req.body);
  console.log(req);
});

// // app.use(function(request,response,next){
// //   if(request.path === "/users"){
// //     return response.send(users)
// //   }
// // });

// app.get("/users",function(req,res,next){
// return res.send(users)
// });
// app.get("/users/1",function(req,res,next){
//   return res.json(users[0])
// });

// recieve 1 user
app.get("/users/1",function(req,res,next){
  return res.json(users);
});

// add new 

app.post("/users",function(req,res,next){
  let newUser={
    "_id":6,
    "name":"brian fallon",
    "occupation":"best damn singer ever",
    "avatar":"N/A"
  };
  users.push(newUser);
  res.json(newUser);
});

app.put("/users",(req,res,next) => {
  users[0].name = 'greg'
  return res.json(users);
  });

app.delete("/users/1",(req,res,next) => {
  users.shift();
  return res.json(users);
  }); 
 
 users.push(newUser);

 return res.json(users[users.length - 1]);

app.put('/users/:id', (req, res, next) => {
 users[req.params.id].name = "Bruce Springsteen";
 return res.json(users[req.params.id]);
});


app.delete('/users/:id', (req, res, next) => {
 const user = users.find(u => u._id == req.params.id);
 user.isActive = false;
 return res.send("deleted");
});
app.use(function(request,response,next){
   return response.send(users);
});


app.use(function(req,res,next){
  return res.send("whatcha gon do");
});

app.listen(3000,(err)=>{
  if (err){
    return console.log("error dat shit's brokeded")
  }
  console.log("YOU DOING GOOD BABBY");
});