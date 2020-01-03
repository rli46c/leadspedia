const express = require('express');
const router = express.Router();
const Users = require('../../../models/Users');

router.post('/', async (req, res) => {
    const { userEmail, userPass } = req.body;
    try {
        const user = await Users.findOne({lpUserEmail: userEmail});
       
        if (user) {
            if (user.lpUserPass === userPass) {
                res.status(200).json({'isAuthenticated': true});
            } else {
                res.status(400).send('Not Authenticated');
            }
        } else {
            res.status(400).send('Invalid User');
        }
    } catch (err) {
        res.status(500).send('Server Error');
    }    
});

module.exports = router;