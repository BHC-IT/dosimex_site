import * as React from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import useUser from '../Hooks/useUser';

import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
	display: block;
	margin: 0 auto;
	border-color: red;
`;


const Login = () => {

	const [username, setUsername] = React.useState<string | null>(null);
	const [password, setPassword] = React.useState<string | null>(null);
	const [isLoading, setIsLoading] = React.useState<boolean>(false);

	const router = useRouter();
	const user = useUser();

	React.useEffect(() => {
		if(user)
			router.push('/')
	})

	return (
			<div style={{marginTop: "10vh", marginLeft: "auto", marginRight: "auto", display: 'flex', flexDirection: 'column', width: '80vw', alignItems: "center"}} >
				<p>Nom d'utilisateur</p>
				<input style={{height: "3vh", minHeight: "30px", width: "25vw", minWidth: "200px", maxWidth: "500px", borderRadius: "5px", border: "1px solid var(--grey)"}} type='text' onChange={(e) => setUsername(e.target.value)} />
				<p>Mot de passe</p>
				<input style={{height: "3vh", minHeight: "30px", width: "25vw", minWidth: "200px", maxWidth: "500px", borderRadius: "5px", border: "1px solid var(--grey)"}} type='password' onChange={(e) => setPassword(e.target.value)} />
				<div style={{textAlign: "center", padding: "5vh 5vw 20vh 5vw"}}>
					<button style={{padding: "8px 25px", backgroundColor: "var(--main)", borderRadius: "50px", color: "white", textTransform: "uppercase",}}
						onClick={async () => {
						setIsLoading(true)
						try {
							const res = await axios.post('/api/login', {
								username: username,
								password: password,
							});
							localStorage.setItem('access_token', res.data.token)
							localStorage.setItem('exp_token', String(Date.now() + 24 * 60 * 60 * 1000))
							setTimeout(() => {
								localStorage.removeItem('access_token')
								localStorage.removeItem('exp_token')
							}, 24 * 60 * 60 * 1000)
							setIsLoading(false)
							router.push('/')
						} catch (e) {
						}
					}} >
					{ isLoading ?
						<ClipLoader color="#fff" loading={isLoading} css={override} size={30} />
					:
						<>
							Se connecter
						</>
					}
					</button>
				</div>

			</div>
	);

}

export default Login