const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.use('/static', express.static(path.resolve(__dirname, '../dist')));

app.get('/', function (req, res) {
    const pathToHtmlFile = path.resolve(__dirname, '../dist/index.html');
    const contetntFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8');
    res.send(contetntFromHtmlFile);
});

app.listen(3000, function() {
    console.log('application i runningon http://localhost:3000/');
})