var express = require('express');
var router = express.Router();
var controllers = require('.././controllers');

//Generación de Códigos
router.get('/', controllers.inicio.getIndex);
router.get('/DireccionMac', controllers.inicio.obtenerMAC);
router.post('/GuardarCodigo', controllers.inicio.guardarCodigo);

//Listar Códigos
router.get('/codigos', function(req, res, next) {
  res.render('codigos', {});
});

router.get('/ListarCodigos', controllers.inicio.listarCodigos);
router.get('/Comprobar/:id?', controllers.inicio.comprobacion);

module.exports = router;