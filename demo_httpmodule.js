const http = require('http')

/* req - requisição de entrada
   res - retorno de resposta
*/
const server = http.createServer((req, res)=>{
    res.write('Welcome to our homepage!')
    res.end()
})

server.listen(5000)