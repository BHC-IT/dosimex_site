import * as React from 'react';
import Button from '../Components/Button';
import CSS from 'csstype';
import Image from 'next/image';
import ILang from '../lang/interface';
import Link from 'next/link';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons'

import { useText } from '../Hooks/useText';
import { useIsMobile } from '../Hooks/useIsMobile';

import {
	BrowserView,
	MobileView,
	isMobile,
} from "react-device-detect";

import { parseStringLink, handleLink, isLink } from '../utils/parseStringLink';

interface IMapOfStyle {
	[i: string]: CSS.Properties
}

interface IMapOf<A> {
	[i: string]: A
}

type IStyles = IMapOf<CSS.Properties | IMapOfStyle>

interface IProps {
	text: ILang,
	style: IStyles,
}

interface ILiLabelProps {
	text: string,
	style: IMapOfStyle,
	textOver: string,
}

interface ILinkVideoProps {
	link: string,
	textOver: string,
}

const Questions = ({text, style} : IProps) =>
	<div style={style.container}>
		<h3 style={style.title}>{text.ask.title}</h3>
		<p style={style.text} >{text.ask.text}</p>
		<Button name={text.ask.labelButton} route="Contact"/>
	</div>

const LinkVideo = ({link, textOver} : ILinkVideoProps) => {
	const [isVisible, setIsVisible] = React.useState<boolean>(false)
	const [x, setX] = React.useState<number>(0)

	return (
		<>
			<a
				href={handleLink(link)[1]}
				target="_blank"
				rel="noreferrer noopener"
				onMouseOver={(e) => {setIsVisible(true); setX(e.clientX)}}
				onMouseLeave={() => setIsVisible(false)}
			>
				{handleLink(link)[0]}
				<div style={{display: "inline", paddingLeft: "5px"}}>
					<FontAwesomeIcon icon={faExternalLinkAlt} style={{width: "0.75vw"}}/>
				</div>
			</a>
			{
				isMobile ?
					null
				:
					<p style={{
							visibility: isVisible ? "visible" : "hidden",
							margin: "0",
							textAlign: "center",
							backgroundColor: "rgb(230,230,230)",
							color: "var(--grey)",
							borderRadius: "50px",
							position: "absolute",
							left: x,
							padding: "0 12px",

					}}>
						{textOver}
					</p>
			}
		</>
	)
}

const LiLabel = ({text, style, textOver} : ILiLabelProps) =>
	<p style={style.global}>
	{
		parseStringLink(text).map(e => isLink(e) ?
			<div style={style.link}>
				<LinkVideo link={e} textOver={textOver}/>
			</div>
		:
		<p style={{display: "inline"}}>{e}</p>
		)
	}
	</p>

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
	font-size: 2.2rem;

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
	justify-content: flex-start;
	align-items: center;
`;

const LiTitle = styled.h5`
	flex-shrink: 0;
	width: 15vw;
	margin-bottom: 6px;
`;

// const LiLabel= styled.p`
// 	margin-left: 1vw;
// `;


