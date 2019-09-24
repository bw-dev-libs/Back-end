exports.up = function (knex) {
    return knex.schema.createTable('templates', tbl => {
        tbl.increments();
        tbl.string('noun', 128).notNullable()
        tbl.string('verb', 128).notNullable();
        tbl.string('adjective', 128).notNullable();
        tbl.string('noun2', 128).notNullable()
        tbl.string('verb2', 128).notNullable();
        tbl.string('adjective2', 128).notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('templates');
};
