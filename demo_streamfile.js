const {createReadStream} = require('fs')
const stream = createReadStream('./content/big.txt', {
    highWaterMark: 90000,
    encoding: 'utf8'});

stream.on('data', (result)=>{
    console.log(`We are receiving ${result.length} bytes of data.`)
    console.log({result})
})

stream.on('error', (err)=>{
    console.log(err)
})