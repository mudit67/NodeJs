const express = require('express');
const morgan = require('morgan')
const http =require('http');
const hostname= 'localhost';
const port = 3000;
const app  = express();
const bodyParser = require('body-parser');
const dishRouter = require('./routes/dishRouter');
const leaders = require('./routes/leadersRouter');
const promo = require('./routes/promoRouter');
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use('/dishes', dishRouter);
app.use('/leaders',leaders);
app.use('/promotions',promo);
const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server Running at http://${hostname}:${port}`);
});
