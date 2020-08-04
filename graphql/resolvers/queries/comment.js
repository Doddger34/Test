const Comment = {
    User: async (parent, args, { User }) => {
        return await User.findById(parent.userId);
    },   
    Post: async (parent, args, { Post }) => {
        return await Post.findById(parent.classId);
    }   
}
module.exports = Comment;
