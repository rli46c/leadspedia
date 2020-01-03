const express = require('express');
const router = express.Router();
const Users = require('../../../models/Users');

router.post('/', async (req, res) => {
    
    const {firstName, lastName, userEmail, userType, userPass} = req.body;
    try {
        const user = new Users({
            lpFirstName: firstName,
            lpLastName: lastName,
            lpUserEmail: userEmail,
            lpUserType: userType,
            lpUserPass: userPass
       });
       const result = await user.save();
       res.status(200).json(result);
    } catch (err) {
        console.error(err.message);        
        res.status(500).send('Server Error');
    }

});

module.exports = router;