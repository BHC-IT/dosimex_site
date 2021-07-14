import Button from '../Components/Button';
import CSS from 'csstype';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false; /* eslint-disable import/first */

import { useText } from '../Hooks/useText';

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
		text-decoration: underline var(--main)
	}
`;

const PartHeader = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: flex-end;
	width: 45vw;
	background-color: var(--yellow-bg);
	padding-top: 2vh;
	padding-bottom: 2vh;
	padding-left: 5vw;
	padding-right: 5vw;
`;

const PartHeaderRight = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	width: 50vw;
	background-color: var(--main);
	padding-top: 2vh;
	padding-bottom: 2vh;
	padding-left: 5vw;
	padding-right: 5vw;
`;

const PartImage = styled.div`
	width: 14vw;
	margin-left: 1.5vw;
	background: url(${props => props.imageUrl});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;
`;

const PartImageRight = styled.div`
	width: 14vw;
	margin-right: 1.5vw;
	background: url(${props => props.imageUrl});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;
`;

const PartImageColor = styled.div`
	width: 100%;
	height: 100%;
	background-color: rgba(255, 192, 61, 0.41);
	position: absolute;
	top: 0;
	left: 0;
`;

const PartImageColorRight = styled.div`
	width: 100%;
	height: 100%;
	background-color: rgba(255, 37, 50, 0.47);;
	position: absolute;
	top: 0;
	left: 0;
`;

const CodeSection = styled.li`
	display: flex;
	width: 75%;
	justify-content: space-between;
	align-items: center;
`;

const LiTitle = styled.h5`
	flex-shrink: 0;
	width: 15vw;
`;

const LiLabel = styled.p`
	margin-left: 1vw;
`;

export default function Software() {
	const text = useText('Software');
	return (
		<div style={styles.main} >
			<div>
				<div style={styles.container} >
					<div style={{marginTop: 0}} >
						<Image src="/Images/motif_rect.svg" width={343*0.9} height={334*0.9} />
					</div>
					<div style={styles.header} >
						<h2 style={{padding: 0, margin: 0, lineHeight: 0.7}} >{text.header.title}</h2>
						<p style={styles.headerText} >{text.header.p}</p>
						<ul>
							{text.header.li.map(e =>
								<LinkZone key={e} >
									<FontAwesomeIcon icon={faLongArrowAltRight} size={"3x"} style={{color: "var(--main)"}} />
									<LinkLabel href="#test" >{e}</LinkLabel>
								</LinkZone>
							)}
						</ul>
					</div>
				</div>
			</div>

			<div style={{display:'flex', flexDirection:'column', marginTop: '25vh', width: '100%', alignItems: 'center' }}>
				<div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', width: '100%' }}>
					<PartHeader>
						<div style={{display:'flex', flexDirection: 'column', width: '70%'}} >
							<h3>{text.packOpe.title}</h3>
							<p style={{textAlign:'justify'}} >{text.packOpe.descrip}</p>
						</div>
					</PartHeader>
					<PartImage imageUrl="/Images/packOpe.png">
						<PartImageColor/>
					</PartImage>
				</div>
				{text.packOpe.liTitles.map((e, i) =>
					<CodeSection key={e} style={{marginTop: i === 0 ? '5vh' : 0}} >
						<LiTitle >{e}</LiTitle>
						<LiLabel >{text.packOpe.li[i]}</LiLabel>
					</CodeSection>
				)}
				<div style={{marginTop: '5vh'}} >
					<Button name={text.button.label} route="Videos"/>
				</div>
			</div>
			<div style={{display:'flex', flexDirection:'column', marginTop: '25vh', width: '100%', alignItems: 'center' }}>
				<div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', width: '100%' }}>
					<PartImageRight imageUrl="/Images/packPeda.png">
						<PartImageColorRight/>
					</PartImageRight>
					<PartHeaderRight>
						<div style={{display:'flex', flexDirection: 'column', width: '70%'}} >
							<h3>{text.packPeda.title}</h3>
							<p style={{textAlign:'justify'}} >{text.packPeda.descrip}</p>
						</div>
					</PartHeaderRight>
				</div>
				{text.packPeda.liTitles.map((e, i) =>
					<CodeSection key={e} style={{marginTop: i === 0 ? '5vh' : 0}} >
						<LiTitle >{e}</LiTitle>
						<LiLabel >{text.packPeda.li[i]}</LiLabel>
					</CodeSection>
				)}
				<div style={{marginTop: '5vh'}} >
					<Button name={text.button.label} route="Videos"/>
				</div>
			</div>
			<div style={{display:'flex', flexDirection:'column', marginTop: '25vh', width: '100%', alignItems: 'center' }}>
				<div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', width: '100%' }}>
					<PartHeader>
						<div style={{display:'flex', flexDirection: 'column', width: '70%'}} >
							<h3>{text.packMes.title}</h3>
							<p style={{textAlign:'justify'}} >{text.packMes.descrip}</p>
						</div>
					</PartHeader>
					<PartImage imageUrl="/Images/packMesure.png">
						<PartImageColor/>
					</PartImage>
				</div>
				{text.packMes.liTitles.map((e, i) =>
					<CodeSection key={e} style={{marginTop: i === 0 ? '5vh' : 0}} >
						<LiTitle >{e}</LiTitle>
						<LiLabel >{text.packMes.li[i]}</LiLabel>
					</CodeSection>
				)}
				<div style={{marginTop: '5vh'}} >
					<Button name={text.button.label} route="Videos"/>
				</div>
			</div>
		</div>
	);
}

const styles : {[$:string]: CSS.Properties} = {
	main: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		paddingTop: '12vh',
		overflowX: 'hidden'
	} as CSS.Properties,
	container: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		paddingLeft:'3vw',
		width: '100vw',
	} as CSS.Properties,
	header: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		marginLeft: '8vw',
		width: '45vw',
	} as CSS.Properties,
	headerText: {
		color: 'var(--grey)',
		textAlign: 'justify',
		marginTop: '5vh',
	} as CSS.Properties,
	headerLink: {
		marginLeft: '0.5vw',
		color: 'var(--dark)',
	} as CSS.Properties,
}