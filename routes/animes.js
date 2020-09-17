const router = require('express').Router()
const animeRouter = require('../controllers/animes')

router.post('/', animeRouter.createAnime)

module.exports = router