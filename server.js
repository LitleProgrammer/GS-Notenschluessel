//Imports
const express = require('express');
const path = require('path');




//Setup
const port = 8748;
const app = express();
app.set('view engine', 'ejs');




//Website
app.get('/', (req, res) => {
    res.render('../view/index.ejs');
});

app.get('/style.css', function (req, res) {
    res.sendFile(path.join(__dirname, 'static', 'style.css'));
});

app.get('/script.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'view', 'script.js'));
});




app.listen(port, () => console.log(`Server started on port: ${port}`));