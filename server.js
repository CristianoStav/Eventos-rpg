require('dotenv').config();
require('./config/sequelize');
const express = require('express');
const app = express();
const port = process.env.PORT;
const cors = require('cors');
const BodyParser = require('body-parser');

app.use(cors());
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
app.use(require('./routes/routes'));

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});