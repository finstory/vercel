const { Router } = require('express');
const router = Router();
const { User } = require("../db");
router.get("/login", async function (req, res) {
    try {
        const { username } = req.query;
        const usersDB = await User.findAll();
        res.status(200).json(usersDB);

    } catch (error) {
        res.status(404).json(error.message);

    }
})


module.exports = router;
