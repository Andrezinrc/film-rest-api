const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const filmRoutes = require('./routes/filmRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', filmRoutes);

app.listen(port, () => {
    console.log("servidor rodando na porta ", port);
})