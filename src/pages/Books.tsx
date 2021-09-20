import CSS from 'csstype';
import { useText } from '../Hooks/useText';
import { useIsMobile } from '../Hooks/useIsMobile';
import Book from '../Components/Book';

const Books = () => {

	const style = useIsMobile(styles);
	const text = useText('Books');

	if (style === null)
		return null

	const books = [
		{
			extract: text.books[0].extract,
			author: text.books[0].author,
			url: "https://laboutique.edpsciences.fr/produit/1070/9782759823147/Physique%20nucleaire%20et%20radioprotection",
			image: "livre1.png",
		},
		{
			extract: text.books[1].extract,
			author: text.books[1].author,
			url: "https://laboutique.edpsciences.fr/produit/843/9782759816736",
			image: "livre2.png",
		},
		{
			extract: text.books[2].extract,
			author: text.books[2].author,
			url: "https://laboutique.edpsciences.fr/produit/29/9782759808458/Radioprotection%20pratique%20pour%20lindustrie%20et%20la%20recherche",
			image: "livre3.png",
		},
		{
			extract: text.books[3].extract,
			author: text.books[3].author,
			url: "https://laboutique.edpsciences.fr/produit/953/9782759819928",
			image: "livre4.png",
		},
		{
			extract: text.books[4].extract,
			author: text.books[4].author,
			url: "https://laboutique.edpsciences.fr/produit/43/9782759809363/Radioprotection%20pratique%20pour%20lindustrie%20et%20la%20recherche",
			image: "livre5.png",
		},
		{
			extract: text.books[5].extract,
			author: text.books[5].author,
			url: "https://www.editions-ellipses.fr/accueil/4133-de-l-atome-au-noyau-une-approche-historique-de-la-physique-atomique-et-de-la-physique-nucleaire-9782340025158.html",
			image: "livre6.png",
		},
		{
			extract: text.books[6].extract,
			author: text.books[6].author,
			url: "https://www.editions-hermann.fr/livre/9782705660437",
			image: "livre7.png",
		},
		{
			extract: text.books[7].extract,
			author: text.books[7].author,
			url: "https://www.lavoisier.fr/livre/physique/physique-appliquee-a-l-exposition-externe/antoni/descriptif_2649448",
			image: "livre8.png",
		},
		{
			extract: text.books[8].extract,
			author: text.books[8].author,
			url: "https://laboutique.edpsciences.fr/produit/1071/9782759823123/Resolutions%20de%20problemes%20sur%20les%20rayonnements%20ionisants",
			image: "livre9.png",
		},
		{
			extract: text.books[9].extract,
			author: text.books[9].author,
			url: "https://laboutique.edpsciences.fr/produit/617/9782759809929/La%20radioactivite%20sous%20surveillance",
			image: "livre10.png",
		},
		{
			extract: text.books[10].extract,
			author: text.books[10].author,
			url: "https://laboutique.edpsciences.fr/produit/1081/9782759823482/Exercices%20de%20radioprotection%20-%20Tome%203",
			image: "livre11.png",
		},
	]

	return (
		<>
			<div className="container" style={style.global}>
				<div style={style.header}>
					<h2 style={style.title}>{text.header.title}</h2>
				</div>
				{
					books.map((e: any, i: number) => {
						return (
							<Book author={books[i].author} text={books[i].extract} href={books[i].url} imageUrl={books[i].image}/>
						)
					})
				}
			</div>
		</>
	);
}

export default Books;

export const styles = (mobile: boolean): {[$:string]: CSS.Properties} => ({
	global: {
		color: "var(--dark)",
		lineHeight: "3.2rem",
	},
	header: {
		textAlign: "center" as "center",
		padding: "20vh auto",
		marginTop: "15vh",
		marginBottom: mobile ? "10vh" : "15vh",
	},
	title: {
		fontSize: mobile ? "4.5rem" : "6rem",
	},
})