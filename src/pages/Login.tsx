import * as React from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import useUser from '../Hooks/useUser';


export default () => {

	const [username, setUsername] = React.useState<string | null>(null);
	const [password, setPassword] = React.useState<string | null>(null);

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
						try {
							const res = await axios.post('/api/login', {
								username: username,
								password: password,
							});
							localStorage.setItem('access_token', res.data.token);
						} catch (e) {
						}
					}} >
						Se connecter
					</button>
				</div>

			</div>
	);

}