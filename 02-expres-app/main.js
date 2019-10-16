
//引用express
const express = require("express")
const product = require("./product")
const app = express();

//注册一级路由 app localhost:3000/product
app.use("/product",product);
//
// app.use("/a",(req,res)=> res.send("hello world a!"))
//
// //通过app来创建一个路由
// app.use("/",(req,res)=>{
//     res.end("hello express!")
// })

//监听端口 脚手架
app.listen(3001,()=>{
    console.log("server is listening......")
})
