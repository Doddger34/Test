const  Query = require('./queries/query');
const  Not = require('./queries/not');
const  Lesson = require('./queries/lesson');
const  User = require('./queries/user');
const  Class = require('./queries/class');
const  Post = require('./queries/post');
const  Comment = require('./queries/comment');

const Mutation = require('./mutation/index');

module.exports = {
    Query,
    Mutation,
    Not,
    User,
    Lesson,
    Class,
    Post,
    Comment,
}
