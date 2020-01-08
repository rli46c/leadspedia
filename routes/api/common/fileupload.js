const express = require('express');
const fileUpload = require('express-fileupload');
const fileSystem = require('fs');
// const uuidv1 = require('uuid/v1');
const shortid = require('shortid');

const router = express.Router();
router.use(fileUpload());

router.post('/', (req, res) => {
    if (req.files === null) {
        return res.status(400).json({msg: 'No File Uploaded...'});
    }

    const file = req.files.file;
    // const uploadedFileName = file.name;
    // const uniqueFolderName = uuidv1();
    const uniqUpldedFileName = shortid.generate();
    const publicFolder = `${__dirname}/../../../client/public`;

    // Create uploads folder in public if not exists
    if(!fileSystem.existsSync(`${publicFolder}/uploads`)) {
        fileSystem.mkdirSync(`${publicFolder}/uploads`);
    }

    file.mv(`${publicFolder}/uploads/${uniqUpldedFileName}`, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send(err);
        }

        return res.status(200).json({ msg: `File <${file.name}> Uploaded Successfully...`, uniqUpldedFileName });
    });
});

module.exports = router;