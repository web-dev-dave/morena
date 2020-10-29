// bulding table template for te reo quote
exports.up = function(knex) {
    return knex.schema.createTable('maori', function(table)
    {
        table.increments('id').references('foreign_id')
        //table.string('author')
        table.string('quote')
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('maori')
};
