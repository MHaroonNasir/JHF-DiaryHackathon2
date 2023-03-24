const express = require('express');
const cors = require('cors');
const dairyRouter = require('./routes/route');
const { json } = require('express');

const api = express();

api.use(express.json());
api.use(cors());
api.use('/diary', dairyRouter)
api.get('/', (req, res) => {

    res.json({
        message: 'Welcome to Dairy API'
    })
})

module.exports = api;
