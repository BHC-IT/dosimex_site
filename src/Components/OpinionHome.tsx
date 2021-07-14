import * as React from 'react';
import Radium from 'radium';
import * as CSS from 'csstype';

export interface IStyles {
	button: CSS.Properties,
	global: CSS.Properties,
	icon: CSS.Properties,
	peopleInfo: CSS.Properties,
}

interface IProps {
	text: any,
}

const OpinionHome = (props: IProps) => {

	return (
		<div style={styles.global}>
			<div style={styles.peopleInfo}>
				<h5 style={{fontSize: "1.8rem", margin: "0"}}>{props.text.name}</h5>
				<p style={{margin: "0"}}>{props.text.job}</p>
			</div>
			<div style={{margin: "4vh 0"}}>
				<img src="/Images/icon_quote.png" alt="icône citation" />
				<p style={{textAlign: "justify"}}>{props.text.opinion}</p>
			</div>
			<a
				style={styles.button}
				href="https://www.dosimex.fr/static/media/extrait_retour_utilisateurs.73178914.pdf"
				target="_blank">Tous les avis
				<img style={styles.icon} src="/Images/icon_download.png" alt="icône télécharger" />
			</a>
		</div>
	);

}

export default Radium(OpinionHome);

export const styles =  {
	button: {
		padding: "8px 25px",
		border: "2px solid var(--main)",
		borderRadius: "50px",
		color: "var(--main)",
		textTransform: "uppercase",
		transition: "all 0.3s ease 0s",
		':hover': {
			transform: "translateY(-4px)",
			boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.1)",
		},
		display: "flex",
		alignItems: "center",
		justifyContent: "space-around",
		width: "220px",
		marginLeft: "auto",
		marginRight: "auto",
		marginTop: "7vh",
		marginBottom: "2vh",
	},
	global: {
		backgroundColor: "var(--grey-bg)",
		padding: "10vh 10vw",
	},
	icon: {
		width: "1.2vw",
	}
}