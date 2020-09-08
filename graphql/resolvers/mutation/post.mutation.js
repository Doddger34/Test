module.exports = {
    CreatePost: async (parent, { data: { content, userId } }, { Post }) => {
        try {
            return new Post({
                content,
                userId
            }).save();
        } catch (e) {
            throw new Error(e);
        }
    }
};
