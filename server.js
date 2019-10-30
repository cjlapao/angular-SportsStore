const express = require('express');
const https = require('https');
const fs = require('fs');
const history = require('connect-history-api-fallback');
const jsonServer = require('json-server');
const bodyParser = require('body-parser');
const auth = require('./authMiddleware.js');
const router = jsonServer.router('serverData.json');

const enableHttps = true;
const ssloptions = {};

if (enableHttps) {
  ssloptions.cert = fs.readFileSync('./ssl/fullchain1.pem');
  ssloptions.key = fs.readFileSync('./ssl/privkey1.pem');
}

const app = express();

app.use(bodyParser.json());
app.use(auth);
app.use('/api', router);
app.use(history());
app.use('/', express.static('./dist/SportsStore'));

app.listen(80, () => console.log('HTTP Server running on port 80'));

if (enableHttps) {
  https
    .createServer(ssloptions, app)
    .listen(443, () => console.log('HTTPS server running on port 443'));
} else {
  console.log('HTTPS disabled');
}
