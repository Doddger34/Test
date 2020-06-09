const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LessonSchema = new Schema({
    Name: {
        type: String
    },
    CreatedAt: {
        type: Date,
        default: Date.now()
    }
});

const Lesson = mongoose.model('Lesson', LessonSchema);

module.exports = Lesson;