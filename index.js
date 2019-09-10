const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send('Hello from the server');
});

app.get('hello/api', (req, res) => {
    res.json({sayHi: 'This is a message from server'});
app.listen(3000, () => {
    console.log('App listening on port 3000');
});