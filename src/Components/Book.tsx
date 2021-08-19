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
				<a href={`${props.href}`} target="_blank" rel="noreferrer noopener">
					<div style={{...styleBook, backgroundImage: url}}></div>
				</a>
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
		textAlign: "justify" as "justify",
	},
	author: {
		fontFamily: "Lato",
		fontWeight: 700,
		fontSize: "2.2rem",
		textTransform: "uppercase" as "uppercase",
	},
}