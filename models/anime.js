const mongoose = require('mongoose')
const Schema = mongoose.Schema

const animeSchema = new Schema({
    name: String,
    genre: String,
    released: Number,
    sumary: String,
    episodesMovies: Number,
    youtube: {type: String, default:"http://youtube.com"},
    image: {type: String, default:"https://picsum.photos/200/300"},
    characters: String,
})

module.exports = mongoose.model('Anime', animeSchema)