const jwt = require('jsonwebtoken');

const token = {
	generate: ({ UserName }, expiresIn) => {
		return jwt.sign({ UserName }, process.env.SECRET_KEY , { expiresIn });
	}
};

module.exports = token;