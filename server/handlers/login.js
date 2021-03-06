const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET="jsdjfsjfksdfjhsdjfhdsfkjsdhf87879837937987*&&%^$%$^&^&^&^ksjhfkdhfksdhkfjhdskfjhdsk";

const User = require("../models/User.js");
const fs = require('fs');
const path = require('path');

// -- Handlers --
async function getPasswordHash(req,res){
	const username= req.params.username;
	const user=await User.findOne({ username }).lean();
	if (!user) {
		return res.json({ status: 'error', error: 'Invalid username/password' })
	}
	return res.json({status: 'ok', passwordHash: user.password});
}


async function changePassword(req, res){
	const { token, newpassword: plainTextPassword } = req.body

	if (!plainTextPassword || typeof plainTextPassword !== 'string') {
		return res.json({ status: 'error', error: 'Invalid password' })
	}

	if (plainTextPassword.length < 5) {
		return res.json({
			status: 'error',
			error: 'Password too small. Should be at least 6 characters'
		})
	}

	try {
		const user = jwt.verify(token, JWT_SECRET)
		const _id = user.id
		const password = await bcrypt.hash(plainTextPassword, 10)
		console.log(_id);
		await User.updateOne(
			{ _id },
			{
				$set: { password }
			}
		)
		res.json({ status: 'ok' })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: ';))' })
	}
}

async function validateLogin(req, res){
	const { username, passStatus } = req.body
	const user = await User.findOne({ username }).lean()
	console.log(passStatus);
	if (!user) {
		return res.json({ status: 'error', error: 'Invalid username/password' })
	}

	if (passStatus==true) {
		// the username, password combination is successful
		const token = jwt.sign(
			{
				id: user._id,
				username: user.username
			},
			JWT_SECRET,
			{ expiresIn: '2h'} // expires in 2 hours
		)
		return res.json({ status: 'ok', data: token })
	}

	res.json({ status: 'error', error: 'Invalid username/password' })
}

async function register(req, res){

	const {username, passwordHash } = req.body
	const user = await User.findOne({username}).lean();

	if (user){
		return res.json({status: 'error', error: 'Username already exists'})
	  }
	// const password = await bcrypt.hash(plainTextPassword, 10)

	let profilePicture = {
		data: fs.readFileSync(path.join(__dirname + '/uploads/default-profile-picture.png')),
		contentType: 'image/png'
	}

	try{
		await User.create({
			username,
			password: passwordHash,
			gamesPlayed: 0,
			averageWPM: 0,
			averageAccuracy: 0,
			rankScore: 0,
			profilePicture: profilePicture
		})
	}catch(error) {
		console.log("ERROR: " + error);
		return res.json({status: "error"})
	}
	const reguser = await User.findOne({username}).lean();
	const token = jwt.sign(
		{
			id: reguser._id,
			username: reguser.username
		},
		JWT_SECRET,
		{ expiresIn: '2h'} // expires in 2 hours
	)
	return res.json({status:"ok", data:token});
}

async function validateToken(req, res){
	const token = req.params.token;
	try {
		const decode = jwt.verify(token, JWT_SECRET);
		//console.log(decode);
		return res.json({
			login: true,
			decode: decode
		});
	}
	catch(error) {
		return res.json({
			login: false,
			decode: 'error'
		});
	}
}


module.exports = {
    changePassword,
	validateLogin,
	register,
	validateToken,
	getPasswordHash
};