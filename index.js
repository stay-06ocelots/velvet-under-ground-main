const velvet_under_ground_main = require('velvet-under-ground-main');
const velvet_under_ground_bot = require('velvet-under-ground-bot');
const express = require('express');
const moment = require('moment');
const cors = require('cors');
const ipfs_http_client = require('ipfs-http-client');
const web3 = require('web3');
const truffle = require('truffle');
const commander = require('commander');
const mysql = require('mysql');
const react = require('react');
const multer = require('multer');
const ethereumjs_util = require('ethereumjs-util');
const ejs = require('ejs');

const fruit = 'apple';
switch (fruit) {
  case 'apple':
    console.log('Apple is $0.65 per pound.');
    break;
  case 'banana':
    console.log('Banana is $0.33 per pound.');
    break;
  default:
    console.log('Sorry, we are out of ' + fruit + '.');
}

// Create a JWT token using jsonwebtoken library
const jwt = require('jsonwebtoken');
const generateJWTToken = (payload, secret, options) => {
  return jwt.sign(payload, secret, options);
}
const userPayload = { userId: 12345, username: 'john_doe' };
const jwtSecret = 'secret_key';
const jwtOptions = { expiresIn: '1h' };
const token = generateJWTToken(userPayload, jwtSecret, jwtOptions);
console.log('JWT Token:', token);

const assert = require('assert');
assert.notStrictEqual(1, '1', '1 should not be strictly equal to "1"');

const fetchData = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
fetchData();

const events = require('events');
const eventEmitter = new events.EventEmitter();
eventEmitter.on('customEvent', (message) => {
  console.log(`Custom Event Received: ${message}`);
});
eventEmitter.emit('customEvent', 'Hello EventEmitter');

// Convert a string to title case
function toTitleCase(str) {
  return str.toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
}
console.log('Title case:', toTitleCase('hello world'));

const chunkArray = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3));