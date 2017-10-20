var mysql = require('mysql');
var Pool = require('pg-pool');
var pool = new Pool();
var connectionString = 'postgres://rzqfnxpfpkfkgo:97bfa922dbe9e80009d581c40dccfb37f4f87338a3d4a4aca77c7ddad4fb1fa9@ec2-54-163-245-14.compute-1.amazonaws.com:5432/dabk6t03tskshq';

var pool2 = new Pool({
    connectionString: connectionString,
    ssl: true,
});

module.exports = {

    getIndex: function (req, res, next) {

        res.render('index', { });
    },

    obtenerMAC: function (req, res, next) {
        require('getmac').getMac(function (err, macAddress) {
            
            res.send(macAddress);
        })
    },

    guardarCodigo: function (req, res_, next) {
        
    	var fecha = req.body.fecha;
    	var empresa = req.body.empresa;
    	var serie = req.body.serie;
    	var mac = req.body.mac;
    	var codigo = req.body.codigo;
    	var fechaExp = req.body.fechaExp;

    	 pool2.connect().then(client => {
          client.query("SELECT \"GestionAutenticacion\"(1, '"+fecha+"', '"+empresa+"', '"+serie+"', '"+mac+"', '"+codigo+"', 'ACTIVO', '"+fechaExp+"') AS msm").then(res => {
            client.release();           
            res_.send(res.rows);
          })
          .catch(e => {
            console.log('this line never runs');
            res_.send(e.message);
          })
        })

    },

    renovarCodigo: function (req, res_, next) {

    	var codigoR = req.body.codigoR;
    	var fechaExpR = req.body.fechaExpR;

        pool2.connect().then(client => {
          client.query("SELECT \"GestionAutenticacion\"( 5,'','','','','"+codigoR+"','','"+fechaExpR+"' ) AS msm").then(res => {
            client.release();           
            res_.send(res.rows);
          })
          .catch(e => {
            console.log('this line never runs');
            res_.send(e.message);
          })
        })


    },

    listarCodigos: function (req, res_, next) {
        
        pool2.connect().then(client => {
          client.query("SELECT * FROM authentication").then(res => {
            client.release();           
            res_.send(res.rows);

          })
          .catch(e => {
            console.log('this line never runs');
            res_.send(e.message);
          })
        })


    },

    comprobacionRESTAPI: function (req, res_, next) {


       pool2.connect().then(client => {
          client.query("SELECT \"GestionAutenticacion\"( 3,'','','','','"+req.params.id+"','','' ) AS msm").then(res => {
            client.release();           
            res_.send(res.rows);
          })
          .catch(e => {
            console.log('this line never runs');
            res_.send(e.message);
          })
        })



    },

    generarCodigoRESTAPI: function (req, res_, next) {
        
		
        pool2.connect().then(client => {
          client.query("SELECT \"GestionAutenticacion\"( 2,'','','','','"+req.params.id+"','','' ) AS msm").then(res => {
            client.release();           
            res_.send(res.rows);
          })
          .catch(e => {
            console.log('this line never runs');
            res_.send(e.message);
          })
        })

    },


    expiracionRESTAPI: function (req, res_, next) {

    	
        pool2.connect().then(client => {
          client.query("SELECT \"GestionAutenticacion\"( 4,'','','','','"+req.params.id+"','','' ) AS msm").then(res => {
            client.release();           
            res_.send(res.rows);
          })
          .catch(e => {
            console.log('this line never runs');
            res_.send(e.message);
          })
        })

    }


}