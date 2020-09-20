const bcrypt = require("bcrypt");
const token = require("../../../helpers/token/token");

module.exports = {
  createUser: async (
    parent,
    { data: { UserName, password, email } },
    { User }
  ) => {
    const user = await User.findOne({ UserName });
    if (user) {
      throw new Error("Bu kullanıcı vardır.");
    } else {
      const newUser = await new User({
        UserName,
        password,
        email,
      }).save();
      return { token: token.generate(newUser, "1h") };
    }
  },
  signIn: async (parent, { data: { UserName, password } }, { User }) => {
    const user = await User.findOne({ UserName }).select("+password");
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      throw new Error("Geçersiz şifre...");
    }
    return { token: token.generate(user, "1h") };
  },
};