const hashes = ["#op", "#pedago", "#mesure"]
const ratioFr: number = 0.012
const ratioUk: number = 0.03

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
		<div>
			<div style={style.container} >
				<div style={style.divImage} >
					<Image src="/Images/motif_rect.svg" width={343*0.9} height={334*0.9} />
				</div>
				<div style={style.header} >
					<h2 style={style.headerTitle} >{text.header.title}</h2>
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

			<BrowserView>
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
							<div style={style.divFlag}>
								<LiTitle >{e}</LiTitle>
								<div style={{marginRight: "6px", display: "inline"}}>
									<Image src="/Images/Flag_France.png" width={2560*ratioFr} height={1707*ratioFr} />
								</div>
								<Image src="/Images/Flag_Uk.jpg" width={1024*ratioUk} height={683*ratioUk} />
							</div>
							<LiLabel text={text.packOpe.li[i]} style={style.liLabel} textOver={text.linkVideo}/>
						</CodeSection>
					)}
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
							<div style={style.divFlag}>
								<LiTitle >{e}</LiTitle>
								{
									i === 0 ?
										<>
											<div style={{marginRight: "6px", display: "inline"}}>
												<Image src="/Images/Flag_France.png" width={2560*ratioFr} height={1707*ratioFr} />
											</div>
											<Image src="/Images/Flag_Uk.jpg" width={1024*ratioUk} height={683*ratioUk} />
										</>
									:
										<Image src="/Images/Flag_France.png" width={2560*ratioFr} height={1707*ratioFr} />
								}
							</div>
							<LiLabel text={text.packPeda.li[i]} style={style.liLabel} textOver={text.linkVideo}/>
						</CodeSection>
					)}
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
							<div style={style.divFlag}>
								<LiTitle >{e}</LiTitle>
								<Image src="/Images/Flag_France.png" width={2560*ratioFr} height={1707*ratioFr} />
							</div>
							<LiLabel text={text.packMes.li[i]} style={style.liLabel} textOver={text.linkVideo}/>
						</CodeSection>
					)}
					<div style={{marginTop: '8vh'}} >
						<Button name={text.button.label} route="Videos"/>
					</div>
				</div>
			</BrowserView>

			<MobileView>
				<div style={style.divPack}>
					<div ref={opRef} style={style.divPackHeader}>
						<h3>{text.packOpe.title}</h3>
						<p style={style.descrip}>{text.packOpe.descrip}</p>
					</div>
					{text.packOpe.liTitles.map((e : string, i : number) =>
						<div key={e} style={{marginTop: i === 0 ? '5vh' : 0}} >
							<div style={style.divFlag}>
								<p style={style.pLi}>{e}</p>
								<div style={{marginRight: "6px", display: "inline"}}>
									<Image src="/Images/Flag_France.png" width={2560*ratioFr} height={1707*ratioFr} />
								</div>
								<Image src="/Images/Flag_Uk.jpg" width={1024*ratioUk} height={683*ratioUk} />
							</div>
							<LiLabel text={text.packOpe.li[i]} style={style.liLabel}/>
						</div>
					)}
				</div>
				<div style={style.divPack}>
					<div ref={pedaRef} style={style.divPackHeader}>
						<h3>{text.packPeda.title}</h3>
						<p style={style.descrip}>{text.packPeda.descrip}</p>
					</div>
					{text.packPeda.liTitles.map((e : string, i : number) =>
						<div key={e} style={{marginTop: i === 0 ? '5vh' : 0}} >
							<div style={style.divFlag}>
								<p style={style.pLi}>{e}</p>
								{
									i === 0 ?
										<>
											<div style={{marginRight: "6px", display: "inline"}}>
												<Image src="/Images/Flag_France.png" width={2560*ratioFr} height={1707*ratioFr} />
											</div>
											<Image src="/Images/Flag_Uk.jpg" width={1024*ratioUk} height={683*ratioUk} />
										</>
									:
										<Image src="/Images/Flag_France.png" width={2560*ratioFr} height={1707*ratioFr} />
								}
							</div>
							<LiLabel text={text.packPeda.li[i]} style={style.liLabel}/>
						</div>
					)}
				</div>
				<div style={style.divPack}>
					<div ref={mesureRef} style={style.divPackHeader}>
						<h3>{text.packMes.title}</h3>
						<p style={style.descrip}>{text.packMes.descrip}</p>
					</div>
					{text.packMes.liTitles.map((e : string, i : number) =>
						<div key={e} style={{marginTop: i === 0 ? '5vh' : 0}} >
							<div style={style.divFlag}>
								<p style={style.pLi}>{e}</p>
								<Image src="/Images/Flag_France.png" width={2560*ratioFr} height={1707*ratioFr} />
							</div>
							<LiLabel text={text.packMes.li[i]} style={style.liLabel}/>
						</div>
					)}
					<div style={{margin: '8vh auto', textAlign: "center"}} >
						<Button name={text.button.label} route="Videos"/>
					</div>
				</div>
			</MobileView>

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
				<div style={{width: '80%', marginTop: '0.2vh'}} >
					<Link href={`/Books`} replace><p style={{textDecoration: "underline var(--dark)", cursor:'pointer'}} >{(text.more.links[5]).toUpperCase()}</p></Link>
				</div>
			</div>
			<Questions text={text} style={style.questionsStyles}/>
		</div>
	);
}

export default Software;

export const styles = (mobile: boolean): IStyles => ({
	container: {
		marginTop: "20vh",
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		paddingLeft:'3vw',
		width: '100vw',
	},
	divImage: {
		display: mobile ? "none" : undefined,
		marginTop: 0,
	},
	header: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		marginLeft: '8vw',
		width: mobile ? '80%' : '45vw',
	},
	headerText: {
		color: 'var(--grey)',
		textAlign: 'justify',
		marginTop: '5vh',
		fontSize: mobile ? '1.6rem' : undefined,
	},
	headerTitle: {
		padding: 0,
		margin: 0,
		lineHeight: mobile ? undefined : 0.7,
		textAlign: mobile ? "center" : undefined,
	},
	headerLink: {
		fontSize: mobile ? "2rem" : "2.4rem",
		fontWeight: 400,
	},
	arrow: {
		color: "var(--main)",
		fontSize: mobile ? "3rem" : "4.5rem",
		marginTop: 0,
		marginBottom: 0,
	},
	partHeader: {
		display:'flex',
		flexDirection: 'column',
		width: mobile ? '100%' : '70%',
		height: mobile ? '40vh' : undefined,
	},
	textPartHeader: {
		textAlign:'justify',
		fontSize: mobile ? '1.6rem' : undefined,
	},
	questionsStyles: {
		container: {
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			flexDirection: "column",
			width: "100%",
			marginTop: '10vh',
			marginBottom: '25vh',
		},
		text: {
			color: 'var(--grey)',
			width: mobile ? '60%' : '22vw',
			marginTop: 0,
			textAlign: 'center',
			fontSize: '1.5rem',
			marginBottom: mobile ? '7vh' : '4vh'
		},
	},
	divPack: {
		width: "80%",
		margin: "auto",
		marginTop: "8vh",
		textAlign: "justify",
	},
	divPackHeader: {
		borderTop: "0.4vh solid var(--flash)",
	},
	descrip: {
		fontSize: "1.6rem",
	},
	pLi: {
		fontWeight: "bold",
	},
	liLabel: {
		link: {
			cursor: "pointer",
			textDecoration: "underline",
			display: "inline",
			color: "#007bff",
		},
		global: {
			marginLeft: "1vw",
		}
	},
	divFlag: {
		marginBottom: "3vh"
	}
})
