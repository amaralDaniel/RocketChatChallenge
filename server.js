/* eslint-env node */
const http = require('http');
const url = require('url');

var {analyzeTask} = require('./index');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  
    if (req.method !== 'POST') handleError(405, res);
    
    const {pathname} = url.parse(req.url);

    if (pathname == '/') {
        res.end("Rocket.Chat Challenge is up on Vercel!");
    }

    if (pathname !== '/analyze/tasks') {
        handleError(404, res);
    } else {
        let body = [];
        //building the body
        req.on('data', (chunk) => {
            body.push(chunk);
            }).on('end', () => {
            body = Buffer.concat(body).toString();
            //post body \n formatting 
            body = body.replace(/\\n/g, "\n");
            
            res.end(analyzeTask(body));
        });
    }
});

var handleError = (statusCode, res) => {
    res.statusCode = statusCode;
    res.end(`{"error": ${http.STATUS_CODES[statusCode]}}`)
}

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});