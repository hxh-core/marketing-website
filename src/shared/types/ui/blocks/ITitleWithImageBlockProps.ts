import type { StrapiImage } from '../../api';
import type { IDefaultBlockProps } from './IDefaultBlockProps';

export interface ITitleWithImageBlock {
	id: number;
	attributes: {
		uniqueBlockName: string;
		locale?: string;
		createdAt: string;
		updatedAt?: string;
		publishedAt: string;
		title: string;
		image: StrapiImage;
	};
}
export interface ITitleWithImageBlockProps extends IDefaultBlockProps {
	data: {
		data: ITitleWithImageBlock;
	};
}
