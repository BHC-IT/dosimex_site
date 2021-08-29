import CSS from 'csstype';
import Radium from 'radium';
import { useIsMobile } from '../Hooks/useIsMobile';
import { withOrientationChange } from 'react-device-detect';

interface IProps {
	author: string,
	text: string,
	href: string,
	imageUrl: string,
	isLandscape: boolean,
}

const Book = (props: IProps) => {

	const url = `url(Images/${props.imageUrl})`;
	const style = useIsMobile(styles);
	const styleBook = useIsMobile(stylesBook);

	if (style === null || styleBook === null)
		return null

	return (
		<div style={style.flex}>
			<div style={style.divBook}>
				<a href={`${props.href}`} target="_blank" rel="noreferrer noopener">
					<div style={props.isLandscape ? {...styleBook, backgroundImage: url, height: "80vh", width: "30vw"} : {...styleBook, backgroundImage: url}}></div>
				</a>
				<p style={style.author}>{props.author}</p>

			</div>
			<div style={style.divText}>
				<p style={{margin : 0}}>{props.text}</p>
			</div>
		</div>
	);
}

export default withOrientationChange(Radium(Book));

export const stylesBook = (mobile: boolean): CSS.Properties => ({
	width: mobile ? "55vw" : "15vw",
	height: "45vh",
	cursor: "pointer",
	backgroundPosition: 'center',
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
})

export const styles = (mobile: boolean): {[$:string]: CSS.Properties} => ({
	flex: {
		display: "flex",
		flexDirection: mobile ? 'column' : undefined,
		padding: "5vh 0",
	},
	divBook: {
		width: mobile ? "70%" : "30 %",
	},
	divText: {
		paddingLeft: mobile ? 0 : "5%",
		display: "flex",
		textAlign: "justify" as "justify",
		fontSize: mobile ? "1.6rem" : undefined,
		height: mobile ? "80vh" : undefined,
		overflowY: mobile ? "scroll" : undefined,
	},
	author: {
		fontFamily: "Lato",
		fontWeight: 700,
		fontSize: mobile ? "1.8rem" : "2.2rem",
		textTransform: "uppercase" as "uppercase",
	},
})