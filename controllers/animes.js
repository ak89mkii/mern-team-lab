const Anime = require('../models/anime')

module.exports ={
    index,
    showAnime,
    createAnime,
    deleteAnime,
}

function deleteAnime(req, res){
    Anime.findByIdAndDelete(req.params.animeId)
    .then( anime => 
        res.json(anime)
        )
}

function showAnime(req, res){
    Anime.findById(req.params.animeId)
    .then(anime => 
        res.json(anime))
}

function index(req, res){
    Anime.find({})
    .then(anime => 
        res.json(anime))
}

function createAnime(req, res){
    Anime.create(req.body)
    .then(anime =>
        res.json(anime)
        )
}

