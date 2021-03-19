// Getting Started With Express Framework
// const express = require('express');

// const server = express();

// server.get('/', (req, res) => {
//     res.send('Express Works');
// })

// server.get('/route1', (req, res) => {
//     res.send('route1 Works');
// })


// server.listen(3000, function() {
//     console.log('Express server listing to port 3000')
// })

// Working with Express and http together
const express = require('express');
const http = require('http');
const server = express();
var app = http.createServer(server);
const path = require('path');
const fs = require('fs');


server.get('/', (req, res) => { // Root route
    res.send('Express Works');
})

server.get('/route1', (req, res) => { // different route
    res.send('route1 Works');
})


// Serving Json Files
server.get('/json', (req, res) => {
    fs.readFile('./file.json', (err, data) => {
        if (err)
            console.log(err);
        else
            res.send(data.toString());
    })
})

// Servng Static Files
server.use('/public', express.static(path.join(__dirname, 'static'))); // __dirname gives the cureent working directory and here we are saying that show public folder int the source rather than our static folder which is the cureent file path(__dirname)
server.get('/staticfiles', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
})




app.listen(3000, function() { // Listen On Port 3000
    console.log('Express server listing to port 3000')
})
