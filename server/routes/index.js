const express = require('express')
const router = express.Router()
const controller = require('../controllers/index')

router.get('/:movie', controller.getResultsMovies)
router.get('/movie/:id',controller.getMovie)


module.exports = router