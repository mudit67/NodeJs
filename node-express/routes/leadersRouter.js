const express = require('express');
const bodyParser = require('body-parser');
const leaderId = require('./leaderIdRouter');
const leader = express.Router();
leader.use(bodyParser.json());
leader.use('/:leaderId',leaderId);
leader.route('/')
.all( (req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the leaders to you!');
})

.post((req,res,next) => {
    res.end('Will add the leader: ' +  req.body.name + ' with details: ' + req.body.description);
})

.put((req,res,next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported by /leaders');
})

.delete((req,res,next) => {
    res.end('Deleting all the leaders!');
});

module.exports = leader;
