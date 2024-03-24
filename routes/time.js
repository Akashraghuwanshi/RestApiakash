
const express = require("express");
const router = express.Router();


router.get('/',(req,res,next)=>{
    req.time = new Date().toString();
    next();
},(req,res)=>{
    res.json({"time":req.time});
})

module.exports = router;

//we can also chain this function just like above with comma
//or we could set a second route also 