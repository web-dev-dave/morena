
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('maori').del()
    .then(function () {
      // Inserts seed entries
      return knex('maori').insert([
        {id: 2001, quote:'He hono tangata e kore e motu; ka pa he taura waka e motu'},
        {id: 2002, quote:'Whāia e koe ki te iti kahurangi, ki te tūohu koe, me maunga teitei'},
        {id: 2003, quote:'He tōtara wāhi rua he kai na te toki'},
        {id: 2004, quote:'Ko Batman ahau'}
      ]);
    });
};
