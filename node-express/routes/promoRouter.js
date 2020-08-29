const express = require('express');
const bodyParser = require('body-parser');
const PromoIdRouter = require('./promoIdRouter');
const promo = express.Router();
promo.use(bodyParser.json());
promo.use('/:promoId', PromoIdRouter);
promo.route('/')
.all( (req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the Promotions to you!');
})

.post((req,res,next) => {
    res.end('Will add the Promotion: ' +  req.body.name + ' with details: ' + req.body.description);
})

.put((req,res,next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported by /promotions');
})

.delete((req,res,next) => {
    res.end('Deleting all the promotions!');
});

module.exports = promo;
