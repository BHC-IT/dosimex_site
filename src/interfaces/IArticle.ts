import { Document } from 'mongoose'
import IUser from './IUser'

export default interface IArticle extends Document{
	title: string,
	description?: string,
	markdown: string,
	slug?: string,
	urlImage?: string,
	author: string | IUser,
	updatedAt: Date,
}