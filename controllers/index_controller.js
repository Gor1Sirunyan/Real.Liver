var express = require('express');
var router = express.Router();
const i18next = require('i18next');
const login1 = require('../locales/en/translation');

class IndexController {
    static list(req, res, next) {
        res.render('login',  {login1: login1.login1});
    }
}
module.exports = IndexController;