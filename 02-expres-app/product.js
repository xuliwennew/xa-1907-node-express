//引用express
const express = require("express")
//创建一个路由对象
const router = express.Router() //restful api


//创建一个restful 地址
router.get("/",(req,res)=>{
    //res.end() write
    //res.send() sendFile()
    //res.json() res.jsonp()
    res.jsonp({
        msg:"hello restfual api"
    })
})

router.get("/list",(req,res)=>{
    //res.end() write
    //res.send() sendFile()
    //res.json() res.jsonp()
    res.jsonp({
        msg:"hello product api"
    })
})

module.exports = router;
