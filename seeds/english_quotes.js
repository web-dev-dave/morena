
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
        {id: 1005, author: 'Batman', quote:'I am Batman', foreign_id: 2005},
        {id: 1006, author: 'Winston Churchill', quote:'Success is not final, failure is not fatal: it is the courage to continue that counts', foreign_id: 2006},
        {id: 1007, author: 'Alexandre Dumas', quote:'Be good, be young, be true! Evil is nothing but vanity, let us have the pride of good, and above all let us never despair', foreign_id: 2007},
        {id: 1008, author: 'Maya Angelou', quote:'Try to be a rainbow in someone elses cloud', foreign_id: 2008}
      ]);
    });
};
