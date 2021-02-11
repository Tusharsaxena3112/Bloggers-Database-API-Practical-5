var express = require("express");
var router = express.Router();

router.get("/blogs",(req,res,next)=>{
    res.status(200).json({
        message:"In /blogs route"
    });
});

module.exports = router;