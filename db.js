const knex = require('knex')
const config = require('./knexfile').development
const database = knex(config)

module.exports = {
    getEnglish,
    getTeReo
}

function getEnglish (db = connection) {

}

function getTeReo (db = connection) {
    
}