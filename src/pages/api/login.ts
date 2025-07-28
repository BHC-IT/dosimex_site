import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../utils/dbConnect'
import User from '../../models/User'
import IUser from '../../interfaces/IUser'
import jwt from 'jsonwebtoken'
import { comparePassword } from '../../utils/bcrypt'

//const validIp = ['127.0.0.1'];

const findUser = async (username: string): Promise<[number, object]> => {
	try {
		// @ts-ignore - Mongoose typing issues
		const user: IUser | null = await User.findOne({ username })
		if (!user) return [404, { error: 'User not found' }]
		return [201, { success: true, data: user }]
	} catch {
		return [500, { success: false, message: 'Mongoose error' }]
	}
}

const log = async (
	body: object,
	remoteAddress?: string,
	ipAddress?: string[] | string
): Promise<[number, object]> => {
	const ip = ipAddress?.[0] || remoteAddress
	if (!ip) return [403, { error: 'IP address not provided' }]

	/*	if (!validIp.includes(ip))
		return [403, {error: 'Wrong IP address'}];
*/
	const user = await findUser((body as any).username)
	if (user[0] !== 201) return user

	const valid = await comparePassword((body as any).password, (user[1] as any).data.password)
	if (!valid) return [403, { error: 'Wrong password' }]

	return [
		200,
		{
			token: jwt.sign({ userId: (user[1] as any).data._id }, process.env.SECRET as string, {
				expiresIn: '24h',
			}),
		},
	]
}

const methods: {
	[i: string]: (_1: object, _2?: string, _3?: string[] | string) => Promise<[number, object]>
} = {
	POST: log,
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
			req.connection.remoteAddress,
			req.headers['X-Client-IP']
		)

		res.status(res_from_func[0]).json(res_from_func[1])
	}
}
