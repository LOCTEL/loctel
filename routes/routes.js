var express = require('express');
var router = express.Router();
var controllers = require('.././controllers');

//Generación de Códigos
router.get('/', controllers.inicio.getIndex);
router.get('/DireccionMac', controllers.inicio.obtenerMAC);
router.post('/GuardarCodigo', controllers.inicio.guardarCodigo);
router.post('/RenovarCodigo', controllers.inicio.renovarCodigo);
router.get('/ListarCodigos', controllers.inicio.listarCodigos);


router.get('/ComprobarCodigo/:id?', controllers.inicio.comprobacionRESTAPI);
router.get('/GenerarCodigo/:id?', controllers.inicio.generarCodigoRESTAPI);
router.get('/ExpiracionCodigo/:id?', controllers.inicio.expiracionRESTAPI);
router.get('/RollbackCodigo/:id?', controllers.inicio.rollbackCodigoRESTAPI);

module.exports = router;
