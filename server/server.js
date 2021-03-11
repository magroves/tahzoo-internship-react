//Import npm packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require('./routes/api');


const MONGODB_URI = 'mongodb+srv://admin:admin@premierleague.iddbj.mongodb.net/premierleague?retryWrites=true&w=majority'

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!');
});

// Data parsing
app.use(express.json());
app.use(express.urlencoded({extended: false}));

/*Saving data to mongo database
const data = {
    club: 'Manchester City',
    city: 'Manchester',
    league_titles: '4',
    founded: '1894'
};

const newClub = new Club(data); //new instance of the model

//.save();
/*newClub.save((error) => {
    if(error){
        console.log('Oops, something went wrong');
    } else{
        console.log('Data has been saved!');
    }
});*/

//HTTP request logger
app.use(morgan('tiny'));
app.use('/api', routes);

app.listen(PORT, console.log(`Server is starting at ${PORT}`));