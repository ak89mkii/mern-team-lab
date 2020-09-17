const Anime = require('../models/anime')

module.exports ={
    index,
    showAnime,
    createAnime,
    deleteAnime,
    updateAnime
}

function updateAnime(req, res){
    Anime.findByIdAndUpdate(req.params.animeId, req.body, {new: true})
    .then(anime =>
        res.json(anime) )
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
    console.log(req.user)
    req.body.character =
    Anime.create(req.body)
    .then(anime =>
        res.json(anime)
        )
}

