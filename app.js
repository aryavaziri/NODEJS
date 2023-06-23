const express = require('express');
const app = express()
app.use(express.static(__dirname + "/static"))


const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

app.get('/', (req, res) => {
    res.send("HELLO WORLDDDDDD")
})

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});