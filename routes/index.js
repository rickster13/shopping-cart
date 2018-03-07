let express = require('express');let router = express.Router();let Product = require('../models/product');let csurf = require('csurf');let csrfProtect = csurf();router.use(csrfProtect);/* GET home page. */router.get('/', function(req, res, next) {  Product.find(function(err, docs) {    let productChunks = [];    let chunkSize = 3;    //splitting the rendering of products by 3 for every row    for (i = 0; i < docs.length; i += chunkSize) {      productChunks.push(docs.slice(i, i + chunkSize));    }      res.render('shop/index', { title: 'Shopping Cart', product: productChunks });  });});/* SIGN Up page for new users */router.get('/user/signup', function (req, res, next) {  // Pass along the csrf token with the request    res.render('user/signup', {_csrfToken: req.csrfToken});});router.post('/user/signup', function (req, res, next){  res.redirect('/');});module.exports = router;