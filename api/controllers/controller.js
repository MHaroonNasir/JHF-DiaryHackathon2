const Diary = require('../models/model');

async function index(req, res) {
    try {
        const diary = await Diary.getAll();
        res.status(200).json(diary);
    } catch (err) {
        res.status(500).json({ "error": err.message });
    }
};

async function showById(req, res) {
    try {
        const id = parseInt(req.params.id);
        const diary = await Diary.getOneById(id);
        res.status(200).json(diary);
    } catch (err) {
        res.status(404).json({ "error": err.message });
    }
};

async function showByDateTime(req, res) {
    try {
        const dateTime = parseInt(req.params.id);
        const diary = await Diary.getOneByDateTime(dateTime);
        res.status(200).json(diary);
    } catch (err) {
        res.status(404).json({ "error": err.message });
    }
};

async function create(req, res) {
    try {
        const data = req.body;
        const diary = await Diary.create(data);
        res.status(201).json(diary);
    } catch (err) {
        res.status(400).json({ "error": err.message });
    }
};

async function update(req, res) {
    try {
        const id = req.params.id;
        const data = req.body;
        const diary = await Diary.getOneById(id);
        const result = diary.update(data);
        res.status(200).json(result);
    } catch (err) {
        res.status(404).json({ "error": err.message });
    }
};

async function destroy(req, res) {
    try {
        const id = req.params.id;
        const diary = await Diary.getOneById(id);
        const result = diary.destroy();
        res.status(202).json(result);
    } catch (err) {
        res.status(404).json({ "error": err.message });
    }
};

module.exports = {
    index,
    showById,
    showByDateTime,
    create,
    update,
    destroy
};
