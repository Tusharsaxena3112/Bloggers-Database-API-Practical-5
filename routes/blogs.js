var express = require("express");
var router = express.Router();
var Post = require("../models/blogs");

router.get("/blogs", (req, res, next) => {
  Post.find()
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "In /blogs get route",
        result:result
      });
    }).catch(err=>{
        res.status(500).json({
            error:err
        })
    });
});

router.post("/blogs", (req, res, next) => {
  Post.insertMany([
    {
      author:req.body.author,
      age:req.body.age,
      content:req.body.content,
      rating:req.body.rating,
      blog_tags:req.body.blog_tags,
      published:req.body.published
    }
  ]).then((result)=>{
    res.status(200).json({
      message: "Successfully Inserted",
      Inserted_Blog:result
    });
  }).catch(error=>{
    res.status(500).json({
      error:error
    })
  })
});

router.patch("/blogs/updateContent", (req, res, next) => {
  Post.updateOne(
    {author:req.body.author},{$set:{content:req.body.new}
  }).then((result)=>{
    res.status(200).json({
      message: "In /blogs patch route",
      result:result
    });
  });
});

router.delete("/blogs/:author", (req, res, next) => {
  Post.deleteOne({
    author:req.params.author
  }).then((result)=>{
    res.status(200).json({
      message: "Successfully Deleted",
      result:result,
      url:{
        type:"GET",
        url:"http://localhost:3000/blogs/"
      }
    });
  }).catch(error=>{
    res.status(500).json({
      error:error
    })
  })
});

module.exports = router;
