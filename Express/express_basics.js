const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    console.log('user hit the resource')
    res.status(200).send('Home page')
})

app.get('/about', (req, res)=>{
    res.status(200).send('About page')
})

app.all('*', (req, res)=>{
    res.status(404).send('Error 404: Resource not found.')
})

app.listen(5000, ()=>{
    console.log('Server listen on port 5000')
})