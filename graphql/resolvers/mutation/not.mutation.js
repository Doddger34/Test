module.exports = {
    createNot: async (parent, { data: { Name, Link, lessonId, userId } }, { Not }) => {
      return await new Not({
          Name,
          Link,
          lessonId,
          userId
      }).save();
    }
}
