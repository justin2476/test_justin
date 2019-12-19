var User = require('../model/user');

var mongoose = require('mongoose');
var createUser = function (data) {
    var responseData = "work posted";
    if (data) {
console.log(data)
        if (data.userId && data.firstName && data.lastName) {
            var obj = {};
            obj.login={};

            obj._id = mongoose.Types.ObjectId();

            obj.userId = data.userId;
            obj.firstName = data.firstName;
            obj.lastName = data.lastName;
            obj.mobile=data.mobile;
            obj.login.password=data.password;
            obj.login.locked=false;
            obj.login.updatedDate=new Date();
            //obj.comment ="comment in msg";
            //obj.userId = 'A3330A'
            obj.createdDate = new Date();
            obj.updatedDate = new Date();

            var user = new User(obj);

            user.save((err, result) => {
                console.log("In save")
                if (err)
                    console.log("error in saving " + err)
                else {
                    console.log("Data Saved for user " + result.userId)
                }

            });

        }
        else {
            responseData = "Incorrect Data";
            console.log("Mandatory Fields are not fill");
        }
    }
console.log(responseData)
    return responseData;
}
module.exports = { 'createUser': createUser }
