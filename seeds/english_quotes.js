
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('english').del()
    .then(function () {
      // Inserts seed entries
      return knex('english').insert([
        {id: 1001, author: 'Jerry Rice', quote:'Today I will do what others won’t, so tomorrow I can do what others can’t', foreign_id: 2001},
        {id: 1002, author: 'Billie Jean King', quote:'Pressure is a privilege – it only comes to those who earn it.', foreign_id: 2002},
        {id: 1003, author: 'Winnie the Pooh', quote:'You’re braver than you believe, stronger than you seem, and smarter than you think', foreign_id: 2003},
        {id: 1004, author: 'Oscar Wilde', quote:'I can resist anything except temptation', foreign_id: 2004},
        {id: 1005, author: 'Batman', quote:'I am Batman', foreign_id: 2005}
      ]);
    });
};
