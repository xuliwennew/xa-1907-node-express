
const http = require("http")


//创建一个服务器对象 a=1&b=2 stream
//method: GET 获取 POST 添加 PUT 修改数据 DELETE 删除数据
const server = http.createServer((req,res)=>{
   console.log(req.method)
    if(req.method =="POST"){
        var bigdata=""
        //监听事件 data(数据传递，buffer )
        req.on("data",(chunk)=>{

            bigdata+=chunk;
        })

        //监听的是客户端上传完成后
        req.on("end",()=>{
            console.log(bigdata.toString())
        })
    }else if(req.mothod=="GET"){
        res.end("hello world!")
    }

})

server.listen(3001,()=>{
    console.log("server is ready on port 3000")
})
