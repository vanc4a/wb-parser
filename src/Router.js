const express = require('express');
const Controller = require('./Controller')

const Router = express.Router();

Router.get('/promo',Controller.promo)

module.exports = Router;