"use strict";

var express = require('express');

var dotenv = require("dotenv");

var bodyParser = require('body-parser');

var _require = require('./services/mail'),
    send = _require.send;

var form = require('./services/form');

dotenv.config();
var app = express();
app.set('views', './views');
app.set('view engine', 'ejs');
app.get('/', function (req, res) {
  res.render('index');
});
app.post('/', bodyParser.urlencoded({
  extended: false
}), function _callee(req, res) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log("submit"); // const info={
          //     name:req.body.name,
          //     email:req.body.email,
          //     phoneNumber:req.body.phoneNumber,
          //     messenge:req.body.message
          // }
          //     await send('anhngumailamcrazy@gmail.com','CÓ HỌC VIÊN',form.email(info.name,info.email,info.phoneNumber,info.messenge));
          //     return res.render('index');

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
});
app.use(express["static"]('public'));
app.listen(process.env.PORT, function () {
  console.log("app listen on 3000");
});