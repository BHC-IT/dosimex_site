import * as React from 'react';
import * as CSS from 'csstype';
import Radium from 'radium';
import IArticle from '../interfaces/IArticle';
import axios from 'axios';
import Input from './Input';
import MDEditor from '@uiw/react-md-editor';
import '@uiw/react-md-editor/dist/markdown-editor.css'
import '@uiw/react-markdown-preview/dist/markdown.css';

const text = {
	label_title: "Titre",
	label_description: "Description",
	label_markdown: "Markdown",
	label_urlImage: "Image URL",
}

interface IProps {
	article?: IArticle,
	user: string | null,
	method: string,
}

interface IStyles {
	button: any,
	divInput: CSS.Properties,
}

const Article = (props: IProps) => {


	const [title, setTitle] = React.useState<string | undefined>(props.article?.title);
	const [description, setDescription] = React.useState<string | undefined>(props.article?.description);
	const [markdown, setMarkdown] = React.useState<string | undefined>(props.article?.markdown);
	const [urlImage, setUrlImage] = React.useState<string | undefined>(props.article?.urlImage);

	return (
		<div>
			<div className="container">

				<div style={styles.divInput}>
					<Input
							value={title}
							type="text"
							id="title"
							label={text.label_title}
							onChange={setTitle}
					/>
					<Input
							value={description}
							type="text"
							id="description"
							label={text.label_description}
							onChange={setDescription}
					/>
					<Input
							value={urlImage}
							type="text"
							id="urlImage"
							label={text.label_urlImage}
							onChange={setUrlImage}
					/>
				</div>

				<p style={{textTransform: "uppercase"}}>{text.label_markdown}</p>
				<MDEditor
					value={markdown}
					onChange={setMarkdown}
					height={400}
				/>
				<div style={{textAlign: "center"}}>
					<button style={styles.button} onClick={async () => {
						if (props.method === 'POST') {

							try {
								await axios.post('/api/articles', {
									title: title,
									description: description,
									markdown: markdown,
									urlImage: urlImage,
								}, {headers: {authorization : `Bearer ${props.user}`}});
							} catch (e) {
								console.error(e.response)
							}
						} else if (props.method === 'PATCH') {
							try {
								await axios.patch(`/api/articles/${props.article?.slug}`, {
									title: title,
									description: description,
									markdown: markdown,
									urlImage: urlImage,
								},{headers: {authorization : `Bearer ${props.user}`}});
							} catch (e) {
								console.error(e)
							}
						}
					}} >
					Envoyer
					</button>
				</div>

			</div>
		</div>
	);

}

export default Radium(Article);

export const styles: IStyles =  {
	button: {
		padding: "8px 25px",
		marginTop: "7vh",
		marginBottom: "8vh",
		textAlign: "center",
		backgroundColor: "var(--main)",
		borderRadius: "50px",
		color: "white",
		textTransform: "uppercase",
		transition: "all 0.3s ease 0s",
		':hover': {
			transform: "translateY(-4px)",
			boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.1)",
		}
	},
	divInput: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		height: "20vh",
		marginTop: "7vh",
	}
}