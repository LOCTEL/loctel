var mysql = require('mysql');
var config = require('.././database/database.js');

module.exports = {
    getIndex: function (req, res, next) {

        res.render('index', { });
    },

    obtenerMAC: function (req, res, next) {
        require('getmac').getMac(function (err, macAddress) {
            
            console.log(macAddress);
            res.send(macAddress);
        })
    },

    guardarCodigo: function (req, res, next) {
        
    	var fecha = req.body.fecha;
    	var empresa = req.body.empresa;
    	var serie = req.body.serie;
    	var mac = req.body.mac;
    	var codigo = req.body.codigo;
    	var fechaExp = req.body.fechaExp;

    	var db = mysql.createConnection(config);
        db.connect();

        db.query("SELECT GestionAutenticacion(1, '"+fecha+"', '"+empresa+"', '"+serie+"', '"+mac+"', '"+codigo+"', 'ACTIVO', '"+fechaExp+"') AS msm", function (err, rows, fields) {
            if (err) {
                console.log(err);
                res.sendStatus(500);
                db.end();
            } else {
                console.log(rows);
                res.send(rows);
                db.end();
            }
        });

    },

    listarCodigos: function (req, res, next) {
        
    	var db = mysql.createConnection(config);
        db.connect();

        db.query("SELECT * FROM authentication", function (err, rows, fields) {
            if (err) {
                console.log(err);
                res.sendStatus(500);
                db.end();
            } else {
                console.log(rows);
                res.send(rows);
                db.end();
            }
        });


    },

    comprobacion: function (req, res, next) {

    	var db = mysql.createConnection(config);
        db.connect();

		db.query("SELECT GestionAutenticacion( 3,'','','','','"+req.params.id+"','','' ) AS msm", function (err, rows, fields) {
            if (err) {
                console.log(err);
                res.sendStatus(500);
                db.end();
            } else {
                console.log(rows);
                res.send(rows);
                db.end();
            }
        });


    },

    actualizarValidacion: function (req, res, next) {
        
		var db = mysql.createConnection(config);
        db.connect();

		db.query("SELECT GestionAutenticacion( 2,'','','','','"+req.params.id+"','','' ) AS msm", function (err, rows, fields) {
            if (err) {
                console.log(err);
                res.sendStatus(500);
                db.end();
            } else {
                console.log(rows);
                res.send(rows);
                db.end();
            }
        });


    },

    expiracion: function (req, res, next) {

    	var db = mysql.createConnection(config);
        db.connect();

		db.query("SELECT GestionAutenticacion( 4,'','','','','"+req.params.id+"','','' ) AS msm", function (err, rows, fields) {
            if (err) {
                console.log(err);
                res.sendStatus(500);
                db.end();
            } else {
                console.log(rows);
                res.send(rows);
                db.end();
            }
        });


    }


}