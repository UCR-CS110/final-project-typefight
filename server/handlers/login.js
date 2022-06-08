const bodyParser = require('body-parser');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET="jsdjfsjfksdfjhsdjfhdsfkjsdhf87879837937987*&&%^$%$^&^&^&^ksjhfkdhfksdhkfjhdskfjhdsk";
const fs = require('fs');

const User = require("../models/User.js");
const res = require('express/lib/response');

// -- Handlers --

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
	const { username, password } = req.body
	const user = await User.findOne({ username }).lean()

	if (!user) {
		return res.json({ status: 'error', error: 'Invalid username/password' })
	}

	if (await bcrypt.compare(password, user.password)) {
		// the username, password combination is successful
		const token = jwt.sign(
			{
				id: user._id,
				username: user.username
			},
			JWT_SECRET
		)
		return res.json({ status: 'ok', data: token })
	}

	res.json({ status: 'error', error: 'Invalid username/password' })
}

async function register(req, res){

	const {username, password: plainTextPassword } = req.body
	const user = await User.findOne({username}).lean();

	if(!username || typeof username !== 'string'){
		return res.json({status:"error", error:"Invalid username"})
	}

	if(!plainTextPassword || typeof plainTextPassword !== "string") {
		return res.json({status:"error", error:"Invalid password"})
	}
	if (plainTextPassword.length < 4 ) {
		return res.json({status:"error", error:"Password is too short"})
	}
	if(user){
		return res.json({status: 'error', error: 'Username already exists'})
	}
	const password = await bcrypt.hash(plainTextPassword, 10)
	// TODO: Fix this try block to throw error if username is a duplicate
	try{
		await User.create({
			username,
			password,
			gamesPlayed: 0,
			averageWPM: 0,
			averageAccuracy: 0,
			rankScore: 0
		})
	}catch(error) {
		console.log("ERROR: " + error);
		return res.json({status:"error"})
	}
	const reguser = await User.findOne({username}).lean();
	const token = jwt.sign(
		{
			id: reguser._id,
			username: reguser.username
		},
		JWT_SECRET
	)
	return res.json({status:"ok", data:token});
}

async function validateToken(req, res){
	const token = req.params.token;
	console.log(token);
	try {
		const decode = jwt.verify(token, JWT_SECRET);
		console.log(decode);
		return res.json({
			login: true,
			data: decode
		});
	}
	catch(error) {
		console.log("Error:", error);
		return res.json({
			login: false,
			data: 'error'
		});
	}
}


module.exports = {
    changePassword,
	validateLogin,
	register,
	validateToken
};