

// bulding table template for english quote
exports.up = function(knex) {
    return knex.schema.createTable('english', function(table)
    {
        table.increments('id').primary()
        table.string('author')
        table.string('quote')
        table.integer('foreign_id')
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('english')
};


