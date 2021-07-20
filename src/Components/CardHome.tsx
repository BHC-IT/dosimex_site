import Link from 'next/link';
import Image from 'next/image';
import Radium from 'radium';
import { useRouter } from 'next/router'
import Tilt from 'react-parallax-tilt';

import * as CSS from 'csstype';

export interface IStyles {
	button: any,
	subtitle: CSS.Properties,
	card: CSS.Properties,
	image: CSS.Properties,
}

interface IProps {
	icon: string,
	title: string,
	content: string,
	route: string,
}

const CardHome = (props: IProps) => {
	const router = useRouter();

	return (
		<Tilt tilteReverse scale={1.05} tiltMaxAngleX={10} tiltMaxAngleY={10} style={{width: '28%'}} >
			<div style={styles.card} onClick={() => router.push(props.route)} >
				<div style={styles.image}>
					<Image
						src={props.icon}
						alt="icône"
						width={158}
						height={158}
					/>
				</div>
				<h4 style={{marginBottom: "0"}}>{props.title}</h4>
				<p style={styles.subtitle}>{props.content}</p>
				<button style={styles.button}>
					<Link href={`/${props.route}`}><span>→</span></Link>
				</button>
			</div>
		</Tilt>
	);

}

export default Radium(CardHome);

export const styles =  {
	button: {
		width: "40px",
		height: "40px",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		fontSize: "3rem",
		padding: "20px",
		marginLeft: "auto",
		marginRight: "auto",
		marginTop: "2vh",
		marginBottom: "4vh",
		backgroundColor: "var(--main)",
		borderRadius: "50%",
		color: "white",
		textTransform: "uppercase" as "uppercase",
		transition: "all 0.3s ease 0s",
		':hover': {
			color: "white",
			transform: "translateY(-2px)",
			boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.1)",
		},
	},
	card: {
		borderRadius: "10px",
		boxShadow: "1px 2px 2px 2px rgba(0, 0, 0, 0.15)",
		textAlign: "center" as "center",
		width: "100%",
		paddingBottom: '2vh',
		height:'45vh',
		cursor: 'pointer',
		paddingTop: '1vh',
	},
	subtitle: {
		color: "var(--grey)",
		fontSize: "1.8rem",
		marginBottom: "4vh",
		marginLeft: "2%",
		marginRight: "2%",
	},
	image: {
		width: "20%",
		height: "20%",
		marginLeft: "auto",
		marginRight: "auto",
	},
}