var http = require('http');
var fs = require('fs');

http.createServer((req, res) => {
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8');
    
    res.writeHead(200, { 'Content-Type': 'text/plain' }); // Set appropriate headers
    
    // Pipe the file stream to the HTTP response
    fileStream.pipe(res);
    
    // Handle errors in the file stream
    fileStream.on('error', (err) => {
        console.error('Error reading the file:', err.message);
        res.writeHead(500);
        res.end(`File not found or error occurred: ${err.message}`);
    });
}).listen(5000, () => {
    console.log('Server is running on port 5000');
});
