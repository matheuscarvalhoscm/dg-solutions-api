const express = require('express');
const router = require('./src/routes/router');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3003;

app.use(bodyParser.json());
app.use('/', router);

app.listen(PORT, () => console.log(`ouvindo na porta: ${PORT}`));
