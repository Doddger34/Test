const Class = {
    Not: async (parent, args, { Not }) => {
        return await Not.find({ classId: parent.id });
    },
    Post: async (parent, args, { Post }) => {
        return await Post.find({ classId: parent.id });
    }
};
module.exports = Class;
