
const mongoose = require('mongoose');

const schema = mongoose.Schema;
ObjectId = schema.ObjectId;
const work = new schema({
    _id: ObjectId,
    medId: String,
    action: String,
    status: String,
    comment: String,
    userId: String,
    createdDate: Date,
    updatedDate: Date,
    point:[{
        action: String,
        point: Number,
        createdDate:Date
    }]
})
module.exports = mongoose.model("work", work, "work");

