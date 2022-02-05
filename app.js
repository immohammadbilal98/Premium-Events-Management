//Import
const express = require("express");
const ejs = require("ejs");
const path = require("path");
const compression = require("compression");
//=====================================

const app = express();

// compress all responses
app.use(compression());

//PORT
let port= process.env.PORT || 3000;

//View Engine
app.set('view engine', 'ejs');

//Static Folder
app.use(express.static(path.join(__dirname, "public")));  

// Body Parser Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//PATH FILES ==================================================================
//HOME
app.get("/",function(req,res){
    res.render("home");               
});

app.get("/about",function(req,res){
    res.render("about");               
});


//Listen on port 4000
app.listen(port, function () {
    console.log(`Server started on port ${port}`);
  });
  