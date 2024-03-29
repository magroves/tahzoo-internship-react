const express = require('express');

const router = express.Router();

const Club = require('../models/clubs');
const Message = require('../models/emails');

//Routes

//Read 
router.get('/clubs', (req, res) => {
    Club.find({ })
    .then((data) => {
        res.json(data);
    })
    .catch((error) => {
        console.log('error:', error)
    });
})

//Create
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
              msg: 'We received your data!!!'
          });
    });
});

//Update
router.put('/clubs/:id', (req, res) => {
    Club.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if(error) {
            console.log(error)
            return next(error); 
        } else {
            res.json(data)
            console.log('Club updated successfully!')
        }
    })
})

//Delete
router.delete('/clubs/:id', (req, res) => {
    Club.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
          } else {
            res.status(200).json({
              msg: data
            })
            console.log('Club successfully deleted')
          }
    })
})

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

//Delete
router.delete('/message/:id', (req, res) => {
    Message.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
          } else {
            res.status(200).json({
              msg: data
            })
            console.log('Message successfully deleted')
          }
    })
})

module.exports = router;