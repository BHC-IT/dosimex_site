import jwt from 'jsonwebtoken';
import IDecodedToken from '../interfaces/IDecodedToken'

const verifyToken = (token: string): IDecodedToken | null => {
	try {
		return jwt.verify(token, 'RANDOM_TOKEN_SECRET') as IDecodedToken;
	} catch {
	}
	return null
};

export default verifyToken;