const db = require('../db/connect')

class Diary {

    constructor ({id, title, content, category, date_created_at, time_created_at}) {

        this.id = id,
        this.title = title,
        this.content = content,
        this.category = category,
        this.date_created_at = date_created_at,
        this.time_created_at = time_created_at

    }
    static async getAll() {

        const response = await db.query("SELECT * FROM diary;")
        return response.rows.map(d => new Diary(d))
    }
    static async getOneById(id) {

        const response = await db.query("SELECT * FROM diary WHERE id = $1;", [id])
        if (response.rows.length == 0) {
            throw new Error('Did not find');
        }
        return new Diary(response.rows[0])
    }
    static async create(data) {
        const { title, content, category} = data
        const response  = await db.query("INSERT INTO diary (title, content, category) VALUES ($1, $2, $3) RETURNING *;",[title, content, category])
        return response.rows.map(d => new Diary(d))
    }
    static async update(data, diary) {
        const { category } = data
        const update_id = parseInt(diary.id)
        let response = await db.query("UPDATE diary SET category = $1 WHERE id = $2 RETURNING *;",[category, update_id])
        return new Diary(response.rows[0])
    }
    static async destroy(data) {
        const destroy_id = parseInt(data.id)
        let response = await db.query("DELETE FROM diary WHERE id = $1 RETURNING *;", [destroy_id])
        return new Diary(response.rows[0])
    }

}
module.exports = Diary