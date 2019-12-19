var WorkPage = require('../model/workPage');

var mongoose = require('mongoose');
var putWork = function (data) {
    var responseData="done";

    var conditions = { "medId":data.medId}
    , update = { $set: { "comment": "Hey hai updated" }}
    , options = { multi: true };
  
    WorkPage.update(conditions, update, options, callback);
  
  function callback (err, numAffected) {
    // numAffected is the number of updated documents
    console.log("In save")
    if (err)
        console.log("error in saving " + err)
    else {
        console.log("Data Saved for user " +  numAffected)
        responseData=responseData+" "+numAffected;
    }
  }

  return responseData;

}

module.exports = { 'putWork': putWork }
