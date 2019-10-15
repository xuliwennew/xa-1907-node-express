const http = require("http")
//
// console.log(http)

//http 创建一个服务器
/**
 * 1.createServer -> 创建一个server的对象
 * 2.new http.Server()
 */

//服务器 request response 创建一个服务器对象
/**
 *  监听port , 接收请求，返回数据
 *  Stream binary
 */

const server= http.createServer((req,res)=>{

})

server.listen(3000,()=>{
    console.log("server is ready on port 3000")
})

