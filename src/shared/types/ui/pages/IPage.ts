import type { StrapiImageWithoutData } from '../../api';
import type { SiteType } from '../../meta';
import type { IBlock } from '../blocks';

export interface IPage {
	id: number;
	attributes: {
		createdAt: string;
		updatedAt?: string;
		publishedAt?: string;
		locale?: string;
		metaTitle: string;
		metaDescription?: string;
		metaKeywords?: string;
		metaImage?: {
			data: StrapiImageWithoutData[];
		};
		path: string;
		type?: SiteType;
		blocks: IBlock<any>[];
	};
}
