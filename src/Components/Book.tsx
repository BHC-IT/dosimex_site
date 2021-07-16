import Radium from 'radium';

interface IProps {
	author: string,
	text: string,
	href: string,
	imageUrl: string,
}

const Book = (props: IProps) => {

	const url = `url(Images/${props.imageUrl})`;

	return (
		<div style={styles.flex}>
			<div style={styles.divBook}>
				<Link href={`${props.href}`} replace>
					<div style={{...styleBook, backgroundImage: url}}></div>
				</Link>
				<p style={styles.author}>{props.author}</p>

			</div>
			<div style={styles.divText}>
				<p style={{margin : 0}}>{props.text}</p>
			</div>
		</div>
	);
}

export default Radium(Book);

export const styleBook =  {
	width: "15vw",
	height: "43vh",
	cursor: "pointer",
	backgroundPosition: 'center',
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
	':hover': {
		background: "linear-gradient(rgba(255, 255, 255, 0.2) rgba(255, 255, 255, 0.2))",
	}
}

export const styles = {
	flex: {
		display: "flex",
		padding: "5vh 0",
	},
	divBook: {
		width: "30%"
	},
	divText: {
		paddingLeft: "5%",
		display: "flex",
		textAlign: "justify",
	},
	author: {
		fontFamily: "Lato",
		fontWeight: "700",
		fontSize: "2.2rem",
		textTransform: "uppercase",
	},
}