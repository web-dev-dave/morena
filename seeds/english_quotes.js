
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('english').del()
    .then(function () {
      // Inserts seed entries
      return knex('english').insert([
        {id: 1, author: 'rowValue1', quote:''},
        {id: 2, author: 'rowValue2', qoute:''},
        {id: 3, author: 'rowValue3', quote:''}
      ]);
    });
};
