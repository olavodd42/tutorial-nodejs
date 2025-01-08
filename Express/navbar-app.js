const {readFileSync} = require('fs')
const http = require('http')
const homepage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req, res)=>{
    url = req.url
    console.log(url)
    if (url === '/') {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(homepage)
        //res.write(req.method)
        //res.write(req.url)
        res.end()
    } else if (url === '/about.html') {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('<h1>about page</h1>')
        //res.write(req.method)
        //res.write(req.url)
        res.end()
    } else if (url === '/styles.css') {
        res.writeHead(200, {'content-type': 'text/css'})
        res.write(homeStyles)
        //res.write(req.method)
        //res.write(req.url)
        res.end()
    } else if (url === '/logo.svg') {
        res.writeHead(200, {'content-type': 'image/svg+xml'})
        res.write(homeImage)
        //res.write(req.method)
        //res.write(req.url)
        res.end()
    } else if (url === '/browser-app.js') {
        res.writeHead(200, {'content-type': 'text/javascript'})
        res.write(homeLogic)
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