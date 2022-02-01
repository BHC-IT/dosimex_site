import bcrypt from 'bcrypt';

export const hashPassword = async (password: string, saltRounds: number): Promise<string | null> => {
	if (!password)
		return null;
	try {
		return await bcrypt.hash(password, saltRounds)
	} catch (err){
	}
	return null;
};

export const comparePassword = async (password: string, hash: string): Promise<boolean | null> => {
	if (!password || !hash)
		return null;
	try {
		return await bcrypt.compare(password, hash)
	} catch (err){
	}
	return null;
};