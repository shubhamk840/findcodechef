const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
const static_path = path.join(__dirname,"./public");
const hbs = require('ejs');
const Archive = require('./src/models/register');
const connect = require('./src/db/conn');
const { MongooseDocument } = require('mongoose');
const favicon = require('serve-favicon');
app.set('view engine','ejs');


app.use(favicon(__dirname+'/public/favicon/favicon.ico'))


app.use(express.urlencoded({extended:false}));


app.use(express.static(static_path));

app.get('/',(req,res)=>{
      res.render('index');
})
app.post('/register',async (req,res)=>{
      if(req.body.platform=="codechef"){
    const values = req.body.fname;
    res.redirect("https://codechef.com/users/"+values);
      }
      else if(req.body.platform=="codeforces"){
            const values = req.body.fname;
            res.redirect("https://codeforces.com/profile/"+values)
      }
      else if(req.body.platform=="atcoder"){
            const values = req.body.fname;
            res.redirect("https://atcoder.jp/users/"+values);
      }
})


app.listen(port,()=>{
      console.log("The port has been succesfully connected");
});

