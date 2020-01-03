const express = require('express');
const router = express.Router();
const Users = require('../../../models/Users');

router.get('/', async (req, res) => {
    try {
        const usersData = await Users.find({});       
        res.status(200).json(usersData);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;