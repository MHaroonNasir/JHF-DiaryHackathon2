const express = require('express');
const cors = require('cors');

const api = express();

api.use(express.json());
api.use(cors());

const diaryRouter = require('./routes/route');

api.use("/diary", diaryRouter);

module.exports = api;
