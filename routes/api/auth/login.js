const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const data = await [
            {name: "Vinayak"}
        ];
        res.status(200).json(data);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;