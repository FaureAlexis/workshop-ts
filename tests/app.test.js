const request = require('supertest');
const express = require('express');
const app = require('../src/index');

const addition = require('../src/addition');
const cleanString = require('../src/cleanString');
const greetUser = require('../src/greetUser');


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
    const user = {
        name: 'John',
        role: 'admin',
    };
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
