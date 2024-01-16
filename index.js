const express = require ('express')
const app = express()
const phones = require('./phones.json')
var cors = require('cors')

const port = 5000;

app.use(cors())

app.get('/',(req,res)=>{
    res.send('phone server coming soonnnn toooo')
})

app.get('/phones',(req,res)=>{
    res.send(phones)
})

app.get('/phones/:id',(req,res)=>{
    const id = parseInt(req.params.id) ;
    console.log('phone id is',id);
    const phone = phones.find(phone=>phone.id===id) || {};
    res.send(phone)
})

app.listen(port)