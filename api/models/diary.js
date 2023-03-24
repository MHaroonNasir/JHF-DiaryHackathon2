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
}

module.exports = Diary;