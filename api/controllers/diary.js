const Diary = require('../models/Diary');

async function index(req, res) {
    try {
        const diaries = await Diary.getAll();
        res.status(200).json(diaries);
    } catch (error) {
        res.status(500).json({ "error": error.message });
    }
}

async function show(req, res) {
    try {
        const diary = await Diary.getById(req.params.id);
        res.status(200).json(diary);
    } catch (error) {
        res.status(500).json({ "error": error.message });
    }
}

module.exports = {
    index,
    show
};