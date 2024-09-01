const FimgetAllFilmsModel = require('../models/FilmModel');

const getAllFilms = (req, res) => {

    FimgetAllFilmsModel.getAllFilms((err, results) => {
        if(err){
            console.log('erro ao buscar Filmes', err);
            return res.status(500).json('erro ao buscar Filmes');
        }
        res.status(200).json(results);
    });
};


const getFilmById = (req, res) => {
    const id = req.params.id;
    FimgetAllFilmsModel.getFilmById(id, (err, results) => {
        if(err){
            console.error("erro ao buscar Filme", err);
            return res.status(500).json({ error: 'erro ao buscar Filme'});
        }
        if(results.length === 0){
            return res.status(404).json({ error: 'Filme nao encontrado'});
        }
        res.status(200).json(results[0]);
    });
};


const createFilm = (req, res) => {
    const Film = req.body;
    FimgetAllFilmsModel.createFilm(Film, (err, results) => {
        if(err){
            console.log('erro ao criar Filme', err);
            return res.status(500).json({ error: 'erro ao criar Filme'});
        }
        res.status(201).json({ id: results.insertId, ...Film });
    });
};


const updateFilm = (req, res) => {
    const id = req.params.id;
    const Film = req.body;
    FimgetAllFilmsModel.updateFilm(id, Film, (err, results) => {
        if(err){
            console.error('erro ao atualizar Filme', err);
            return res.status(500).json({ error: 'erro ao atualizar Filme'});
        }
        if(results.affectedRows === 0){
            return res.status(404).json({ error: 'Filme nao encontrado'});
        }
        res.status(200).json({ id, ...Film });
    });
};


const deleteFilm = (req, res) => {
    const id = req.params.id
    FimgetAllFilmsModel.deleteFilm(id, (err, results) => {
        if(err){
            console.log('erro ao deletar Filme', err);
            return res.status(500).json({ error: 'erro ao deletar Filme'});
        }
        if(results.affectedRows === 0){
            return res.status(404).json({ error: 'Filme nao encontrado'});
        }
        res.status(204).end();
    });
};

// Exporta todas as funções para serem usadas nas rotas.
module.exports = {
    getAllFilms,
    getFilmById,
    createFilm,
    updateFilm,
    deleteFilm
};
