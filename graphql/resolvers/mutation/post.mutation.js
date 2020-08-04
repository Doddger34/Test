module.exports = {
    CreatePost: async (parent, { data: { content, img, userId, classId } }, { Post }) => {
        try {
            return new Post({
                content,
                img,
                userId,
                classId
            }).save();
        } catch (e) {
            throw new Error(e);
        }
    }
};