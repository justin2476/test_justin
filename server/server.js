var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose');
var login = require('./modules/login')
//var Promise=require('promise')
// var destination = require('./modules/insertDestination');
// var User = require('./model/User');
var connection = require('./config/connection');
// var register = require('./modules/register');
var postWork = require('./modules/postWork');
var getWork = require('./modules/getWork');
var putWork = require('./modules/putWork');
var deleteWork=require('./modules/deleteWork')
var createUser=require('./modules/createUser');

var app = express()
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});
app.get('/getWork', async (req, res) => {
  console.log(req.query)
  var ObjQuerry = req.query;
  console.log(ObjQuerry)
  var result = await getWork.getWork(ObjQuerry);
  res.send(result);
})
app.post('/postWork', async (req, res) => {
  var ObjQuerry = req.body;


  var result = await postWork.postWork(ObjQuerry);
  res.send(result);
})
app.put('/putWork', async (req, res) => {
  var ObjQuerry = req.body;
console.log('Api called '+ObjQuerry)
  var result = await putWork.putWork(ObjQuerry);
  res.send(result);
})
app.post('/createUser', async (req, res) => {
  var ObjQuerry = req.body;


  var result = await createUser.createUser(ObjQuerry);
  res.send(result);
})
app.post('/login', async (req, res) => {
  var ObjQuerry = req.body;
  console.log(ObjQuerry)
  var result = await login.Login(ObjQuerry);
  res.send(result);
})

app.put('/deleteWork', async (req, res) => {
  var ObjQuerry = req.body;
console.log('Api called '+ObjQuerry)
  var result = await deleteWork.deleteWork(ObjQuerry);
  res.send(result);
})

// app.post('/register', function (req, res) {
//   //pass date as string use JSON.stringify(date);
//   /* variable required in req.body are
//   ========================
//   userName : String  (Mandatory)
//   startTime : Date - (Mandatory and Should be date string use JSON.stringify(date))
//   endTime : Date - (Mandatory and Should be date string use JSON.stringify(date))
//   purpose : String - (Not Mandatory)
//   ========================
//   */
//   var data = req.body;
//   var result = register.register(data);
//   res.send(result)
// })




// app.post('/insertDestination', function (req, res) {
//   //pass date as string use JSON.stringify(date);
//   /* variable required in req.body are
//   ========================
//   userName : String  (Mandatory)
//   startTime : Date - (Mandatory and Should be date string use JSON.stringify(date))
//   endTime : Date - (Mandatory and Should be date string use JSON.stringify(date))
//   purpose : String - (Not Mandatory)
//   ========================
//   */
//   var data = req.body;
//   var result = destination.destination(data);
//   res.send(result)
// })

var port = 4000;
app.listen(port, () => {
  console.log("Server created at port : " + port);
})

