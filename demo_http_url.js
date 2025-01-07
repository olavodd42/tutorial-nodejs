var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  // o argumento req representa a requisição do cliente
  res.write(req.url);
  res.end();
}).listen(8080);