const express = require('express');

const router = express.Router();

const Club = require('../models/clubs');

//Routes
router.get('/', (req, res) => {
    Club.find({ })
    .then((data) => {
        res.json(data);
    })
    .catch((error) => {
        console.log('error:', error)
    });
})

router.post('/save', (req, res) => {
    console.log('Body: ', req.body);
    const data = req.body;

    const newClub = new Club(data);

    //.save
    newClub.save((error) => {
        if(error) {
            res.status(500).json({msg: 'Sorry, internal server errors'});
            return;
        }
        //Clubs
        return res.json({
              msg: 'We received your data!!!'
          });
    });
});

router.get('/name', (req, res) => {
    const data = {
        username: 'sullivan',
        age: 23
    };
    res.json(data);
});

module.exports = router;