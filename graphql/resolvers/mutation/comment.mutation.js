module.exports = {
    CreateComment: async (parent, { data: { text, userId, postId } }, { Comment }) => {
        try {
            return new Comment({
                text,
                userId,
                postId   
            }).save();
        } catch (e) {
            throw new Error(e);
        }
    }
};