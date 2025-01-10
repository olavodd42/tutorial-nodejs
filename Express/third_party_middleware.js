const express = require('express')
const morgan = require('morgan')
const app = express()
const logger = require('./logger.js')
const authorize = require('./authorize.js')

//app.use([logger, authorize])
app.use(morgan('tiny'))
// req => middleware=>res
app.get('/', (req, res)=>{
    
    res.send('<h1>Home Page</h1>')
})

app.get('/about', (req, res)=>{
    res.send('<h1>About Page</h1>')
})
app.get('/api/products', (req, res)=>{
    res.send('<h1>Products</h1>')
})
app.get('/api/items', (req, res)=>{
    res.send('<h1>Items</h1>')
})

app.listen(5000, ()=>{
    console.log('Server listen on port 5000')
})