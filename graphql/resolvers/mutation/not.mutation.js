module.exports = {
    createNot: async (parent, { data: { Name, Link, lessonId } }, { Not }) => {
        if (Not.Name === " ") {
          throw new Error('asd');
        }
        if (Not.Link === " ") {
          throw new Error('asd');
        }
        if (Not.lessonId === " ") {
          throw new Error('asd');
        }
        return await new Not({
            Name,
            Link,
            lessonId
        }).save();
    }
}
