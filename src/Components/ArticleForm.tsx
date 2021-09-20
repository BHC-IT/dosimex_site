import dynamic from 'next/dynamic';

import { useRouter } from 'next/router';
import * as React from 'react';
import * as CSS from 'csstype';
import Radium from 'radium';
import IArticle from '../interfaces/IArticle';
import axios from 'axios';
import Input, {IValidator} from './Input';

const MDEditor = dynamic(
	() => import("@uiw/react-md-editor").then((mod) => mod.default) as any,
	{ ssr: false }
) as any;

import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
	display: block;
	margin: 0 auto;
	border-color: red;
`;

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

const isInputValid = (value: string) => value.trim() !== ''

const Article = (props: IProps) => {

	const router = useRouter();
	const [title, setTitle] = React.useState<string | undefined>(props.article?.title);
	const [description, setDescription] = React.useState<string | undefined>(props.article?.description);
	const [markdown, setMarkdown] = React.useState<string | undefined>(props.article?.markdown);
	const [urlImage, setUrlImage] = React.useState<string | undefined>(props.article?.urlImage);
	const [isLoading, setIsLoading] = React.useState<boolean>(false);

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
							required
							validator={[
							{ validationFunction:(value: string) => isInputValid(value), errorMessage: "Veuillez rentrer un titre" },
							] as IValidator[]}
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

				<p style={{textTransform: "uppercase", color: "var(--grey)", fontSize: "2rem"}}>{text.label_markdown}</p>
				<MDEditor
					value={markdown}
					onChange={setMarkdown}
					height={400}
				/>
				<div style={{textAlign: "center"}}>
					<button style={styles.button} onClick={async () => {
						const toastLoad = toast.dark('Chargement en cours...')
						setIsLoading(true)
						if (props.method === 'POST') {
							try {
								const res = await axios.post('/api/articles', {
									title: title,
									description: description,
									markdown: markdown,
									urlImage: urlImage,
								}, {headers: {authorization : `Bearer ${props.user}`}});
								toast.dismiss(toastLoad)
								toast.success('Nouvel article ajouté !')
								router.push(`/articles/${res.data.data.slug}`)
							} catch (e) {
								toast.dismiss(toastLoad)
								if (axios.isAxiosError(e))
									toast.error(`Echec de l\'envoi du nouvel article - ${e.response?.data.message}`);
								else
									toast.error('Echec de l\'envoi du nouvel article')
							} finally {
								setIsLoading(false)
							}
						} else if (props.method === 'PATCH') {
							try {
								await axios.patch(`/api/articles/${props.article?.slug}`, {
									title: title,
									description: description,
									markdown: markdown,
									urlImage: urlImage,
								},{headers: {authorization : `Bearer ${props.user}`}});
								toast.dismiss(toastLoad)
								toast.success('Article modifié avec succès !')
								router.push(`/articles/${props.article?.slug}`)
							} catch (e) {
								toast.dismiss(toastLoad)
								if (axios.isAxiosError(e))
									toast.error(`Echec de l\'envoi du nouvel article - ${e.response?.data.message}`);
								else
									toast.error('Echec de l\'envoi du nouvel article')
							} finally {
								setIsLoading(false)
							}

						}
					}} >
					{ isLoading ?
							<ClipLoader color="#fff" loading={isLoading} css={override} size={30} />
						:
							<>
								Envoyer
							</>
					}
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
		marginTop: "7vh",
	}
}