const mysql = require('mysql2');

/*
CREATE TABLE filmes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    diretor VARCHAR(255),
    ano INT,
    genero VARCHAR(100),
    duracao INT,  -- Duração em minutos
    sinopse TEXT
);
*/
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'password',
    database: 'database'
});

connection.connect((err) => {
    if(err){
        console.log("erro ao conectar ao banco de dados", err);
        return;
    }
    console.log("conectado ao banco de dados MYSQL");
});

module.exports = connection;