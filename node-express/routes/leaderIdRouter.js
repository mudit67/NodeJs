const express = require('express');
const bodyParser = require('body-parser');
const leaderId = express.Router({mergeParams: true});

leaderId.use(bodyParser.json());
leaderId.route('/')
.all( (req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})

.get((req,res,next) => {
    res.end('Will send details of the Leader: ' + req.params.leaderId + ' to you!');
})

.post((req,res,next) => {
    res.statusCode = 403;
    res.end('POST operation not supported by /leaders/' + req.params.leaderId);
})

.put((req,res,next) => {
    res.write('Updating the Leader: ' + req.params.leaderId)+ "\n";
    res.end('\nWill Update the Leader: ' + req.body.name + ' with details: ' + req.body.description);
})

.delete((req,res,next) => {
    res.end('Deleting Leader: ' + req.params.leaderId);
});

module.exports = leaderId;