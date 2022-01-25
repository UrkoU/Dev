const http = require('http');
const os = require("os");

const ifaceIP = '0.0.0.0'; // Specifies the IP address we want to listen to
const port = process.argv[2] || 3000;
const api = process.env.API || 'http://localhost:4000'

const server = http.createServer((req, res) => {

    var host = server.address().address;
    var port = server.address().port;
    var hostname = os.hostname();
    var time =  new Date();
    time = time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds() + ' ' + time.getMilliseconds()

    var html = `
    <div>
    web: <strong>${hostname}</strong> ${time}<br>
    <button id='btn' title='API'>Call API</button><hr>
    </div>
    <ul id='lista'></ul>
    <style>body,button { font-size: xx-large; font-family: monospace; } </style>
    <script type='text/javascript'>
    document.getElementById('btn').onclick = callAPI;
    function callAPI() {
        fetch('${api}')
        .then(data => {
            console.log(data);
            return data.json();
        })
        .then(data => {
            console.log(data);
            addData(JSON.stringify(data));
        })
        .catch(error => addData(error))  
    }
    function addData(txt) {    
        var ul = document.getElementById('lista');
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(txt));
        ul.appendChild(li); 
    }    
    </script>
    `;
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    res.end(html)
});

server.listen(port, ifaceIP, () => {
    console.log(`WEB Server running at http://${ifaceIP}:${port}/`);
    console.log(`WEB Server reading from ${api}/`);
});