import { useState, useEffect } from 'react';


export interface IUser {
	username: string,
	password: string,
}

const remove = (setToken: Function) => {
	localStorage.removeItem('access_token')
	localStorage.removeItem('exp_token')
	setToken(null)
}

const useUser = () => {

	const [token, setToken] = useState<string | null>(null)

	useEffect(() => {
		setToken(localStorage.getItem('access_token'))
		const exp = Number(localStorage.getItem('exp_token'))

		if (!exp) {
			remove(setToken)
			return;
		}
		if (exp < Date.now())
			remove(setToken)
		else
			setTimeout(() => remove(setToken), exp - Date.now())
	}, []);

	return token;
}

export default useUser;
