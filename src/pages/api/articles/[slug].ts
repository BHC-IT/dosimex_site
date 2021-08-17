import type { NextApiRequest, NextApiResponse } from "next";
import * as urlSlug from 'url-slug';

import dbConnect from '../../../utils/dbConnect';
import Article from '../../../models/Article';
import IArticle from '../../../interfaces/IArticle';
import verifyToken from '../../../middleware/auth';


const methods : {[i:string]: (_1: object, _2?: object, _3?: string) => Promise<[number, object]>} = {
	GET: async (body: object, query?: object, auth?: string) : Promise<[number, object]> => {
		try {
			const article : IArticle = await Article.findOne({slug: (query as any).slug}).exec()
			if (!article)
				return [404, {error: 'Article not found'}]
			return [200, {success: true, data: article}];
		} catch (e) {
			return [500, {success: false, message: 'Mongoose error'}];
		}
	},
	PATCH: async (body: object, query?: object, auth?: string) : Promise<[number, object]> => {
		const decodedToken = verifyToken(auth);
		if (!decodedToken) {
			return [403, {success: false, message: 'token invalid'}];
			//throw new Error('Token not valid')
		}
		let slug = (query as any).slug
		if ((body as any).title)
			slug = urlSlug.convert((body as any).title, {dictionary: {'?': '', '=': '', '/': '', '&': ''}})
		try {
			const article: IArticle = await Article.findOneAndUpdate({slug: (query as any).slug}, {...body, slug: slug}).exec()
			return [201, {success: true, data: article}];
		} catch {
			return [500, {success: false, message: 'Mongoose error'}];
		}
	},
	DELETE: async (body: object, query?: object, auth?: string) : Promise<[number, object]> => {
		const decodedToken = verifyToken(auth);
		if (!decodedToken) {
			return [403, {success: false, message: 'token invalid'}];
		}
		try {
			await Article.findOneAndDelete({slug: (query as any).slug}, {...body}).exec()
			return [201, {success: true}];
		} catch {
			return [500, {success: false, message: 'Mongoose error'}];
		}
	}

}

export default async (req: NextApiRequest, res: NextApiResponse) => {

	await dbConnect();

	const { method } = req;

	if (method) {
		if (!methods[method]) {
			res.status(404).json({success: false});
		}
		const res_from_func = await methods[method](req.body, req.query, req?.headers?.authorization?.split(' ')[1]);

		res.status(res_from_func[0]).json(res_from_func[1]);
	}
}