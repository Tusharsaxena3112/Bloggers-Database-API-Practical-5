var http = require('http');
var app  = require('./app');
const server = http.createServer(app);
server.listen(3000,()=>{
    console.log("Server has started on port 3000");
});