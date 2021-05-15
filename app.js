const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
const static_path = path.join(__dirname,"./public");
const hbs = require('ejs');
const Archive = require('./src/models/register');
const connect = require('./src/db/conn');
const { MongooseDocument } = require('mongoose');
app.set('view engine','ejs');

app.use(express.urlencoded({extended:false}));

// const Register = require('./src/db/models/register');

//For static website 
app.use(express.static(static_path));

app.get('/',(req,res)=>{
      res.render('index');
})
// Creating a new user in database
app.post('/register',async (req,res)=>{
    const values = req.body.fname;
    res.redirect("https://codechef.com/users/"+values);
})

app.listen(port,()=>{
      console.log("The port has been succesfully connected");
});

