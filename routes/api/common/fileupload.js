const express = require('express');
const fileUpload = require('express-fileupload');
const uuidv1 = require('uuid/v1');

const router = express.Router();
router.use(fileUpload());

router.post('/', (req, res) => {
    if (req.files === null) {
        return res.status(400).json({msg: 'No File Uploaded...'});
    }

    const file = req.files.file;
    const uniqueFileName = uuidv1();

    file.mv(`${__dirname}/../../../client/public/uploads/${uniqueFileName}`, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send(err);
        }

        return res.status(200).json({ msg: `File <${file.name}> Uploaded Successfully...`, fileName: uniqueFileName });
    });
});

module.exports = router;