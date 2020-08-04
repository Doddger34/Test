const User = {
    Not: async (parent, args, { Not }) => {
        return await Not.find({ userId: parent.id });
    },
    Post: async (parent, args, { Post }) => {
        return await Post.find({ userId: parent.id });
    },
    Comment: async (parent, args, { Comment }) => {
        return await Comment.find({ userId: parent.id });
    },
};
module.exports = User;
