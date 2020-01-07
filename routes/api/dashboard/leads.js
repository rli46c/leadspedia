const express = require('express');
const Leads = require('../../../models/Leads');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const leadsData = await Leads.find({});
        return res.status(200).json(leadsData);
    } catch (err) {
        console.error(err);
        return res.status(500).send('Server Error');
    }
});

module.exports = router;