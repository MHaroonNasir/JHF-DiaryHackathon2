require('dotenv').config();
const fs = require('fs');
const db = require('./connect');

const sql = fs.readFileSync('./api/db/setup.sql').toString();

db.query(sql)
    .then(data => {
        console.log('Database setup complete');
        db.end();
    })
    .catch(error => console.log(error));