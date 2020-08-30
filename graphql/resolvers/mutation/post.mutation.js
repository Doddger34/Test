module.exports = {
    CreatePost: async (parent, { data: { content, img, userId, classId, like } }, { Post }) => {
        try {
            return new Post({
                content,
                img,
                userId,
                classId,
                like
            }).save();
        } catch (e) {
            throw new Error(e);
        }
    }
};