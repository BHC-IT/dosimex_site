import { useState, useEffect } from 'react';

export interface IUser {
	username: string,
	password: string,
}


const useUser = () => {

	const [token, setToken] = useState<string | null>(null)

	useEffect(() => {
		setToken(localStorage.getItem('access_token'))
	}, []);

	return token;
}

export default useUser;
