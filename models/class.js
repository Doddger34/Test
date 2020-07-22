const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ClassSchema = new Schema({
    ClassName:{
        type: Number
    },
    Not: {
        type: String
    },
    CreatedAt:{
        type: Date,
        default: Date.now()
    }
});

const Class = mongoose.model("Class", ClassSchema);

module.exports = Class;