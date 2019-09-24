function validateUser(req, res, next) {
    const { username } = req.body;
    req.body = { username, password }
    if (!req.body) {
        res.status(400).json({ error: "Missing user data." });
    } else if (!username) {
        res.status(400).json({ error: "Missing required username field." });
    } else if (!password) {
        res.status(400).json({ error: "Missing required password field." });
    } else {
        next();
    }
};

module.exports = validateUser;