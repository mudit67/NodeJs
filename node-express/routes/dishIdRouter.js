const express = require('express');
const bodyParser = require('body-parser');

const DishId = express.Router({mergeParams: true});
DishId.use(bodyParser.json());
DishId.route('/')
// for dishid

.all( (req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})

.get((req,res,next) => {
    res.end('Will send details of the dish: ' + req.params.dishId + ' to you!');
})

.post((req,res,next) => {
    res.statusCode = 403;
    res.end('POST operation not supported by /dishes/' + req.params.dishId);
})

.put((req,res,next) => {
    res.write('Updating the dish: ' + req.params.dishId)+ "\n";
    res.end('\nWill Update the dish: ' + req.body.name + ' with details: ' + req.body.description);
})

.delete((req,res,next) => {
    res.end('Deleting dish: ' + req.params.dishId);
});

module.exports = DishId;