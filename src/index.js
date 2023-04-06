const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const addition = require('./addition');
const cleanString = require('./cleanString');
const greetUser = require('./greetUser');

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.post('/addition', (req, res) => {
    const { a, b } = req.body;
    const result = addition(a, b);
    res.send({ result });
});

app.post('/cleanString', (req, res) => {
    const { s } = req.body;
    const result = cleanString(s);
    res.send({ result });
});

app.post('/greetUser', (req, res) => {
    const { user } = req.body;
    const result = greetUser(user);
    res.send({ result });
});

app.listen(3000, () => {
  console.log('App is listening on port 3000');
});
