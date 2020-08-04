const Post = {
    User: async (parent, args, { User }) => {
        return await User.findById(parent.userId);
    },   
    Class: async (parent, args, { Class }) => {
        return await Class.findById(parent.classId);
    },
    Comment: async (parent, args, { Comment }) => {
        return await Comment.findById(parent.postId);
    }  
}
module.exports = Post;
