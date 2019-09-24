
exports.seed = function (knex) {
  return knex('users').insert([
    { username: 'userOne', password: 'password' },
  ]);
};
