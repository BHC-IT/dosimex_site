import * as React from 'react';
import { useText } from '../Hooks/useText';
import * as CSS from 'csstype';
import Image from 'next/image';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false; /* eslint-disable import/first */

const LinkZone = styled.li`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	margin-top: 1vh;
	cursor: pointer;
`;

const LinkLabel = styled.a`
	margin-left: 1.5vw;
	color: var(--dark);
	font-family: var(--lato);
	font-weight: 300;
	font-size: 2.5rem;

	${LinkZone}:hover & {
		cursor: pointer;
		text-decoration: underline var(--main);
	}
`;

const hashes = ["#manuals", "#validations", "#internships"];

interface IStyles {
	[key: string] : CSS.Properties
}

export default function Manuals() {
	const text = useText('Manuals');

	const [dummy, setDummy] = React.useState<number>(0);

	const manualsRef = React.useRef<HTMLDivElement>(null);
	const validationsRef = React.useRef<HTMLDivElement>(null);
	const internshipsRef = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		if (window.location.hash === '#manuals') {
			manualsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start', inline:'center' });
			manualsRef.current?.focus();
		}
		if (window.location.hash === '#validations') {
			validationsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start', inline:'center' });
			validationsRef.current?.focus();
		}
		if (window.location.hash === '#internships') {
			internshipsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start', inline:'center' });
			internshipsRef.current?.focus();
		}
	}, [dummy]);

	const manuals = {
		manuals: [
			{img: "manuel1.png", pdf: "Manuel_1_Radionucléide_3.0.pdf", text: text.manuals[1]},
			{img: "manuel2.png", pdf: "Manuel_2_Géné_X_3.0.pdf", text: text.manuals[2]},
			{img: "manuel3.png", pdf: "Manuel_3_Application_15_160.pdf", text: text.manuals[3]},
			{img: "manuel4.png", pdf: "Annexe_S_ radiologie.pdf", text: text.manuals[4]},
		],
		validations: [
			{img: "Validation1.png", pdf: "Validation_1_Radionucléide_3.0.pdf", text: text.validations[1]},
			{img: "Validation2.png", pdf: "Validation_2_Géné_X_3.0.pdf", text: text.validations[2]},
			{img: "Validation3.png", pdf: "CEA-R-6452.pdf", text: text.validations[3]},
			{img: "Validation4.png", pdf: "NT_101682_42_0001_A-DOSIMEX.pdf", text: text.validations[4]},
			{img: "Validation5.png", pdf: "Article_facteur_transmission_L_Bourgois.pdf", text: text.validations[5]},
		],
		internships: [
			{img: "Rapport1.png", pdf: "Rapport_ULYSSE_reactor_dismantling.pdf", text: text.internships[1]},
			{img: "Rapport2.png", pdf: "Rapport_mémoire_AREVA.pdf", text: text.internships[2]},
			{img: "Rapport3.png", pdf: "Rapport_mémoire_SPR_Cadarache.pdf", text: text.internships[3]},
			{img: "Rapport4.png", pdf: "Rapport_CJ_AREVA_2016.pdf", text: text.internships[4]},
		],
	}

	return (
		<div styles={styles.main}>
			<div style={styles.container} >
				<div style={{marginTop: 0}} >
					<Image src="/Images/motif_rect.svg" width={343*0.9} height={334*0.9} />
				</div>
				<div style={styles.header} >
					<h2 style={{padding: 0, margin: 0, lineHeight: 0.7}} >{text.header.title}</h2>
					<p style={styles.headerText} >{text.header.p}</p>
					<ul>
						{text.header.li.map((e : string, i : number) =>
							<LinkZone key={e} >
								<FontAwesomeIcon icon={faLongArrowAltRight} size={"3x"} style={{color: "var(--flash)"}} />
								<LinkLabel onClick={() => setTimeout(() => setDummy(dummy+1), 100)} href={hashes[i]} >{e}</LinkLabel>
							</LinkZone>
						)}
					</ul>
				</div>
			</div>

			<section ref={manualsRef} style={styles.section}>
				<div style={styles.sectionTitle}>
					<h3>{text.manuals[0]}</h3>
				</div>
				<ul style={{display: "flex", justifyContent: "space-around"}}>
					{manuals.manuals.map((e : any, i: number) =>
						<li style={{cursor: "pointer"}}>
							<a href={`../Folders/${e.pdf}`} target="_blank" rel="noreferrer noopener">
								<div style={{textAlign: "center"}}>
									<Image
										src={`/Images/${e.img}`}
										alt="couverture manuel"
										width={230}
										height={324}
									/>
									<p style={{textTransform: "uppercase"}}>{e.text}</p>
								</div>
							</a>
						</li>
					)}
				</ul>
			</section>

			<section ref={validationsRef} style={styles.section}>
				<div style={styles.sectionTitle}>
					<h3>{text.validations[0]}</h3>
				</div>
				<ul style={{display: "flex", justifyContent: "space-around"}}>
					{manuals.validations.map((e : any, i: number) =>
						<li style={{cursor: "pointer"}}>
							<a href={`../Folders/${e.pdf}`} target="_blank" rel="noreferrer noopener">
								<div style={{textAlign: "center"}}>
									<Image
										src={`/Images/${e.img}`}
										alt="couverture manuel"
										width={230}
										height={324}
									/>
									<p style={{textTransform: "uppercase"}}>{e.text}</p>
								</div>
							</a>
						</li>
					)}
				</ul>
			</section>

			<section ref={internshipsRef} style={styles.section}>
				<div style={styles.sectionTitle}>
					<h3>{text.internships[0]}</h3>
				</div>
				<ul style={{display: "flex", justifyContent: "space-around", paddingBottom: "15vh"}}>
					{manuals.internships.map((e : any, i: number) =>
						<li style={{cursor: "pointer"}}>
							<Link href={`../Folders/${e.pdf}`} target="_blank" rel="noreferrer noopener">
								<div style={{textAlign: "center"}}>
									<Image
										src={`/Images/${e.img}`}
										alt="couverture manuel"
										width={230}
										height={324}
									/>
									<p style={{textTransform: "uppercase"}}>{e.text}</p>
								</div>
							</Link>
						</li>
					)}
				</ul>
			</section>
		</div>
	);
}

export const styles: IStyles = {
	main: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		overflowX: 'hidden',
	},
	container: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		paddingLeft:'3vw',
		paddingTop: '12vh',
		paddingBottom: '12vh',
		width: '100vw',
	},
	header: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		marginLeft: '8vw',
		width: '45vw',
	},
	headerText: {
		color: 'var(--grey)',
		textAlign: 'justify',
		marginTop: '5vh',
	},
	headerLink: {
		marginLeft: '0.5vw',
		color: 'var(--dark)',
	},
	section: {
		paddingBottom: "10vh",
		paddingLeft: "10vw",
		paddingRight: "10vw",
	},
	sectionTitle: {
		borderLeft: "3px solid var(--main)",
		paddingLeft: "2vw",
		marginBottom: "10vh",
	}
}
