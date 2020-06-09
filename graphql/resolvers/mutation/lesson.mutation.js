module.exports = {
    createLesson: async (parent, {data: { Name } }, { Lesson }) => {
        const lesson = await Lesson.findOne({ Name });
        if (lesson.Name === "") {
          throw new Error('Bu alan boş olamaz!!!');
        }
        if (!lesson) {
          return await new Lesson({
              Name
          }).save()
        }
    }
}
