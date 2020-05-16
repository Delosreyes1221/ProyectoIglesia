'use strict'
const connection = require('../database');  //IMPORTAMOS LA BASE DE DATOS
var validator = require('validator') 

var controller = {
    // FUNCION QUE TRAE TODOS LAS ACTAS DE BAUTIZO 
    select: (req, res) => {
        connection.query('SELECT * FROM matrimonio', (err, rows, fields) => {
            if (!err) {
                res.json(rows);
            }
            else {
                console.log(err);
            }
        })
    },
    // FUNCION QUE TRAE UN ACTA MEDIANTE EL ID
    selectid: (req, res) => {
        const { id_matrimonio } = req.params;
        connection.query('SELECT * FROM matrimonio WHERE id_matrimonio = ?', [id_matrimonio], (err, rows, fields) => {
            if (err) throw err;
            res.json(rows[0]);
        });
    },
    // FUNCION QUE INSRTA UNA NUEVA ACTA
    insert: (req, res) => {
        //recgemos los parametros
        const params = req.body;


        console.log(params);
        const query = `    
            CALL matrimonioInsert(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
        `;
        connection.query(query, [params._diaMatrimonio, params._mesMatrimonio, params._anioMatrimonio, params._nomPrimeraPersona, params._nomSegundaPersona, params._nomSacerdote, params._lugarParroquia, params._nomTestigo1, params._nomTestigo2, params._numLibro, params._numFoja, params._numActa, params._notasMarginales, params._copia, params._fechaExp], (err, rows, fields) => {
            if (err) throw err;
            res.json({ Status: 'Guardado' })
        })
    },

    //FUNCION QUE PERMITE EDITAR UN ACTA 
    edit: (req, res) => {
        //tomamos el id desde equest params
        const {id_matrimonio} = req.params;
        //tomamos los parametros del body 
        const params = req.body;
        const query = `
            CALL matrimonioEdit(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        connection.query(query, [id_matrimonio, params._diaMatrimonio, params._mesMatrimonio, params._anioMatrimonio, params._nomPrimeraPersona, params._nomSegundaPersona, params._nomSacerdote, params._lugarParroquia, params._nomTestigo1, params._nomTestigo2, params._numLibro, params._numFoja, params._numActa, params._notasMarginales, params._copia, params._fechaExp], (err, rows, fields) => {
            if (err) throw err;
            res.json({ Status: 'Guardado' })
        })
    },

    //FUNCION QUE PERMITE ELIMINAR UN ACTA  
    delete: (req, res) =>{
        const {id_matrimonio} = req.params;
        connection.query('DELETE FROM matrimonio WHERE id_matrimonio = ?', [id_matrimonio], (err, rows, fields)=>{
            if(err) throw err;
            res.json({
                Status: 'Eliminada'
            })
        })
    }
}

module.exports = controller;