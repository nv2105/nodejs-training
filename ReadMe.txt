interview question of node 
How to install third party packages ?

>We have one website which contains all the third party packages.

https://www.npmjs.com/

>What is Package.json?

Package json contains all the library and their version.

>How to create package.json?

2 Method:

1-npm init

2-npm init -y

>How to download third party packages? Command ?

npm i packagename -g

npm install packagename -g

npm un packagename -g

>What is nodemon ?

Nodemon package will help us to restart server/js file automatically when changes detected by pressing ctr + s.

>How to Install?

Download Globally in pc

>npm i nodemon -g

C:\Users\akash\AppData\Roaming\npm\node_modules

Download in Project

>npm i nodemon

in project it will store in node modules.

>Run Project using nodemon?

nodemon server.js

-----------------------------------------------------------------
node js server side code:
browser

module :
Core modeule
	by default node installed 
	example:http,fs
local module 
	create module 
	example: database connection 
third party module 
	library 
		expressjs
-----------------------------------------------------------------
create server

var http = require('http')
 
http.createServer((req,res)=>{
    res.end("<h1>hello dheeraj bhaisa </h1>")

}).listen(22110)
console.log("Server is started on http://127.0.0.1:22110");
-----------------------------------------------------------------
 