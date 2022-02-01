import type { NextApiRequest, NextApiResponse } from 'next';

import dbConnect from '../../../utils/dbConnect';
import User from '../../../models/User';
import IUser from '../../../interfaces/IUser';
import verifyToken from '../../../middleware/auth';


const methods : {[i:string]: (_1: object, _2?: string) => Promise<[number, object]>} = {
	GET: async (query: object, auth?: string) : Promise<[number, object]> => {
		const decodedToken = verifyToken(auth);
		if (!decodedToken) {
			return [403, {success: false, message: 'token invalid'}];
		}
		try {
			const user : IUser = await User.findById((query as any).id).exec()
			if (!user)
				return [404, {error: 'User not found'}];
			return [200, {success: true, data: user}];
			// res.status(200).json({})
		} catch (e) {
			return [400, {success: false, message: 'Mongoose error'}];
			// res.status(400).json({success: false})
		}
	},
}

export default async (req: NextApiRequest, res: NextApiResponse) => {

	await dbConnect();

	const { method } = req;

	if (method) {
		if (!methods[method]) {
			res.status(404).json({success: false});
		}
		const res_from_func = await methods[method](req.query, req?.headers?.authorization?.split(' ')[1]);

		res.status(res_from_func[0]).json(res_from_func[1]);
	}
}