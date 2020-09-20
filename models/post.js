const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    content: {
        type : String
    },
    comment: {
        type: String
    },
    img : {
        type : String
    },
    CreatedAt: {
        type: Date,
        default: Date.now()
    },
    userId : {
        type: String
    },
    classId: {
        type: String
    },
    UserProfileId: {
      type: String
    },
    text:{
        type: String
    }
});

const Post = mongoose.model('Posts', PostSchema);

module.exports = Post;
