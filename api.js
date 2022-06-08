const express = require('express');
const router = require('./src/routes/router');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3003;

app.use(cors({
  origin: 'http://localhost:8080',
  methods: ['GET', 'POST']
}));
app.use(bodyParser.json());
app.use('/', router);

app.listen(PORT, () => console.log(`Rodando na porta: ${PORT}`));
