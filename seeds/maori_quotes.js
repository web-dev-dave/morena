
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('maori').del()
    .then(function () {
      // Inserts seed entries
      return knex('maori').insert([
        {id: 2001, quote:'I tenei ra ka mahi ahau i ta etahi e kore e pai, na apopo ka taea e au te mea kaore e taea e etahi atu'},
        {id: 2002, quote:'He manaakitanga te taumaha - ka tae noa ki te hunga e whiwhi ana.'},
        {id: 2003, quote:'He maia ake koe i to whakapono, kaha atu i a koe, me te mohio atu i to whakaaro'},
        {id: 2004, quote:'Ka taea e au te aukati i tetahi mea, ko te whakamatautau anake'},
        {id: 2005, quote:'Ko Batman ahau'}
      ]);
    });
};
