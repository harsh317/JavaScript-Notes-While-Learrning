
const express = require('express');
const http = require('http');
const server = express();
var app = http.createServer(server);
const path = require('path');
const fs = require('fs');
const BodyParser = require('body-parser');


// Getting started with Post requests
server.use('/public', express.static(path.join(__dirname, 'static'))); 
server.use(BodyParser.urlencoded({ extended: false }));
server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
})

server.post('/', (req, res) => {
    console.log(req.body)
    res.send('successfully posted data')
});

app.listen(3000, function() { // Listen On Port 3000
    console.log('Express server listing to port 3000')
})
