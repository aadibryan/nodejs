const http = require('http');//importing http module

//creating the http server
const server = http.createServer((req,res)=>{
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      data: 'Hello World!',
    }));
})

//listening to the server that we have created
server.listen(5000)

