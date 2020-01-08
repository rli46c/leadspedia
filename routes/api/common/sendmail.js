const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/', async (req, res) => {
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'mernleadspedia@gmail.com',
            pass: 'Roy@lLogics46c'
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    let sentMailResponse = await transporter.sendMail({
        from: 'Vinayak Sharma <mernleadspedia@gmail.com>',
        to: req.body.sendTo,
        subject: req.body.mailSubject,
        text: req.body.mailText,
        html: req.body.mailHtml
    });

    return res.status(200).json(sentMailResponse);
});

module.exports = router;