const mongoose = require('mongoose');
//var schema = mongoose.Schema;
var url = "mongodb://localhost:13017/monitorApp";
mongoose.connect(url , { useNewUrlParser: true }, (err)=>{console.log('mongodbConnected '+err)} );
