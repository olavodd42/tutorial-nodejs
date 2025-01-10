const express = require('express')
const app = express()
let {people} = require('./data')

app.use(express.static('./methods-public'))

//parse form data
app.use(express.urlencoded({extended: false}))
// parse JSON
app.use(express.json())

app.post('/login', (req,res)=>{
    const {name} = req.body

    if(name) {
        return res.status(202).send(`Welcome: ${name}`)
    }
    res.status('401').send('Please provide the name')
})



app.listen(5000, ()=>{
    console.log('Server listen on port 5000')
})