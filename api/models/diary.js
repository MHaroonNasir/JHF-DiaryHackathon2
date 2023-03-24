const db = require('../db/connect');

class Diary {

    constructor({ id, title, content, category, date_created_at, time_created_at }) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.category = category;
        this.date_created_at = date_created_at;
        this.time_created_at = time_created_at;
    }

    static async getAll() {
        const response = await db.query('SELECT * FROM diary');
        if (response.rows.length === 0) {
            throw new Error('No diaries found');
        }
        return response.rows.map(diary => new Diary(diary));
    }

    static async getById(id) {
        const response = await db.query('SELECT * FROM diary WHERE id = $1', [id]);
        if (response.rows.length === 0) {
            throw new Error('No diary found');
        }
        return new Diary(response.rows[0]);
    }

    static async create(data) {
        const { title, content, category } = data;
        const response = await db.query('INSERT INTO diary (title, content, category) VALUES ($1, $2, $3) RETURNING *', [title, content, category]);
        if (response.rows.length === 0) {
            throw new Error('No diary created');
        }
        return new Diary(response.rows[0]);
    }

    static async update(id, data) {
        const { title, content, category } = data;
        const response = await db.query('UPDATE diary SET title = $1, content = $2, category = $3 WHERE id = $4 RETURNING *', [title, content, category, id]);
        if (response.rows.length === 0) {
            throw new Error('No diary updated');
        }
        return new Diary(response.rows[0]);
    }

    static async destory(id) {
        const response = await db.query('DELETE FROM diary WHERE id = $1 RETURNING *', [id]);
        if (response.rows.length === 0) {
            throw new Error('No diary deleted');
        }
        return new Diary(response.rows[0]);
    }

    static async getByCategory(category) {
        const response = await db.query('SELECT * FROM diary WHERE category = $1', [category]);
        if (response.rows.length === 0) {
            throw new Error('No diaries found');
        }
        return response.rows.map(diary => new Diary(diary));
    }
}

module.exports = Diary;