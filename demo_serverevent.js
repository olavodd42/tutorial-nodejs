const http = require('http')

/* req - requisição de entrada
   res - retorno de resposta
*/
const server = http.createServer()

server.on('request', (req, res)=>{
    res.end('Welcome')
})

server.listen(5000)