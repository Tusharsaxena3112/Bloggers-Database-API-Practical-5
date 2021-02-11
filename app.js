var express = require('express');
var blogs = require('./routes/blogs');
var mongoose = require('mongoose');

const app = express();
var url = "mongodb://127.0.0.1:27017/Bloggers";
mongoose.connect(url);

var db = mongoose.connection;
db.on("connected",()=>{
    
})


app.use("/",blogs);

module.exports = app;