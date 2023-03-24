const Diary = require('../models/model')

async function index(req, res) {
    try {
        const diary = await Diary.getAll()
        res.status(200).json(diary)
    }
    catch(err) {
        res.status(500).json({"Error": err.message})
    }
}
async function show(req, res) {
    try {
        const id = parseInt(req.params.id)
        const diary = await Diary.getOneById(id)
        res.status(200).json(diary)

    }
    catch(err) {
        res.status(404).json({"Error": err.message})
    }
}
async function create(req, res) {
    try{
        const data = req.body
        const diary = await Diary.create(data)
        res.json(diary)
    }
    catch(err) {
        res.status(500).json({"Error": err.message})
    } 
}
async function update(req, res) {
    try{
        const id = parseInt(req.params.id)
        const data = req.body
        const diary = await Diary.getOneById(id)
        const result = await Diary.update(data, diary)
        res.json(result).end()
    }
    catch(err) {
        res.status(404).json({"Error": err.message})
    }
}
async function destroy (req, res) {
    try {
        const id = req.params.id;
        const diary = await Diary.getOneById(id);
        const result = await Diary.destroy(diary);
        res.status(204).end();
    } catch (err) {
        res.status(404).json({"error": err.message})
    }
}

module.exports = {index, show, create, update, destroy}
