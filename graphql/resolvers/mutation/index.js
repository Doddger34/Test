const user = require('./user.mutation');
const not = require('./not.mutation');
const lesson = require('./lesson.mutation');
const Mutation = {
    ...user,
    ...not,
    ...lesson
};

module.exports = Mutation;
