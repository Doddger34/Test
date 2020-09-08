const Post = {
    User: async (parent, args, { User }) => {
        return await User.findById(parent.userId);
    }
}
module.exports = Post;
