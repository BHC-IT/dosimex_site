import * as React from 'react';
import Button from '../Components/Button';
import CSS from 'csstype';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false; /* eslint-disable import/first */

import { useText } from '../Hooks/useText';
import { useIsMobile } from '../Hooks/useIsMobile';

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
		color: var(--main);
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
	background: url(${(props : {imageUrl: string}) => props.imageUrl});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;
`;

const PartImageRight = styled.div`
	width: 14vw;
	margin-right: 1.5vw;
	background: url(${(props : {imageUrl: string}) => props.imageUrl});
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

const hashes = ["#op", "#pedago", "#mesure"]

const Software = () => {
	const text = useText('Software');
	const style = useIsMobile(styles);
	const [dummy, setDummy] = React.useState<number>(0);
	const opRef = React.useRef<HTMLDivElement>(null);
	const pedaRef = React.useRef<HTMLDivElement>(null);
	const mesureRef = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		if (window.location.hash === '#op') {
			opRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start', inline:'center' });
			opRef.current?.focus();
		}
		if (window.location.hash === '#pedago') {
			pedaRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start', inline:'center' });
			pedaRef.current?.focus();
		}
		if (window.location.hash === '#mesure') {
			mesureRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start', inline:'center' });
			mesureRef.current?.focus();
		}
	}, [dummy]);

	if (style === null)
		return null

	return (
		<div style={style.main} >
			<div>
				<div style={style.container} >
					<div style={style.divImage} >
						<Image src="/Images/motif_rect.svg" width={343*0.9} height={334*0.9} />
					</div>
					<div style={style.header} >
						<h2 style={{padding: 0, margin: 0, lineHeight: 0.7}} >{text.header.title}</h2>
						<p style={style.headerText} >{text.header.p}</p>
						<ul>
							{text.header.li.map((e : string, i : number) =>
								<LinkZone key={e} >
									<p style={style.arrow}>→</p>
									<LinkLabel onClick={() => setTimeout(() => setDummy(dummy+1), 100)} href={hashes[i]} style={style.headerLink}>{e}</LinkLabel>
								</LinkZone>
							)}
						</ul>
					</div>
				</div>
			</div>

			<div style={{display:'flex', flexDirection:'column', marginTop: '25vh', width: '100%', alignItems: 'center' }}>
				<div ref={opRef} style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', width: '100%' }}>
					<PartHeader>
						<div style={style.partHeader} >
							<h3>{text.packOpe.title}</h3>
							<p style={style.textPartHeader} >{text.packOpe.descrip}</p>
						</div>
					</PartHeader>
					<PartImage imageUrl="/Images/packOpe.png">
						<PartImageColor/>
					</PartImage>
				</div>
				{text.packOpe.liTitles.map((e : string, i : number) =>
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
				<div ref={pedaRef} style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', width: '100%' }}>
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
				{text.packPeda.liTitles.map((e : string, i : number) =>
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
				<div ref={mesureRef} style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', width: '100%' }}>
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
				{text.packMes.liTitles.map((e : string, i : number) =>
					<CodeSection key={e} style={{marginTop: i === 0 ? '5vh' : 0}} >
						<LiTitle >{e}</LiTitle>
						<LiLabel >{text.packMes.li[i]}</LiLabel>
					</CodeSection>
				)}
				<div style={{marginTop: '5vh'}} >
					<Button name={text.button.label} route="Videos"/>
				</div>
				<div style={{marginTop:'20vh', backgroundColor:'var(--grey-bg)', width:'100%', display: 'flex', flexDirection: 'column', alignItems:'center', justifyContent: 'center', paddingTop:'3vh', paddingBottom:'6vh'}} >
					<h3>{text.more.title}</h3>
					<div style={{width: '80%', marginTop: '3vh'}} >
						<Link href={`/Manuals/#manuals`} replace><p style={{textDecoration: "underline var(--dark)", cursor:'pointer'}} >{(text.more.links[0]).toUpperCase()}</p></Link>
					</div>
					<div style={{width: '80%', marginTop: '0.2vh'}} >
						<Link href={`/Manuals/#validations`} replace><p style={{textDecoration: "underline var(--dark)", cursor:'pointer'}} >{(text.more.links[1]).toUpperCase()}</p></Link>
					</div>
					<div style={{width: '80%', marginTop:'0.2vh'}} >
						<a href={`../Folders/extrait_validation_gamma.pdf`} target="_blank" rel="noreferrer"><p style={{textDecoration: "underline var(--dark)", cursor:'pointer'}} >{(text.more.links[2]).toUpperCase()}</p></a>
					</div>
					<div style={{width: '80%', marginTop:'0.2vh'}} >
						<a href={`../Folders/extrait_validation_géné_X.pdf`} target="_blank" rel="noreferrer"><p style={{textDecoration: "underline var(--dark)", cursor:'pointer'}}>{(text.more.links[3]).toUpperCase()}</p></a>
					</div>
					<div style={{width: '80%', marginTop: '0.2vh'}} >
						<a href={`../Folders/Modification_Dosimex GX_3.0.pdf`} target="_blank" rel="noreferrer"><p style={{textDecoration: "underline var(--dark)", cursor:'pointer'}} >{(text.more.links[4]).toUpperCase()}</p></a>
					</div>
				</div>
				<div style={{marginTop:'5vh', width:'100%', display: 'flex', flexDirection: 'column', alignItems:'center', justifyContent: 'center', paddingBottom: '25vh'}} >
					<h3>{text.ask.title}</h3>
					<p style={{...style.headerText, width: '25vw', marginTop: 0, textAlign: 'center', fontSize: '1.5rem', marginBottom: '4vh' }} >{text.ask.text}</p>
					<Button name={text.ask.labelButton} route="Contact"/>
				</div>
			</div>
		</div>
	);
}

export default Software;

export const styles = (mobile: boolean): {[$:string]: CSS.Properties} => ({
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
	divImage: {
		display: mobile ? "none" : undefined,
		marginTop: 0,
	} as CSS.Properties,
	header: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		marginLeft: '8vw',
		width: mobile ? '80%' : '45vw',
	} as CSS.Properties,
	headerText: {
		color: 'var(--grey)',
		textAlign: 'justify',
		marginTop: '5vh',
		fontSize: mobile ? '1.6rem' : undefined,
	} as CSS.Properties,
	headerLink: {
		fontSize: mobile ? '2rem' : undefined,
	} as CSS.Properties,
	arrow: {
		color: "var(--main)",
		fontSize: mobile ? "3rem" : "4rem",
		marginTop: 0,
		marginBottom: 0,
	} as CSS.Properties,
	partHeader: {
		display:'flex',
		flexDirection: 'column',
		width: mobile ? '100%' : '70%',
		height: mobile ? '40vh' : undefined,
	} as CSS.Properties,
	textPartHeader: {
		textAlign:'justify',
		fontSize: mobile ? '1.6rem' : undefined,
	} as CSS.Properties,
})