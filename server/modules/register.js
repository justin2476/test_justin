
var User = require('../model/User');
var md5 = require('md5');
var mongoose = require('mongoose');

var register = function (data) {
    var responseData = "Successfully Registered : ";
    if (data) {

        if (data.firstName && data.lastName && data.email && data.mobile && data.password) {
            var obj = {};
            obj._id = mongoose.Types.ObjectId();
            var currentTime = new Date();
            var updateTime = new Date();
            obj.firstName = data.firstName;
            obj.lastName = data.lastName;
            obj.email = data.email;
            obj.password = md5(data.password);
            obj.createdDate = currentTime;
            obj.updatedDate = updateTime;
            obj.userName = data.email.slice(0, data.email.indexOf("@"));
            obj.mobile = data.mobile;
            obj.location = {
                latitude: 4.0,
                longitude: 2.0
            };

            var book = new User(obj);

            book.save((err, result) => {
                console.log("In save")
                if (err)
                    console.log("error in saving " + err)
                else {
                    console.log("Data Saved for user " + result.userName)
                }

            });
     responseData += obj.userName
              
        }
        else {
            responseData = "Incorrect Data";
            console.log("Mandatory Fields are not fill");
        }
    }

    return responseData;
}
module.exports = { 'register': register }
