var express = require("express");
var router = express.Router();

router.get("/blogs",(req,res,next)=>{
    res.status(200).json({
        message:"In /blogs get route"
    });
});

router.post("/blogs",(req,res,next)=>{
    res.status(200).json({
        message:"In /blogs post route"
    });
});

router.patch("/blogs",(req,res,next)=>{
    res.status(200).json({
        message:"In /blogs patch route"
    });
});

router.delete("/blogs",(req,res,next)=>{
    res.status(200).json({
        message:"In /blogs delete route"
    });
});

module.exports = router;