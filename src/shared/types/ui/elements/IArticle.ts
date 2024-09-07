import type { StrapiImage } from '../../api';
import type { IPage } from '../pages';
import type { IAuthor } from './IAuthor';

export interface IArticle {
	id: number;
	attributes: {
		title: string;
		viewsCount: number;
		content: string;
		type: string;
		preview: StrapiImage;
		// Page для получение ссылки на статью
		page: {
			data?: IPage;
		};
		author: {
			data: IAuthor;
		};
		readingTime: string;
		createdAt: string;
		updatedAt?: string;
		publishedAt: string;
		locale?: string;
	};
}
