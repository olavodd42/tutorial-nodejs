const http = require('http')

const server = http.createServer((req, res)=>{
    url = req.url
    if (url === '/') {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('<h1>home page</h1>')
        //res.write(req.method)
        //res.write(req.url)
        res.end()
    } else if (url === '/about') {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('<h1>about page</h1>')
        //res.write(req.method)
        //res.write(req.url)
        res.end()
    } else{
        res.writeHead(404, {'content-type': 'text/html'})
        res.write('<h1>page not found</h1>')
        //res.write(req.method)
        //res.write(req.url)
        res.end()
    }

})

server.listen(5000)