const db = require('../database/dbConfig.js');

module.exports = {
    get,
    getBy,
    getById,
    insert,
    update,
    remove,
    getUserTemplates
};

function get() {
    return db('users').select('id', 'username');
}

function getBy(filter) {
    return db('users').where(filter);
}

function getById(id) {
    return db('users')
        .where({ id })
        .first();
}

async function insert(user) {
    const [id] = await db('users').insert(user, 'id');

    return getById(id);
}

function update(id, changes) {
    return db('users')
        .where({ id })
        .update(changes);
}

function remove(id) {
    return db('users')
        .where('id', id)
        .del();
}

function getUserTemplates(userId) {
    return db('templates as t')
        .join('users as u', 'u.id', 't.user_id')
        .select('t.programming_language', 't.noun', 't.verb', 't.ing_verb', 't.ed_verb', 't.noun2')
        .where('t.user_id', userId);
}