const db = require('../config/db');

// busca todos os filmes
const getAllFilms = (callback) => {
    db.query('SELECT * FROM filmes', callback);
}

// busca um filme por id
const getFilmById = (id, callback) => {
    db.query('SELECT * FROM filmes WHERE id = ?', [id], callback);
}

// Cria um novo filme
const createFilm = (film, callback) => {
    const { titulo, diretor, ano, genero, duracao, sinopse } = film;
    db.query('INSERT INTO filmes (titulo, diretor, ano, genero, duracao, sinopse) VALUES (?, ?, ?, ?, ?, ?)', [titulo, diretor, ano, genero, duracao, sinopse], callback);
}

// Atualiza um filme
const updateFilm = (id, film, callback) => {
    const { titulo, diretor, ano, genero, duracao, sinopse } = film;
    db.query('UPDATE filmes SET titulo = ?, diretor = ?, ano = ?, genero = ?, duracao = ?, sinopse = ? WHERE id = ?', [titulo, diretor, ano, genero, duracao, sinopse, id], callback);
}

// Deleta um filme
const deleteFilm = (id, callback) => {
    db.query('DELETE FROM filmes WHERE id = ?', [id], callback);
}

module.exports = {
    getAllFilms,
    getFilmById,
    createFilm,
    updateFilm,
    deleteFilm
};
