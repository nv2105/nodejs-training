var http = require("http")//http is core module.

http.createServer((req,res)=>(

    res.end("<h1>Hello Node server</h1>")

)).listen(2000)
 console.log("server is started on http://127.0.0.1:2000");