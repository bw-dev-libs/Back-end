function validateTemplate(req, res, next) {
    const { id: user_id } = req.params;
    const { noun, verb, adjective, noun2, verb2, adjective2 } = req.body;
    if (!req.body) {
        return res.status(400).json({ error: "Body is required." });
    }
    if (!noun && verb && adjective && noun2 && verb2 && adjective2) {
        return res.status(400).json({ error: "Please fill in all parts of speech." });
    }
    req.body = { user_id, noun, verb, adjective, noun2, verb2, adjective2 };
    next();
};

module.exports = validateTemplate;