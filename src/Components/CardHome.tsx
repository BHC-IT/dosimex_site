import Link from 'next/link';
import Image from 'next/image';
import Radium from 'radium';
import { useRouter } from 'next/router';
import { useIsMobile } from '../Hooks/useIsMobile';
import Tilt from 'react-parallax-tilt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight} from '@fortawesome/free-solid-svg-icons'

import * as CSS from 'csstype';

export interface IStyles {
	global: CSS.Properties,
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
	const style = useIsMobile(styles);

	if (style === null)
		return null

	return (
		<Tilt tiltReverse scale={1.05} tiltMaxAngleX={10} tiltMaxAngleY={10} style={style.global} >
			<div style={style.card} onClick={() => router.push(props.route)} >
				<div style={style.image}>
					<Image
						src={props.icon}
						alt="icône"
						width={250}
						height={250}
					/>
				</div>
				<h4 style={{marginBottom: "0"}}>{props.title}</h4>
				<p style={style.subtitle}>{props.content}</p>
				<button style={style.button}>
					<Link href={`/${props.route}`}>
						<div style={{display: "flex", alignItems: "center"}}>
							<FontAwesomeIcon icon={faLongArrowAltRight} style={{width: "1.3vw"}}/>
						</div>
					</Link>
				</button>
			</div>
		</Tilt>
	);

}

export default Radium(CardHome);

export const styles = (mobile: boolean): IStyles => ({
	global: {
		width: mobile ? "100%" : "28%",
		marginBottom: mobile ? "5vh" : undefined,
		minWidth: mobile ? undefined : "250px",
	},
	button: {
		width: "40px",
		height: "40px",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		padding: "20px",
		marginLeft: "auto",
		marginRight: "auto",
		marginTop: "2vh",
		marginBottom: "4vh",
		backgroundColor: "var(--main)",
		borderRadius: "50%",
		color: "white",
	},
	card: {
		borderRadius: "10px",
		boxShadow: "1px 2px 2px 2px rgba(0, 0, 0, 0.15)",
		textAlign: "center" as "center",
		width: "100%",
		paddingBottom: '2vh',
		height: mobile ? undefined : '47vh',
		cursor: 'pointer',
		paddingTop: '5vh',
	},
	subtitle: {
		color: "var(--grey)",
		fontSize: mobile ? "1.5rem" : "1.8rem",
		marginBottom: mobile ? "2vh" : "4vh",
		marginLeft: "2%",
		marginRight: "2%",
	},
	image: {
		width: "20%",
		height: "20%",
		marginLeft: "auto",
		marginRight: "auto",
	},
})