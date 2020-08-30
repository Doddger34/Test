const user = require('./user.mutation');
const not = require('./not.mutation');
const lesson = require('./lesson.mutation');
const Class = require('./class.mutation');
const Post = require('./post.mutation');
const Comment = require('./comment.mutation');  

const Mutation = {
    ...user,
    ...not,
    ...lesson,
    ...Class,
    ...Post,
    ...Comment,
};

module.exports = Mutation;
