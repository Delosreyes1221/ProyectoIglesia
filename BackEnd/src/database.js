'use strict'

const mysql = require('mysql')
//REQUERIMOS APP PARA EJECUTAR EL SERVIDOR

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'project'
})

connection.connect((err) => {
  if (err) throw err
  console.log('Connected!!')

})

module.exports = connection;