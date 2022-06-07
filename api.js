const express = require('express');
const router = require('./src/routes/router');

const app = express();
const PORT = 3003;

app.use('/', router);

app.listen(PORT, () => console.log(`ouvindo na porta: ${PORT}`));
