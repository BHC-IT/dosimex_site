import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../utils/dbConnect';
import User from '../../models/User';
import IUser from '../../interfaces/IUser';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

const validIp = ['127.0.0.1'];

export default async (req: NextApiRequest, res: NextApiResponse) => {

	await dbConnect();

	try {
		const ip = req.headers['X-Client-IP']?.[0] || req.connection.remoteAddress as string
		if (!validIp.includes(ip)) {
			throw new Error('Connection not allowed')
		}

		const user: IUser = await User.findOne({ username: req.body.username })
		if (!user) return res.status(401).json({ error: 'Utilisateur non trouvé !' });

		const valid = await bcrypt.compare(req.body.password, user.password)
		if (!valid) return res.status(401).json({ error: 'Mot de passe incorrect !' });
		res.status(200).json({
			token: jwt.sign(
				{ userId: user._id },
				'RANDOM_TOKEN_SECRET',
				{ expiresIn: '24h' }
			)
		});
	} catch (e) {
		if (e instanceof mongoose.Error) {
			res.status(500).json({error: 'Mongoose error'})
		} else {
			res.status(400).json({error: e.message})
		}
	}
}