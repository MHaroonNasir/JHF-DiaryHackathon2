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

async function create(req, res) {
    try {
        const diary = await Diary.create(req.body);
        res.status(201).json(diary);
    } catch (error) {
        res.status(500).json({ "error": error.message });
    }
}

async function update(req, res) {
    try {
        const id = parseInt(req.params.id);
        const data = req.body;
        const diary = await Diary.update(id, data);
        res.status(200).json(diary);
    } catch (error) {
        res.status(500).json({ "error": error.message });
    }
}

async function destroy(req, res) {
    try {
        const id = parseInt(req.params.id);
        const diary = await Diary.destory(id);
        res.status(200).json(diary);
    } catch (error) {
        res.status(500).json({ "error": error.message });
    }
}

async function getByCategory(req, res) {
    try {
        const category = req.params.category;
        const diaries = await Diary.getByCategory(category);
        res.status(200).json(diaries);
    } catch (error) {
        res.status(500).json({ "error": error.message });
    }
}


module.exports = {
    index,
    show,
    create,
    update,
    destroy,
    getByCategory
};