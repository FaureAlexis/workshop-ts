import request from "supertest";
import { Request, Response } from "express";
import app from '../src/index';

import addition from "../src/addition";
import User from '../src/types/user';
import cleanString from "../src/cleanString";
import {verifyUser, greetUser} from '../src/greetUser';

describe('1 + 1 = 2', () => {
  test("Addition should be okay", (done) => {
    expect(addition(1, 1)).toBe(2);
    done();
  })
})

describe('Test the root path', () => {
  test('It should response the GET method with "Hello, world!"', (done) => {
    request(app).get('/').then((response) => {
      expect(response.statusCode).toBe(200);
      expect(response.text).toBe('Hello, world!');
      done();
    });
  });
});

describe('Test the /addition endpoint', () => {
  test('It should response the POST method with the correct result', (done) => {
    const a = 4;
    const b = 6;
    request(app)
      .post('/addition')
      .send({ a, b })
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body.result).toBe(addition(a, b));
        done();
      });
  });
});

describe('Test the /cleanString endpoint', () => {
  test('It should response the POST method with the cleaned string', (done) => {
    const s = 'Hello, world!';
    request(app)
      .post('/cleanString')
      .send({ s })
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body.result).toBe(cleanString(s));
        done();
      });
  });
});

describe('Test the /greetUser endpoint', () => {
  test('It should response the POST method with the correct greeting', (done) => {
    const user: User = {
      name: 'John',
      role: 'admin',
      email: 'john.doe@mail.com',
    }
    request(app)
      .post('/greetUser')
      .send({ user })
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body.result).toBe(greetUser(user));
        done();
      });
  });
});

afterAll((done) => {
  done();
})
