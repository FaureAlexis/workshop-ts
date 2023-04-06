import express, {Application as App, Request, Response, NextFunction} from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import addition from "./addition";
import cleanString from "./cleanString";
import {verifyUser, greetUser} from './greetUser';

const app: App = express(); // creer app

app.use(cors()); // CORS
app.use(bodyParser.json()); // JSON Body

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

function middleware (req: Request, res: Response, next: NextFunction) {
  console.log("Hello from middleware");
  next();
}

app.post('/addition', middleware, (req: Request, res: Response, next: NextFunction) => {
    const number1: number = req.body.a;
    const number2: number = req.body.b;
    const result: number = addition(number1, number2);
    if (typeof result !== "number") {
      return res.status(500).send("Error");
    }
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

module.exports = app;
