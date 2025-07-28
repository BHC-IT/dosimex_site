import type { NextApiRequest, NextApiResponse } from 'next'
import * as urlSlug from 'url-slug'

import dbConnect from '../../../utils/dbConnect'
import Article from '../../../models/Article'
import IArticle from '../../../interfaces/IArticle'
import verifyToken from '../../../middleware/auth'

const methods: {
	[i: string]: (_1: object, _2?: object, _3?: string) => Promise<[number, object]>
} = {
	GET: async (body: object, query?: object, auth?: string): Promise<[number, object]> => {
		try {
			// @ts-ignore - Mongoose typing issues
			const article: IArticle = // @ts-ignore - Mongoose typing issues
				await Article.findOne({ slug: (query as any).slug }).exec()
			if (!article) return [404, { error: 'Article not found' }]
			return [200, { success: true, data: article }]
		} catch (e) {
			return [500, { success: false, message: 'Mongoose error' }]
		}
	},
	PATCH: async (body: object, query?: object, auth?: string): Promise<[number, object]> => {
		const decodedToken = verifyToken(auth)
		if (!decodedToken) {
			return [403, { success: false, message: 'token invalid' }]
			//throw new Error('Token not valid')
		}
		let slug = (query as any).slug
		if ((body as any).title)
			slug = urlSlug.convert((body as any).title, {
				dictionary: { '?': '', '=': '', '/': '', '&': '' },
			})
		try {
			// @ts-ignore - Mongoose typing issues
			const article: IArticle = // @ts-ignore - Mongoose typing issues
				await Article.findOneAndUpdate(
					{ slug: (query as any).slug },
					{ ...body, slug: slug }
				).exec()
			return [201, { success: true, data: article }]
		} catch {
			return [500, { success: false, message: 'Mongoose error' }]
		}
	},
	DELETE: async (body: object, query?: object, auth?: string): Promise<[number, object]> => {
		const decodedToken = verifyToken(auth)
		if (!decodedToken) {
			return [403, { success: false, message: 'token invalid' }]
		}
		try {
			// @ts-ignore - Mongoose typing issues
			await Article.findOneAndDelete({ slug: (query as any).slug }, { ...body }).exec()
			return [201, { success: true }]
		} catch {
			return [500, { success: false, message: 'Mongoose error' }]
		}
	},
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'GET') {
		try {
			await dbConnect()
			const { query } = req

			// @ts-ignore - Mongoose typing issues
			const article: IArticle = // @ts-ignore - Mongoose typing issues
				await Article.findOne({ slug: (query as any).slug }).exec()

			res.status(200).json(article)
		} catch (error) {
			res.status(400).json({ success: false })
		}
	}

	if (req.method === 'PUT') {
		try {
			const token = req.headers.authorization && req.headers.authorization.split(' ')[1]

			if (!token) {
				return res.status(401).json({ error: 'No token, authorization denied' })
			}

			// @ts-ignore - JWT typing issues
			const decodedToken = jwt.verify(token, process.env.JWT_SECRET) as DecodedToken

			const { query, body } = req

			await dbConnect()

			const slug = urlSlug.convert((body as any).title, {
				dictionary: { '?': '', '=': '', '/': '', '&': '' },
			})
			// @ts-ignore - Mongoose typing issues
			const article: IArticle = // @ts-ignore - Mongoose typing issues
				await Article.findOneAndUpdate(
					{ slug: (query as any).slug },
					{ ...body, slug: slug }
				).exec()

			res.status(200).json(article)
		} catch (error) {
			res.status(400).json({ success: false })
		}
	}
}
