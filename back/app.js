'use strict';

// ---------- Initialization ----------
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var port = 3000;

// ---------- Express Settings ----------
app.set('json spaces', 2); // to prettify the json result in network tab

// ---------- CORS Settings ----------
var whitelist = ['http://localhost']; // domains allowed to call this API
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
		callback(null, true)
    } else {
		callback(new Error('Not allowed by CORS'))
    }
  }
};
app.use(cors(corsOptions)); // to allow cors requests specified by corsOptions (cf. whitelist)

// ---------- Body Parsing Support ----------
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // to support URL-encoded bodies

// ---------- MySQL Database connection ----------
/*var mysql      = require('mysql');
var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'dbuser',
  password : 's3kreee7'
});

db.connect(function(err){
	if(err) {
		console.error('error connecting: '+ err.stack);
		return;
	}

	console.log('connected as id '+ db.threadId);
});

db.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;
  console.log('The solution is: ', rows[0].solution);
});

*/

// ---------- API Routing ----------
var router = express.Router();

router.route('/')
	.get(function (req, res) {
		res.send('Hello World!')
	});

router.route('/portals')
  .get(function(req, res) {
      console.log('get portals call');

	// Todo: Check data (if id/user exists) then get data from db if all is ok

	    res.json([{id: '1', name:'test1'},{id: '2', name:'test2'}]);
  })
  .post(function(req, res) {
      console.log('post portals call');
      console.log(req.query);
      console.log(req.body);
      console.log(req.body.test);

	// Todo: Check data (mandatory / optional params given and if id/user exists and if format is ok) then insert into db if all is ok

	/*db.query('INSERT INTO () VALUES ()', function(err, rows, fields) {
		if(err) throw err;
	});*/
	    res.json({id: '3', name:'path'});
  })


router.route('/portals/:portal_id')
  .put(function(req, res) {
      console.log('put portals call');

  // Todo: Check data (if id/user exists and if format is ok) then update db if all is ok

      res.send({id: req.params.portal_id, name:'path2'});
  })
  .delete(function(req, res) {
      console.log('delete portals call');

  // Todo: Check data (if id/user exists) then delete the resource in db

      res.send({id: '3', name:'path'});
  });

// ---------- Route registering ----------
app.use('/api', router); // all of our routes will be prefixed with /api

// ---------- 404 handler ----------
app.use(function (req, res, next) {
  //res.status(404).send("Sorry can't find that!");
  res.status(404).sendFile(__dirname+"/static/404.html");
});

// ---------- Error handler ----------
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
});

// ---------- Server start ----------
var server = app.listen(port, function () {
  console.log('\n* Server listening on port : '+port+"\n");
});

// ---------- Server stop ----------
function cleanup () {
  server.close( function () {
    // Close db connections, other chores, etc.
	if(typeof db !== 'undefined'){
		db.end();
	}
    console.log("\n* Closed out remaining connections.");
    console.log("* Server exited.");
    process.exit();
  });

  setTimeout( function () {
   console.error("* Could not close connections in time, forcing shut down.");
   console.log("* Server exited.");
   process.exit(1);
  }, 30*1000);

}

process.on('SIGINT', cleanup); // Catches Ctrl+C event
process.on('SIGTERM', cleanup);
process.on('uncaughtException', cleanup); // Catches uncaught exception
