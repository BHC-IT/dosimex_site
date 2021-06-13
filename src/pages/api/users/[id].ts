import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../../utils/dbConnect';
import User from '../../../../models/User';
import IUser from '../../../../interfaces/IUser';
import verifyToken from '../../../../middleware/auth';


export default async (req: NextApiRequest, res: NextApiResponse) => {
	await dbConnect();

	const { method } = req;

	if (method === 'GET') {
		try {
			const decodedToken = verifyToken(req.headers.authorization.split(' ')[1])
			if (!decodedToken) {
				throw new Error('Token not valid')
			}
			const user : IUser = await User.findById(req.query.id).exec()
			res.status(200).json({success: true, data: user})
		} catch {
			res.status(400).json({success: false})
		}
	} else {
		res.status(400).json({success: false})
	}
}