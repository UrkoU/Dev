const http = require('http');
const os = require('os');
const path = require('path');

const hostname = '0.0.0.0';
const port = process.argv[2] || 4000;
const world = process.env.WORLD || 'santi'
const server = http.createServer((req, res) => {

    var address = server.address().address;
    var port = server.address().port;
    var hostname = os.hostname();
    var ipremote = req.headers['x-forwarded-for'] ||
            req.socket.remoteAddress ||
            null;
    //var ua = req.headers['user-agent'].split(' ')[0];
    //var scriptName = path.basename(__filename);
    var time = new Date();
    time = time.getHours() + ':' +time.getMinutes() + ':' + time.getSeconds() + ' ' + time.getMilliseconds()

    var json = JSON.stringify({
        api: hostname + ':' + port,
        ipremote: ipremote,
        time: time,
        hola: world
    });
    console.log(json);

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.end(json)
});

server.listen(port, hostname, () => {
    console.log(`API Server running at http://${hostname}:${port}/`);
});
