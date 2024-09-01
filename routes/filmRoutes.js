const express = require('express');
const router = express.Router();
const filmController = require('../controllers/filmController');

//crud para usuarios
router.get('/films', filmController.getAllFilms);
router.get('/films/:id', filmController.getFilmById);
router.post('/films', filmController.createFilm);
router.put('/films/:id', filmController.updateFilm);
router.delete('/films/:id', filmController.deleteFilm);

module.exports = router;