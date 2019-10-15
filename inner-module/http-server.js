const http = require("http") //服务器，客户端
const fs = require("fs")  //文件，文件夹操作的方法
const path = require("path") //获取设置路径相关的方法


//http 创建一个服务器 fs path
/**
 * 1.createServer -> 创建一个server的对象
 * 2.new http.Server()
 */

//服务器 request response 创建一个服务器对象
/**
 *  监听port , 接收请求，返回数据
 *  Stream binary
 */

const server = http.createServer((req, res) => {
    console.log(req.url);
    let extname = path.extname(req.url) //.jpg .ico
    switch (extname) {
        case ".jpg":
            //fs jpg文件并返回 文件流 buffer
            let reader = fs.createReadStream(path.resolve(__dirname,"images",path.basename(req.url)))
            reader.pipe(res)
            break;
        case ".mp4":
            //fs jpg文件并返回 文件流 buffer
            let reader2 = fs.createReadStream(path.resolve(__dirname,path.basename(req.url)))
            reader2.pipe(res)
            break;
        case ".css":
            //fs jpg文件并返回 文件流 buffer
            let reader3 = fs.createReadStream(path.resolve(__dirname,"css",path.basename(req.url)))
            reader3.pipe(res)
            break;
        default:
            let afileUrl = path.resolve(__dirname, "index.html");
            let content = fs.readFileSync(afileUrl) //绝对路径 f:/xxx/xx /usr/xx/xx
            res.end(content)
            break;
    }

})

server.listen(3000, () => {
    console.log("server is ready on port 3000")
})

