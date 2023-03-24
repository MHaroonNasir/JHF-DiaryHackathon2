const express = require('express');
const cors = require('cors');
const diaryRouter = require('./routes/diary');

const api = express();

api.use(express.json());
api.use(cors());

api.use('/diary', diaryRouter);

api.get('/', (req, res) => {
    res.json({
        title: 'My Diary API',
        description: 'Please read all my secrets on the internet'
    })
});

module.exports = api;