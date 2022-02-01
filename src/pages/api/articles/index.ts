import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from '../../../utils/dbConnect';
import Article from '../../../models/Article';
import IArticle from '../../../interfaces/IArticle';
import verifyToken from '../../../middleware/auth';
import * as urlSlug from 'url-slug';


const methods : {[i:string]: (_1: object, _2?: string) => Promise<[number, object]>} = {
	GET: async (body: object, auth?: string) : Promise<[number, object]> => {
		try {
			const articles : IArticle[] = await Article.find({}).exec()
			return [200, {success: true, data: articles}];
			// res.status(200).json({})
		} catch (e) {
			return [400, {success: false, message: 'Mongoose error'}];
			// res.status(400).json({success: false})
		}
	},
	POST: async (body: object, auth?: string) : Promise<[number, object]> => {
		try {
			const decodedToken = verifyToken(auth);
			if (!decodedToken) {
				throw new Error('Token not valid')
			}
			const slug = urlSlug.convert((body as any).title, {dictionary: {'?': '', '=': '', '/': '', '&': ''}})
			const article = await Article.create({...body, author: decodedToken.userId, slug: slug})
			return [201, {success: true, data: article}];
			// res.status(201).json({success: true, data: article})
		} catch {
			return [400, {success: false}];
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

		const res_from_func = await methods[method](req.body, req?.headers?.authorization?.split(' ')[1]);

		res.status(res_from_func[0]).json(res_from_func[1]);
	}
/*	if (method === 'GET') {
	} else if (method === 'POST') {
	} else {
		res.status(400).json({success: false})
	}
*/
}