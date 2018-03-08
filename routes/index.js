let express = require('express');let router = express.Router();let csurf = require('csurf');let passport = require('passport');let Product = require('../models/product');let csrfProtect = csurf();router.use(csrfProtect);/* GET home page. */router.get('/', function(req, res, next) {    Product.find(function(err, docs) {        let productChunks = [];        let chunkSize = 3;        //splitting the rendering of products by 3 for every row        for (i = 0; i < docs.length; i += chunkSize) {            productChunks.push(docs.slice(i, i + chunkSize));        }        res.render('shop/index', { title: 'Shopping Cart', product: productChunks });    });});/* SIGN Up page for new users */router.get('/user/signup', function (req, res, next) {    let messages = req.flash('error');  // Pass along the csrf token with the request    res.render('user/signup', {_csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});});router.post('/user/signup', passport.authenticate('local', {    successRedirect: '/user/profile',    failureRedirect: '/user/signup',    failureFlash: true}));router.get('/user/profile', function (req, res, next) {    res.render('user/profile');});module.exports = router;