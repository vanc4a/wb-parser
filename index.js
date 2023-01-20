const express = require('express');
const app = express();
const Router = require('./src/Router')

app.use('/api', Router);

app.listen(3000);


