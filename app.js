const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path= require('path')
const rootPath = require('./rootPPath')
const fs = require('fs')
let userData = []

app.use(bodyParser.urlencoded());

app.get('/', (req, res)=>{
    res.sendFile(path.join(rootPath, './', 'index.html'))
})

app.post('/submitted', (req, res)=>{
    res.send('submitted')
    const filePath = path.join(rootPath, 'data', 'data.json')
    userData.push(req.body)
    fs.writeFile(filePath, JSON.stringify(userData), (err)=>{
        console.log(err)
    });
})





app.listen(3000, ()=>{
    console.log('server strated')
})