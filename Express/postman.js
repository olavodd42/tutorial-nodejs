const express = require('express')
const app = express()
let {people} = require('./data')

app.use(express.static('./methods-public'))

//parse form data
app.use(express.urlencoded({extended: false}))
// parse JSON
app.use(express.json())

app.get('/api/people', (req, res)=>{

    res.status(200).json({success: true, data: people})
})

app.post('/api/people', (req,res)=>{
    const {name} = req.body

    if(!name) {
        return res.status(400).json({success: false, msg: 'Please provide the name!'})
    }
    res.status(201).send({success: true, person: name})
})

app.post('/api/postman/people', (req, res)=>{
    const {name} = req.body

    if(!name) {
        return res.status(400).json({success: false, msg: 'Please provide the name!'})
    }
    res.status(201).send({success: true, data:[...people, name]})
})

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