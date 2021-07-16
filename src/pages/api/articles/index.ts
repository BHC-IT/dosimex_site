import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from '../../../utils/dbConnect';
import Article from '../../../models/Article';
import IArticle from '../../../interfaces/IArticle';
import verifyToken from '../../../middleware/auth';
import * as urlSlug from 'url-slug';


export default async (req: NextApiRequest, res: NextApiResponse) => {

	await dbConnect();

	const { method } = req;

	if (method === 'GET') {
		try {
			const articles : IArticle[] = await Article.find({}).exec()
			res.status(200).json({success: true, data: articles})
		} catch {
			res.status(400).json({success: false})
		}
	} else if (method === 'POST') {
		try {
			const decodedToken = verifyToken(req.headers.authorization.split(' ')[1])
			if (!decodedToken) {
				throw new Error('Token not valid')
			}
			const slug = urlSlug.convert(req.body.title, {dictionary: {'?': '', '=': '', '/': '', '&': ''}})
			const article = await Article.create({...req.body, author: decodedToken.userId, slug: slug})
			res.status(201).json({success: true, data: article})
		} catch {
			res.status(400).json({success: false})
		}
	} else {
		res.status(400).json({success: false})
	}
}