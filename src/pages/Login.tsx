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
		console.log(user)
		if(user)
			router.push('/')
	})

	return (
		<div style={{display: 'flex', flexDirection: 'column', width: '100%', height:'100%', justifyContent:'center', alignItems:'center'}} >
			<div style={{display: 'flex', flexDirection: 'column', height:'50%', width: '50%', justifyContent:'space-evenly', alignItems:'center'}} >
				<input type='text' onChange={(e) => setUsername(e.target.value)} />
				<input type='password' onChange={(e) => setPassword(e.target.value)} />

				<div>
					<button onClick={async () => {
						try {
							const res = await axios.post('/api/login', {
								username: username,
								password: password,
							});
							localStorage.setItem('access_token', res.data.token);
						} catch (e) {
						}
					}} >
						<p>Se connecter</p>
					</button>
				</div>

			</div>
		</div>
	);

}