const Anime = require('../models/anime')

module.exports ={
    createAnime
}

function createAnime(req, res){
    Anime.create(req.body)
    .then(anime =>
        res.json(anime)
        )
}

