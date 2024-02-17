const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
	Name: { type: String, required: true },
	PhoneNumber: { type: Number, required: true },
	username: { type: String, required: true },
	password: { type: String, required: true },
});

userSchema.methods.generateAuthToken = function () {
	const token = jwt.Sign({ _id: this._id }, process.env.JWTKEY, {
		expiresIn: "3d",
	});
	return token;
};

const Admin = mongoose.model("user", userSchema);

const validate = (data) => {
	const schema = Joi.object({
		Name: Joi.string().required().label("Name"),
		PhoneNumber: Joi.number().required().label("Phone Number"),
		username: Joi.string().required().label("Email").email(),
		password: passwordComplexity().required().label("Password"),
	});
	return schema.validate(data);
};

module.exports = { Admin, validate };
