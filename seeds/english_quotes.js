
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('english').del()
    .then(function () {
      // Inserts seed entries
      return knex('english').insert([
        {id: 1001, author: 'Maori proverb', quote:'Unlike a canoe rope, a human bond cannot be severed.', foreign_id: 2001},
        {id: 1002, author: 'Maori proverb', quote:'Seek the treasure you value most dearly. If you bow your head, let it be to a lofty mountain.', foreign_id: 2002},
        {id: 1003, author: 'Maori proverb', quote:'A split tōtara tree is easy prey to the axe.', foreign_id: 2003},
        {id: 1004, author: 'Batman', quote:'I am Batman', foreign_id: 2004}
      ]);
    });
};
