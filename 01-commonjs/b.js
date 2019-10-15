
//引于a.js require("path")
//通过路径查看指定的模块， {getA,show}
const a = require("./a")
const gulp = require("gulp")
let b = 1;
console.log(a)

console.log(require("./a.css"))

a.show()
