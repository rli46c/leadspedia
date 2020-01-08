const express = require('express');
const xlsx = require('xlsx');
const fileSystem = require('fs');
const Leads = require('../../../models/Leads');

const router = express.Router();

router.post('/', async (req, res) => {
    const {uniqUpldedFileName} = req.body;
    const upldFldr = `${__dirname}/../../../client/public/uploads`;
    const wb = xlsx.readFile(`${upldFldr}/${uniqUpldedFileName}`);
    const ws = wb.Sheets[wb.SheetNames[0]];
    const jsonData = xlsx.utils.sheet_to_json(ws);

    jsonData.forEach((rowData) => rowData.fileId = uniqUpldedFileName);

    await Leads.insertMany(jsonData, (err, docs) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Server Error');
        } else {
            // Create processed folder in uploads if not exists
            if(!fileSystem.existsSync(`${upldFldr}/processed`)) {
                fileSystem.mkdirSync(`${upldFldr}/processed`);
            }
            // Move file after populating Database
            fileSystem.rename(`${upldFldr}/${uniqUpldedFileName}`, `${upldFldr}/processed/${uniqUpldedFileName}`, (err) => {
                if (err) throw err;
                console.log(`${uniqUpldedFileName} processed successfully!!`);
            });

            console.log("Multiple documents inserted to Collection");           
            return res.status(200).json(docs);
        }
    });
});

module.exports = router;