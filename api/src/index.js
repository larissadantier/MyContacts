const express = require('express');
require('express-async-errors');

const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);
app.use((error, request, response, next) => {
  console.log('ERROR HANDLER');
  console.log(error);
  response.sendStatus(500);
});

app.listen(3000, () => console.log('🔥 Server Started http://localhost:3000'));
