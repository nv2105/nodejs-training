var http=require("http")
var A = 10
var B = 20
var c= A+B
var msg
if(c>20){
    msg="c is greater than 20"
}
else{
    msg="c is less than 20"
}

http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'})
    res.write("A value is"+A)
    res.write("<br>B value is"+B)
    res.write(`<br><b> sum is ${c}</b>`)
    res.end("<br>DONE"+ msg)
}
).listen(2000) 
console.log("server is started at http://127.0.0.1:2000");