
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('maori').del()
    .then(function () {
      // Inserts seed entries
      return knex('maori').insert([
        {id: 1, author: 'rowValue1', quote:''},
        {id: 2, author: 'rowValue2', qoute:''},
        {id: 3, author: 'rowValue3', quote:''}
      ]);
    });
};
