const express = require('express');
const fileUpload = require('express-fileupload');

const router = express.Router();
router.use(fileUpload());

router.post('/', (req, res) => {
    if (req.files === null) {
        return res.status(400).json({msg: 'No File Uploaded...'});
    }

    const file = req.files.file;

    file.mv(`${__dirname}/../../../client/public/uploads/${file.name}`, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send(err);
        }

        return res.status(200).json({msg: `File <${file.name}> Uploaded Successfully...`, fileName: file.name});
    });
});

module.exports = router;