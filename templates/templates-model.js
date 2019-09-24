const db = require('../database/dbConfig');

module.exports = {
    get,
    getById,
    insert,
    update,
    remove,
};

function get() {
    return db('templates');
}

function getById(id) {
    return db('templates')
        .where({ id })
        .first();
}

function insert(post) {
    return db('templates')
        .insert(post)
        .then(ids => {
            return getById(ids[0]);
        });
}

function update(id, changes) {
    return db('templates')
        .where({ id })
        .update(changes);
}

function remove(id) {
    return db('templates')
        .where('id', id)
        .del();
}
