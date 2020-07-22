module.exports = {
    createNot: async (parent, { data: { Name, Link, lessonId, userId, classId } }, { Not }) => {
      return await new Not({
          Name,
          Link,
          lessonId,
          userId,
          classId
      }).save();
    }
}
