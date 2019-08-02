global.fetch = require('node-fetch');
const Unsplash = require('unsplash-js').default;
const toJson = require('unsplash-js').toJson;
const express = require('express');
const cors = require('cors');
const path = require('path');

require('dotenv').config({ path: '../../.env' });

const config = require('./config/server');

const unsplash = new Unsplash(config);

const app = express();
app.use(cors());

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/api/photos', (req, res) => {
    unsplash.photos.listPhotos(req.query.page, req.query.count)
        .then(toJson)
        .then(json => res.json(json))
});
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.all('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

