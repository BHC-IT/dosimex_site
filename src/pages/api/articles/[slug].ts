import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from '../../../../utils/dbConnect';
import Article from '../../../../models/Article';
import IArticle from '../../../../interfaces/IArticle';
import verifyToken from '../../../../middleware/auth';

export default async (req: NextApiRequest, res: NextApiResponse) => {

	await dbConnect();

	const { method } = req;

	if (method === 'GET') {
		console.log(req.url)
		console.log(req.query)
		try {
			const article : IArticle = await Article.findOne({slug: req.query.slug}).exec()
			res.status(200).json({success: true, data: article})
		} catch {
			res.status(400).json({success: false})
		}
	} else if (method === 'PATCH') {
		try {
			const decodedToken = verifyToken(req.headers.authorization.split(' ')[1])
			if (!decodedToken) {
				throw new Error('Token not valid')
			}
			const article: IArticle = await Article.findOneAndUpdate({slug: req.query.slug}, {...req.body}).exec()
			res.status(201).json({success: true, data: article})
		} catch {
			res.status(400).json({success: false})
		}
	} else if (method === 'DELETE') {
		try {
			const decodedToken = verifyToken(req.headers.authorization.split(' ')[1])
			if (!decodedToken) {
				throw new Error('Token not valid')
			}
			await Article.findOneAndDelete({slug: req.query.slug}, {...req.body}).exec()
			res.status(201).json({success: true})
		} catch {
			res.status(400).json({success: false})
		}
	} else {
		res.status(400).json({success: false})
	}
}