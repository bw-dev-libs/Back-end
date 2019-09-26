const bcrypt = require('bcryptjs');

exports.seed = function (knex) {
  return knex('users').insert([
    { username: 'userOne', password: bcrypt.hashSync('password1', 10) },
  ]);
};
