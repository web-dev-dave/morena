
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
        {id: 2006, quote: 'Ko te angitu ehara i te whakamutunga, ko te ngoikore kaore i te mate: ko te maia ki te haere tonu ko te mea nui'}
        {id: 2007, quote: 'Kia pai, kia tamariki, kia pono! Ko te kino he horihori kau, kia whai tatou i te whakapehapeha o te pai, a ko te mea nui kaua tatou e ngakaukore.'}
        {id: 2008, quote: 'Ngana ki te waiho i te aniwaniwa i roto i te kapua o tetahi atu'}
      ]);
    });
};
