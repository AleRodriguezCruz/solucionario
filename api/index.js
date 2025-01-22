const express = require('express');
const upload = require('./upload');
const app = express();

app.use(express.json());
app.use(express.static('public'));

// Endpoint para recibir los problemas reportados
app.post('/report', (req, res) => {
    // Aquí puedes almacenar los datos en una base de datos o archivo
    res.status(200).send('Problema reportado con éxito');
});

// Endpoint para cargar archivos
app.post('/upload', upload.single('file'), (req, res) => {
    res.status(200).send('Archivo subido con éxito');
});

module.exports = app;
