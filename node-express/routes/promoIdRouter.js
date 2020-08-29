const express = require('express');
const bodyParser = require('body-parser');

const promoId = express.Router({mergeParams: true});
promoId.use(bodyParser.json());
promoId.route('/')
.all( (req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})

.get((req,res,next) => {
    res.end('Will send details of the Promotion: ' + req.params.promoId + ' to you!');
})

.post((req,res,next) => {
    res.statusCode = 403;
    res.end('POST operation not supported by /promotions/' + req.params.promoId);
})

.put((req,res,next) => {
    res.write('Updating the Promotion: ' + req.params.promoId)+ "\n";
    res.end('\nWill Update the Promotion: ' + req.body.name + ' with details: ' + req.body.description);
})

.delete((req,res,next) => {
    res.end('Deleting Promotion: ' + req.params.promoId);
});

module.exports = promoId;