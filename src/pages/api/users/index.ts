import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';

import dbConnect from '../../../utils/dbConnect';
import User from '../../../models/User';
import IUser from '../../../interfaces/IUser';
import verifyToken from '../../../middleware/auth';


export default async (req: NextApiRequest, res: NextApiResponse) => {
	await dbConnect();

	const { method } = req;

	if (method === 'GET') {
		try {
			const users : IUser[] = await User.find({}).exec()
			res.status(200).json({success: true, data: users})
		} catch {
			res.status(400).json({success: false})
		}
	} else if (method === 'POST') {

		bcrypt.hash(req.body.password, 10)
			.then(hash => {
				const user = new User({
				username: req.body.username,
				password: hash,
				email: req.body.email
			});
			user.save()
			.then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
			.catch(error => res.status(400).json({ error }));
		})
		.catch(error => res.status(500).json({ error }));
	} else if (method === 'PATCH') {
		try {
			const decodedToken = verifyToken(req.headers.authorization.split(' ')[1])
			if (!decodedToken) {
				throw new Error('Token not valid')
			}
			const user: IUser = await User.findOneAndUpdate({_id: decodedToken.userId}, {...req.body, password: bcrypt.hash(req.body.password, 10)}).exec()
			res.status(201).json({success: true, data: user})
		} catch {
			res.status(400).json({success: false})
		}
	} else if (method === 'DELETE') {
		try {
			const decodedToken = verifyToken(req.headers.authorization.split(' ')[1])
			if (!decodedToken) {
				throw new Error('Token not valid')
			}
			await User.findByIdAndDelete({_id: decodedToken.userId}).exec()
			res.status(201).json({success: true})
		} catch {
			res.status(400).json({success: false})
		}
	} else {
		res.status(400).json({success: false})
	}
}
