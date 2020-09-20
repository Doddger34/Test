module.exports = {
    CreatePost: async (parent, { data: { content, userId, text } }, { Post }) => {
        try {
            return new Post({
                content,
                userId,
                text
            }).save();
        } catch (e) {
            throw new Error(e);
        }
    }
};
