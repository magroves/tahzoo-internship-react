const mongoose = require('mongoose');

// Schema
const Schema = mongoose.Schema;
const PremierLeagueSchema = new Schema({
    id: String,
    club: String,
    city: String,
    league_titles: String,
    founded: String,
    image: String,
});

//Model
const Club = mongoose.model('clubs', PremierLeagueSchema);

module.exports = Club;