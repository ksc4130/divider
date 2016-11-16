import express from 'express';

var app = express();

app.use(express.static('public'));

app.listen(4000, () => console.log('server listening on port 4000'));