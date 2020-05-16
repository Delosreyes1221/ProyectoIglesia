const express = require('express');
const router = express.Router();
const MatrimonioController = require('../controllers/matrimonio');


//creamos ruta del servidor
router.get('/matrimonio', MatrimonioController.select);
router.get('/matrimonio/:id_matrimonio', MatrimonioController.selectid);
router.post('/matrimonio/insert', MatrimonioController.insert);
router.put('/matrimonio/edit/:id_matrimonio', MatrimonioController.edit);
router.delete('/matrimonio/delete/:id_matrimonio', MatrimonioController.delete);


module.exports = router;