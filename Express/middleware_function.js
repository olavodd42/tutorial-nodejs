const express = require('express')
const app = express()

const logger = (req, res, next)=>{
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()

    console.log(method, url, time)
    //res.send('')
    next()
}

// req => middleware=>res
app.get('/', logger, (req, res)=>{
    
    res.send('<h1>Home Page</h1>')
})

app.get('/about', logger, (req, res)=>{
    res.send('<h1>About Page</h1>')
})

app.listen(5000, ()=>{
    console.log('Server listen on port 5000')
})