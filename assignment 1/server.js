const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    console.log(`Received request for: ${req.url}`);
    
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to Node Server\n');
    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('About Page\n');
    } else if (req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Contact Page\n');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Error Message\n');
    }
});

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
