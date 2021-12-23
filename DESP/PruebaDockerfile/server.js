const http = require('http');
const os = require("os");

const hostname = '0.0.0.0';
const port =  process.argv[2] || 3000;
const server = http.createServer((req, res) => {

    var host = server.address().address;
    var port = server.address().port;

    var hostname = os.hostname();
    res.statusCode = 200;
    
    // res.setHeader('Content-Type', 'text/plain');
    // res.end('Hello World, width Love,\n'+'Running on '+host+':'+port+'\n' + hostname);

    
    var jsArray = ["item1", "item2"];
    var jsObjecto = { item1: "item1val", item2: "item2val" };
    var json = JSON.stringify({ 
        elObjecto: jsObjecto, 
        elArray: jsArray, 
        ip: host,
        port: port,
        hostname: hostname,
        hello: "World"
    });
    res.setHeader('Content-Type', 'application/json');
    res.end(json)
    
});

server.listen(port, hostname, () => {
   console.log(`Server running at http://${hostname}:${port}/`);
});
