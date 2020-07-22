module.exports = {
    creteClass: async (parent, { data: { ClassName } }, { Class }) => {
        const Classes = await Class.findOne({ ClassName });
        if(Classes) {
            throw new Error("Bu sınıf vardır");
        }
        if(!Classes) {
            return await new Class({
                ClassName
            }).save();
        }
    }
}