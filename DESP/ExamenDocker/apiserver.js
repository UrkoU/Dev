const http = require('http');
const os = require('os');
//const path = require('path');

const port = process.argv[2] || 4000;
const hostname = os.hostname();

const server = http.createServer((req, res) => {
    var addressP = server.address().port;
    var ipreq = req.headers['x-forwarded-for'] ||
        req.socket.remoteAddress ||
        null;
    //var ua = req.headers['user-agent'].split(' ')[0];
    //var scriptName = path.basename(__filename);
    var time = new Date();
    time = time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds() + ' ' + time.getMilliseconds()

    var json = JSON.stringify({
        api: hostname + ':' + addressP,
        time: time,
        ipreq: ipreq
    });

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.end(json);

    console.log(json);
});

server.listen(port, '0.0.0.0', () => {
    // 0.0.0.0 = Todas. Specifies the IP address we want to listen to
    console.log(`API Server running at http://${hostname}:${server.address().port}/`);
});