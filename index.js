const express = require('express');
const app = express();
const name = require('./routes/user');
const dotenv = require('dotenv');
dotenv.config();

const { NAME } = process.env;

app.get('/test', (req, res) => {
    res.send(NAME || "no hhay");
});

const port = 3000;

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});