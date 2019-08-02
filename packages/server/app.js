global.fetch = require('node-fetch');
const Unsplash = require('unsplash-js').default;
const toJson = require('unsplash-js').toJson;
const express = require('express');
const cors = require('cors');

require('dotenv').config({ path: '../../.env' });

const config = require('./config/server');

const unsplash = new Unsplash(config);

const app = express();
app.use(cors());

app.get('/api/photos', (req, res) => {
    unsplash.photos.listPhotos(req.query.page, req.query.count)
        .then(toJson)
        .then(json => res.json(json))
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

