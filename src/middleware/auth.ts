import jwt from 'jsonwebtoken';
import IDecodedToken from '../interfaces/IDecodedToken'

const verifyToken = (token?: string): IDecodedToken | null => {
	if (!token)
		return null;
	try {
		return jwt.verify(token, process.env.SECRET as string) as IDecodedToken;
	} catch (err){
	}
	return null;
};

export default verifyToken;