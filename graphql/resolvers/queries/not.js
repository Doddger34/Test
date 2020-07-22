const Not = {
    Lesson: async (parent, args, { Lesson }) => {
        return await Lesson.findById(parent.lessonId);
    },
    User: async (parent, args, { User }) => {
        return await User.findById(parent.userId)
    },
    Class: async (parent, args, { Class }) => {
        return await Class.findById(parent.classId)
    }   
}
module.exports = Not;
