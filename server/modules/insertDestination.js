var Dest = require('../model/destination');

var mongoose = require('mongoose');
var destination = function (data) {
    var responseData = "Destination Inserted";
    if (data) {

        if (data.name && data.type && data.description) {
            var obj = {};
            obj._id = mongoose.Types.ObjectId();

            obj.name = data.name;
            obj.type = data.type;
            obj.description = data.description;
            obj.imageUrl = ['link1', 'link2', 'link3'];
            obj.mainLocation = 'munnar'
            obj.location = {
                latitude: 4.0,
                longitude: 2.0
            };

            var dest = new Dest(obj);

            dest.save((err, result) => {
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
module.exports = { 'destination': destination }
