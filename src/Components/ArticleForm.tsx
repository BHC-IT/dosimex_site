import * as React from 'react';
import * as CSS from 'csstype';
import Radium from 'radium';
import IArticle from '../interfaces/IArticle';
import * as axios from 'axios';
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
	button: CSS.Properties,
}

const Article = (props: IProps) => {


	const [title, setTitle] = React.useState<string | null>(null);
	const [description, setDescription] = React.useState<string | null>(null);
	const [markdown, setMarkdown] = React.useState<string | undefined>(undefined);
	const [urlImage, setUrlImage] = React.useState<string | null>(null);

	return (
		<div>
			<div className="container">

				<Input
						value={props.article?.title}
						type="text"
						id="title"
						label={text.label_title}
						onChange={(value : string) => setTitle(value)}
				/>
				<Input
						value={props.article?.description}
						type="text"
						id="description"
						label={text.label_description}
						onChange={(value : string) => setDescription(value)}
				/>
				{/*<Input
						value={props.article?.markdown}
						type="text"
						id="markdown"
						label={text.label_markdown}
						onChange={(value : string) => setMarkdown(value)}
				/>*/}
				<Input
						value={props.article?.urlImage}
						type="text"
						id="urlImage"
						label={text.label_urlImage}
						onChange={(value : string) => setUrlImage(value)}
				/>

				<p>{text.label_markdown}</p>
				<MDEditor
					value={markdown}
					onChange={setMarkdown}
				/>
				<MDEditor.Markdown source={markdown} />
				<div>
					<button style={styles.button} onClick={async () => {
						if (props.method === 'POST') {

							try {
								await axios.post('http://localhost:3000/api/articles', {
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
								await axios.patch(`http://localhost:3000/api/articles/${props.article?.slug}`, {
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
		backgroundColor: "var(--main)",
		borderRadius: "50px",
		color: "white",
		textTransform: "uppercase",
		transition: "all 0.3s ease 0s",
		':hover': {
			transform: "translateY(-4px)",
			boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.1)",
		}
	}
}