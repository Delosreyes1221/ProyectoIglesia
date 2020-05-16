'use strict'
const connection = require('../database');  //IMPORTAMOS LA BASE DE DATOS
var validator = require('validator')
const bautizoPDF = require('../PDF/bautizoPDF')


var controller = {
    // FUNCION QUE TRAE TODOS LAS ACTAS DE BAUTIZO 
    select: (req, res) => {
        connection.query('SELECT * FROM bautizo', (err, rows, fields) => {
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
        const { id_bautizo } = req.params;
        connection.query('SELECT * FROM bautizo WHERE id_bautizo = ?', [id_bautizo], (err, rows, fields) => {
            if (err) throw err;

            res.json(rows);
        });
    },
    // FUNCION QUE INSRTA UNA NUEVA ACTA
    insert: (req, res) => {
        //recgemos los parametros
        const params = req.body;


        console.log(params);
        const query = `    
            CALL bautizoInsert(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
        `;
        connection.query(query, [params._diaBautizo, params._mesBautizo, params._anioBautizo, params._nomSacerdote, params._nomPersona, params._lugarNac, params._fechaNac, params._nomPadre1, params._nomPadre2, params._nomPadrino1, params._nomPadrino2, params._numLibro, params._numFoja, params._numActa, params._notasMarginales, params._copia, params._fechaExp, params._genero], (err, rows, fields) => {
            if (err) throw err;
            res.json({ Status: 'Guardado' })
        })
    },

    //FUNCION QUE PERMITE EDITAR UN ACTA 
    edit: (req, res) => {
        //tomamos el id desde equest params
        const { id_bautizo } = req.params;
        //tomamos los parametros del body 
        var params = req.body;
        params = params[0];
        const query = `
            CALL bautizoEdit(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        connection.query(query, [id_bautizo, params._diaBautizo, params._mesBautizo, params._anioBautizo, params._nomSacerdote, params._nomPersona, params._lugarNac, params._fechaNac, params._nomPadre1, params._nomPadre2, params._nomPadrino1, params._nomPadrino2, params._numLibro, params._numFoja, params._numActa, params._notasMarginales, params._copia, params._fechaExp, params._genero], (err, rows, fields) => {
            if (err) throw err;
            res.json({ Status: 'Modificada' })
        })
    },

    //FUNCION QUE PERMITE ELIMINAR UN ACTA  
    delete: (req, res) => {
        const { id_bautizo } = req.params;
        connection.query('DELETE FROM bautizo WHERE id_bautizo = ?', [id_bautizo], (err, rows, fields) => {
            if (err) throw err;
            res.json({
                Status: 'Eliminada'
            })
        })
    },

    // FUNCION QUE PERMITE IMPRIMIR
    print: (req, res) => {
        const params = req.params;
        console.log(params);

        bautizoPDF();
        res.json({
            Status: 'Creado'
        })

    }
}

module.exports = controller;