import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Radium from 'radium';
import * as CSS from 'csstype';

export interface IStyles {
	button: CSS.Properties,
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

	return (
		<div style={styles.card}>
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
				<Link href={`/${props.route}`} replace><span>→</span></Link>
			</button>
		</div>
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
		textTransform: "uppercase",
		transition: "all 0.3s ease 0s",
		':hover': {
			color: "white",
			transform: "translateY(-2px)",
			boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.1)",
		},
	},
	card: {
		borderRadius: "10px",
		boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.1)",
		textAlign: "center",
		width: "28%",
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