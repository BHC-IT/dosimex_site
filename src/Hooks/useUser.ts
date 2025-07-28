import { useState, useEffect } from 'react'

export interface IUser {
	username: string
	password: string
}

const remove = (setToken: Function) => {
	localStorage.removeItem('access_token')
	localStorage.removeItem('exp_token')
	setToken(null)
}

const useUser = () => {
	// @ts-ignore - React hooks compatibility with React 18
	const [token, setToken] = useState<string | null>(null)

	// @ts-ignore - React hooks compatibility with React 18
	useEffect(() => {
		setToken(localStorage.getItem('access_token'))
		const exp = Number(localStorage.getItem('exp_token'))

		if (!exp) {
			remove(setToken)
			return
		}
		if (exp < Date.now()) remove(setToken)
		else setTimeout(() => remove(setToken), exp - Date.now())
	}, [])

	return token
}

export default useUser
