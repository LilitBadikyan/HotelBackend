const express = require('express');
const bodyparser = require('body-parser');

const app = express();
const api_v1 = require('./controllers/api');
const Utility = require('./components/utility/services');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended: true
}));

app.use(Utility.parseQuery)

api_v1.initialize(app);
console.log('connection !!');
app.listen(3002);
