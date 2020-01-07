const express = require('express');
const xlsx = require('xlsx');
const Leads = require('../../../models/Leads');



const router = express.Router();

router.post('/', async (req, res) => {
    const wb = xlsx.readFile(`${__dirname}/../../../client/public/uploads/${req.body.uploadedFileName}`);
    const ws = wb.Sheets[wb.SheetNames[0]];
    const jsonData = xlsx.utils.sheet_to_json(ws);

    jsonData.forEach((rowData) => rowData.fileId = req.body.uploadedFileName);

    await Leads.insertMany(jsonData, (err, docs) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Server Error');
        } else {
            console.log("Multiple documents inserted to Collection");
            return res.status(200).json(docs);
        }
    });
});

module.exports = router;