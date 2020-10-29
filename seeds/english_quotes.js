
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('english').del()
    .then(function () {
      // Inserts seed entries
      return knex('english').insert([
        {id: 1001, author: 'Jerry Rice', quote:'Today I will do what others won’t, so tomorrow I can do what others can’t'},
        {id: 1002, author: 'Billie Jean King', qoute:'Pressure is a privilege – it only comes to those who earn it.'},
        {id: 1003, author: 'Winnie the Pooh', quote:'You’re braver than you believe, stronger than you seem, and smarter than you think'}
      ]);
    });
};
