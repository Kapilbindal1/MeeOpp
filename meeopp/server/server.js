const express = require('express');
const bodyParser = require('body-parser');
// initialize our express app
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
require('./database/dbconfig');
// API calls
const route = require('./routes/user.route');

app.use('/', route);
app.listen(port, () => console.log(`Listening on port ${port}`));
