import Radium from 'radium';

interface IProps {
	author: string,
	text: string,
	href: string,
	imageUrl: string,
}

const Book = (props: IProps) =>
	<>
	</>

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