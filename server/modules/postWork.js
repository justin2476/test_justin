var WorkPage = require('../model/workPage');

var mongoose = require('mongoose');
var postWork = function (data) {
    var responseData = "work posted";
    if (data) {

        if (data.medId && data.action && data.status) {
            var obj = {};
            obj._id = mongoose.Types.ObjectId();

            obj.medId = data.medId;
            obj.action = data.action;
            obj.status = data.status;
            obj.comment =data.comment;
            obj.userId = 'A3330A'
            obj.createdDate = new Date();
            obj.updatedDate = new Date();

            var workPage = new WorkPage(obj);

            workPage.save((err, result) => {
                console.log("In save")
                if (err)
                    console.log("error in saving " + err)
                else {
                    console.log("Data Saved for user " + result.userName)
                }

            });

        }
        else {
            responseData = "Incorrect Data";
            console.log("Mandatory Fields are not fill");
        }
    }

    return responseData;
}
module.exports = { 'postWork': postWork }
