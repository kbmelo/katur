// ==================== EXTERNAL IMPORTS ==================== //

const express = require('express');
const path = require('path');

// ==================== INTERNAL IMPORTS ==================== //

// ==================== GLOBAL VARIABLES ==================== //

const app = express();

// ==================== MIDDLEWARE ==================== //

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// serving static files
app.use('/static', express.static(path.join(__dirname, '../client/build/static')));
app.use('/js', express.static(path.join(__dirname, '../client/build/js')));
app.get('/favicon.png', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/favicon.png'));
});

// ==================== FUNCTIONS ==================== //

// ==================== ROUTES ==================== //

// ==================== RENDER VIEWS ==================== //

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.get('/test', (req, res) => {
    res.send(JSON.stringify({ name: 'efbnu' }));
});

// ==================== START SERVER ==================== //

app.listen(process.env.PORT || 3001, () => {
    console.log('READY');
});

// ====================================================== //