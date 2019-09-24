function validateTemplate(req, res, next) {
    const { id: user_id } = req.params;
    const { programming_language, noun, verb, ing_verb, ed_verb, noun2 } = req.body;
    if (!req.body) {
        return res.status(400).json({ error: "Body is required." });
    }
    if (!programming_language && noun && verb && ing_verb && ed_verb && noun2) {
        return res.status(400).json({ error: "Please fill in all parts of speech." });
    }
    req.body = { programming_language, noun, verb, ing_verb, ed_verb, noun2  };
    next();
};

module.exports = validateTemplate;