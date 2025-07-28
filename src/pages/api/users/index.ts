import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcrypt'

import dbConnect from '../../../utils/dbConnect'
import User from '../../../models/User'
import IUser from '../../../interfaces/IUser'
import verifyToken from '../../../middleware/auth'
import { hashPassword } from '../../../utils/bcrypt'

const methods: {
	[i: string]: (_1: object, _2?: object, _3?: string) => Promise<[number, object]>
} = {
	GET: async (body: object, query?: object, auth?: string): Promise<[number, object]> => {
		try {
			// @ts-ignore - Mongoose typing issues
			const users: IUser[] = await User.find({}).exec()
			return [200, { success: true, data: users }]
		} catch (e) {
			return [500, { success: false, message: 'Mongoose error' }]
		}
	},
	POST: async (body: object, query?: object, auth?: string): Promise<[number, object]> => {
		const hash = await hashPassword((body as any).password, 10)
		if (!hash)
			return [
				403,
				{ success: false, message: (body as any).password ? 'hash invalid' : 'wrong body' },
			]
		const user = new User({
			username: (body as any).username,
			password: hash,
			email: (body as any).email,
		})
		try {
			await user.save()
			return [201, { success: true, message: 'New user created' }]
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
		try {
			// @ts-ignore - Mongoose typing issues
			const user: IUser = await User.findOneAndUpdate(
				{ _id: decodedToken.userId },
				{ ...body, password: bcrypt.hash((body as any).password, 10) }
			).exec()
			return [201, { success: true, data: user }]
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
			await User.findByIdAndDelete({ _id: decodedToken.userId }).exec()
			return [201, { success: true }]
		} catch {
			return [500, { success: false, message: 'Mongoose error' }]
		}
	},
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
	await dbConnect()

	const { method } = req

	if (method) {
		if (!methods[method]) {
			res.status(404).json({ success: false })
		}
		const res_from_func = await methods[method](
			req.body,
			req.query,
			req?.headers?.authorization?.split(' ')[1]
		)

		res.status(res_from_func[0]).json(res_from_func[1])
	}
}
