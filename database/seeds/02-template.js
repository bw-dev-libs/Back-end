
exports.seed = function (knex) {
  return knex('templates').insert([
    { id: 1, user_id: 1, programming_language: 'javascript', noun: 'screen', verb: 'debug', ing_verb: 'running', ed_verb: 'typed', noun2: 'team' },

  ]);
};
