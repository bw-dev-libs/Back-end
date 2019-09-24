exports.up = function (knex) {
    return knex.schema
        .createTable('users', function (users) {
            users.increments();
            users
                .string('username', 128)
                .notNullable()
                .unique();
            users.string('password', 128).notNullable();
        })
        .createTable('templates', function (templates) {
            templates.increments();
            templates.string('programming_language', 128).notNullable()
            templates.string('noun', 128).notNullable();
            templates.string('verb', 128).notNullable();
            templates.string('ing_verb', 128).notNullable()
            templates.string('ed_verb', 128).notNullable();
            templates.string('noun2', 128).notNullable();
            templates
                .integer('user_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('users')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
        });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('templates').dropTableIfExists('users');
};
