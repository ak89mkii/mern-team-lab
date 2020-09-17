const router = require('express').Router()
const animeCtrl = require('../controllers/animes')


router.get('/', animeCtrl.index)
router.get('/:animeId', animeCtrl.showAnime)
router.post('/', animeCtrl.createAnime)
router.delete('/:animeId', animeCtrl.deleteAnime)
router.put('/:animeId', animeCtrl.updateAnime)

module.exports = router