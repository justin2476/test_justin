const mongoose = require('mongoose');

const schema = mongoose.Schema;
ObjectId = schema.ObjectId;
const user = new schema({
    _id: ObjectId,
    userName: String,
    userId:String,
    firstName: String,
    lastName: String,  
    mobile: String,
    accountStatus:Boolean,
    role:String,
    login: {
        password: String,
        locked: Boolean,
        updatedDate:Date
    },
    createdDate: Date,
    updatedDate: Date
})
module.exports = mongoose.model("user", user, "user");

//mongoose.model("name of model","name of schema","collection to save")
