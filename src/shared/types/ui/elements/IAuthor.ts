import type { StrapiImage } from '../../api';
import type { IArticle } from './IArticle';

export interface IAuthor {
	id: number;
	attributes: {
		name: string;
		job: string;
		createdAt: string;
		updatedAt?: string;
		publishedAt: string;
		locale?: string;
		photo: StrapiImage;
		articles?: {
			data: IArticle[];
		};
	};
}
