const express = require('express');
const router = express.Router();
const Users = require('../../../models/Users');

router.post('/', async (req, res) => {
    const { userEmail, userPass } = req.body;
    try {
        const user = await Users.findOne({lpUserEmail: userEmail});
       
        if (user) {
            if (user.lpUserPass === userPass) {
                res.json({isAuthenticated: "true"})
            } else {
                res.send('Not Authenticated')
            }
        } else {
            res.send('Invalid User')
        }
    } catch (err) {
        
    }    
});

module.exports = router;