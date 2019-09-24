const router = require('express').Router();

const Template = require('./templates-model');
const restricted = require('../auth/restricted-middleware');

// import middleware
const validateTemplateId = require('../middleware/validateTemplateId');
const validateTemplate = require('../middleware/validateTemplate');

// get all templates
router.get('/', restricted, (req, res) => {
    Template.get()
        .then(template => {
            res.status(200).json(template);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: "Error retrieving templates." });
        });
});

router.get('/:id', restricted, validateTemplateId, (req, res) => {
    const { id } = req.template;
    Template.getById(id)
        .then(() => {
            res.status(200).json(req.template);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: "Error retrieving template with that id." });
        });
});

router.delete('/:id', restricted, validateTemplateId, (req, res) => {
    const { id } = req.params;
    Template.remove(id)
        .then(() => {
            res.status(204).end();
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: "Error deleting template." });
        });
});

// router.put('/:id', validateTemplate, validateTemplateId, (req, res) => {
//     const { id } = req.params;
//     const { user_id, noun, verb, adjective, noun2, verb2, adjective2 } = req.body;
//     Template.update(id, { user_id, noun, verb, adjective, noun2, verb2, adjective2 })
//         .then(updated => {
//             if (updated) {
//                 res.status(200).json(req.body);
//             }

//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json({ error: "Error updating template." });
//         });
// });

module.exports = router;