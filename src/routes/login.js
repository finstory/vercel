const { Router } = require('express');
const router = Router();

router.get("/login", async function (req, res) {
    try {
        const { username } = req.query;
        res.status(200).json({ msg: "33you logged in successfully." });

    } catch (error) {
        res.status(404).json(error.message);

    }
})


module.exports = router;
