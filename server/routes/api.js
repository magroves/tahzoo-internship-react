const express = require('express');

const router = express.Router();

const Club = require('../models/clubs');
const Message = require('../models/emails');

//Routes
router.get('/clubs', (req, res) => {
    Club.find({ })
    .then((data) => {
        res.json(data);
    })
    .catch((error) => {
        console.log('error:', error)
    });
})

router.post('/clubs', (req, res) => {
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
              msg: 'We received your team data!!!'
          });
    });
});

//messages
router.get('/message', (req, res) => {
    Message.find({ })
    .then((data) => {
        res.json(data);
    })
    .catch((error) => {
        console.log('error:', error)
    });
})

router.post('/message', (req, res) => {
    console.log('Body: ', req.body);
    const data = req.body;

    const newMessage = new Message(data); 

    //.save
    newMessage.save((error) => {
        if(error) {
            res.status(500).json({msg: 'Sorry, internal server errors'});
            return;
        }
        //Message
        return res.json({
              msg: 'We received your message!'
          });
    });
});

// router.get('/name', (req, res) => {
//     const data = {
//         username: 'sullivan',
//         age: 23
//     };
//     res.json(data);
// });

module.exports = router;