
exports.seed = function (knex) {
  return knex('templates').insert([
    { id: 1, user_id: 1, noun: 'pup', verb: 'barks', adjective: 'adorable', noun2: 'cat', verb2: 'meows', adjective2: 'fluffy' },

  ]);
};
