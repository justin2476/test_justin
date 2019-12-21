


var WorkPage = require('../model/workPage');
var responseData=require('../model/error');
var mongoose = require('mongoose');
var deleteWork = function (data) {
  console.log('in put api '+data)
     //responseData.responseData="Issue";

    // var conditions = { "_id":data.medId}
    // , update = { $set: {"medId":data.newMed,"action":data.action,"status":data.status, "comment": data.comment }}
    // , options = { multi: true };
  
    // WorkPage.updateMany(conditions, update, options, callback);

    WorkPage.deleteOne({"medId":data.medId}, callback);

  
  function callback (err, numAffected) {
    // numAffected is the number of updated documents
    console.log("In save")
    if (err)
        {console.log("error in saving " + err)
        responseData.responseData.status=false;

        responseData.responseData.error.statusCode=300;
        responseData.responseData.error.message="error while saving "+err;
      }
        else {
        console.log("Data Saved for user " + JSON.stringify( numAffected))
        //responseData=numAffected;
        responseData.responseData.status=true;
        responseData.responseData.body.message =numAffected;

    }
    console.log("response " + JSON.stringify( responseData.responseData))
  }
  

  return responseData.responseData;

}

module.exports = { 'deleteWork': deleteWork }
