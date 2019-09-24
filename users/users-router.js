const router = require('express').Router();

const User = require('./users-model.js');
const Template = require('../templates/templates-model')
const restricted = require('../auth/restricted-middleware');

// import middleware
const validateUser = require('../middleware/validateUser');
const validateUserId = require('../middleware/validateUserId');
const validateTemplate = require('../middleware/validateTemplate');

// get all users
router.get('/', (req, res) => {
    User.get()
        .then(users => res.status(200).json(users))
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: "The users could not be retrieved." });
        });
});
// router.get('/',  (req, res) => {
//     // console.log('here');
//     User.get()
//         .then(user => {
//             res.json({ user, loggedInUser: req.user.username });
//         })
//         .catch(err => res.send(err));
// });

// get user by id
router.get('/:id',  validateUserId, (req, res) => {
    // console.log('get user');
    res.status(200).json(req.user);
});

// delete user by id
router.delete('/:id',  validateUserId, (req, res) => {
    const { id } = req.user; // can get id from validateUserId middleware 
    User.remove(id)
        .then(() => {
            res.status(204).end();
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: "Error deleting user." });
        });
});

// update user by id
router.put('/:id',  validateUserId, (req, res) => {
    const { id } = req.params;
    const { username } = req.body;
    User.update(id, { username })
        .then(updated => {
            if (updated) {
                User.getById(id)
                    .then(user => res.status(200).json(user))
                    .catch(err => {
                        console.log('update user', err);
                        res.status(500).json({ error: "Error retrieving user." });
                    });
            }
        })
        .catch(err => {
            console.log('update user', err);
            res.status(500).json({ error: "Error updating user." });
        });
});

// get templates for user specified by id
router.get('/:id/templates',  validateUserId, (req, res) => {
    const { id } = req.params;
    User.getUserTemplates(id)
        .then(templates => {
            res.status(200).json(templates);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: "Error retrieving templates by specified user id." });
        });
});

// create new template for user specified by id
router.post('/:id/templates',  validateUserId, validateTemplate, (req, res) => {
    const template = req.body;
    Template.insert(template)
        .then(template => {
            res.status(201).json(template);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: "Error adding template." });
        });
});

module.exports = router;