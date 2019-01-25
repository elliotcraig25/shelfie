const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();
const ctrl = require('./controller');

const app = express();
app.use(bodyParser.json());

port = 4000
app.listen(port, ()=>{console.log(`listening on the port ${port}`)})
