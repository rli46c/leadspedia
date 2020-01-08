const express = require('express');
const mongoose = require('mongoose');

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

router.delete('/:id', async (req, res) => {
    try {
        // const deleteResponse = await Leads.findByIdAndDelete(req.params.id); //Working Fine
        await Leads.findOneAndDelete({_id: mongoose.Types.ObjectId(req.params.id)});
        // await Leads.findOneAndDelete({_id: req.params.id}); //Working Fine
        return res.status(200).json({id: req.params.id});
    } catch (err) {
        return res.status(500).send('Server Error');
    }
});

module.exports = router;