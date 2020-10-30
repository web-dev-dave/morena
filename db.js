const knex = require('knex')
const config = require('./knexfile').development
const database = knex(config)

module.exports = {
    getEnglishById,
    getTeReo
}

function getEnglishById (id, db = database) {

    // Return database
    return db('english')

    // Join maori table, and maori id to english FOREIGN id
    .join('maori','maori.id', 'english.foreign_id')

    // It needs to know where to take the table data from
    .where('english.id', id)

    // Select properties and assign alias
    .select('english.id as englishId', 'maori.id as maoriId')

    // Enter array with index then dot notation to access object
    .then(result => ({
        id: result[0].englishId,
        author: result[0].author
    }))
}

function getTeReo (db = database) {

}