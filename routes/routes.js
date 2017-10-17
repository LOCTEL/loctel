var express = require('express');
var router = express.Router();
var controllers = require('.././controllers');

//Generación de Códigos
router.get('/', controllers.inicio.getIndex);
router.get('/DireccionMac', controllers.inicio.obtenerMAC);
router.post('/GuardarCodigo', controllers.inicio.guardarCodigo);
router.post('/RenovarCodigo', controllers.inicio.renovarCodigo);

router.get('/ListarCodigos', controllers.inicio.listarCodigos);
router.get('/Comprobar/:id?', controllers.inicio.comprobacion);
router.get('/ActualizarValidacion/:id?', controllers.inicio.actualizarValidacion);
router.get('/Expiracion/:id?', controllers.inicio.expiracion);

module.exports = router;
