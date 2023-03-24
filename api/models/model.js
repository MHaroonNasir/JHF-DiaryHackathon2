const db = require('../db/connect');

class Diary{
    constructor({id, title, content, category, date_created_at, time_created_at}) {
        this.id = id,
        this.title = title,
        this.content = content,
        this.category = category,
        this.date_created_at = date_created_at,
        this.time_created_at = time_created_at
    }

    static async getAll() {
        const response = await db.query("SELECT * FROM diary;");
        return response.rows.map(d => new Diary(d));
    };

    static async getOneById(id) {
        const response = await db.query("SELECT * FROM diary WHERE id = $1;", [id]);
        return new Diary(response.rows[0]);
    };

    static async getOneByDateTime() {
        const response = await db.query("SELECT * FROM diary WHERE id = $1;", [id]);
        return new Diary(response.rows[0]);
    };

    static async create(data) {
        const { title, content, category, date_created_at, time_created_at } = data;
        const response = await db.query("INSERT INTO diary (title, content, category, date_created_at, time_created_at) VALUES ($1, $2, $3, $4, $5) RETURNING *;", [title, content, category, date_created_at, time_created_at]);
        return response.rows.map(d => new Diary(d));
    };

    async update(data) {
        const response = await db.query("UPDATE diary SET title = $1, content = $2, category = $3, date_created_at = $4, time_created_at = $5 WHERE id = $6 RETURNING *;", 
        [data.title, data.content, data.category, data.date_created_at, data.time_created_at, this.id]);
        return new Diary(response.rows[0]);
    };

    async destroy() {
        const response = await db.query("DELETE FROM diary WHERE id = $1 RETURNING *;", [this.id]);
        return new Diary(response.rows[0]);
    };
};

module.exports = Diary;
