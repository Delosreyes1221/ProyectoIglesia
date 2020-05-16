const express = require('express');
const router = express.Router();
const Bautizocontroller = require('../controllers/bautizo');


//creamos ruta del servidor
router.get('/bautizo', Bautizocontroller.select);
router.get('/bautizo/:id_bautizo', Bautizocontroller.selectid);
router.post('/bautizo/insert', Bautizocontroller.insert);
router.put('/bautizo/edit/:id_bautizo', Bautizocontroller.edit);
router.delete('/bautizo/delete/:id_bautizo', Bautizocontroller.delete);
router.post('/bautizo/createPDF', Bautizocontroller.print);


module.exports = router;