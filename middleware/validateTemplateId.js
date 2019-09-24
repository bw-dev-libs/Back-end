const Template = require('../templates/templates-model');

function validateTemplateId(req, res, next) {
    const { id: template_id } = req.params;
    Template.getById(template_id)
        .then(template => {
            if (template) {
                req.template = template;
                next()
            } else {
                res.status(400).json({ error: "Invalid template id." });
            }
        })
};

module.exports = validateTemplateId;