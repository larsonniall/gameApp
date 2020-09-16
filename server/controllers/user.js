import User from "../models/User.js";

export const registerUser = (req, res, next) => {
	const user = new User(req.body);
	user.save((err, result) => {
		if (err) {
			return res.status(400).json({
				error: err
			});
		}
		res.status(200).json({
			message: 'New user registered!'
		});
	});
};

export const findUserById = (req, res, next, id) => {
	User.findById(id).exec((err, user) => {
		if (err || !user) {
			return res.status(400).json({
				error: 'No user found with that credentials!'
			});
		}
		req.profile = user;
		next();
	});
};

export const findUserProfile = (req, res) => {
	req.profile.hashedPassword = undefined;
	req.profile.salt = undefined;
	return res.json(req.profile);
};

export const deleteUser = (req, res, next) => {
	let user = req.profile;
	user.remove((err, deletedUser) => {
		if (err) {
			return res.status(400).json({
				error: 'error'
			});
		}
		deletedUser.hashedPassword = undefined;
		user.salt = undefined;
		res.json(user);
	});
};