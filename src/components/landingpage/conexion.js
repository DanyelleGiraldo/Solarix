const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '9617',
  database: 'tienda'
});

connection.connect((err) => {
  if (err) {
    console.error('Error conectando a la base de datos:', err.stack);
    return;
  }
  console.log('Conectado a la base de datos con el id ' + connection.threadId);
});

// Hacer una consulta
connection.query('SELECT * FROM usuarios', (error, results, fields) => {
  if (error) throw error;
  console.log('Los resultados son: ', results);
});

connection.end();
