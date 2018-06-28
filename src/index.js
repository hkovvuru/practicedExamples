const bodyparser = require('body-parser');
const express = require('express');
// const ejs = require('ejs');
const router = require('../src/routers/router')


/* import bodyparser from 'body-parser';
import express from 'express';
import ejs from 'ejs';
import router from '../src/router-connection/router-methods'; */

// calls the express function
const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
// ejs engine setting 
app.set('view engine', 'ejs');

app.use('/api', router);
// let employee = [{}];
// get the student details
router.get('/', (req, res) => {
    res.json(employees);
});

// created server at port 5000
app.listen(8000, () => {
    console.log('Sever listening at port number 8000');
});