import type { StrapiImage } from '../../api';
import type { ICustomLinkProps, ILink } from '../shared';

export interface IWorkCardMini {
	id: number;
	attributes: {
		image: StrapiImage;
		title: string;
		tag: string;
		link: ILink;
		createdAt: string;
		updatedAt?: string;
		publishedAt: string;
	};
}
export interface IWorkCardLarge {
	id: number;
	attributes: {
		image: StrapiImage;
		title: string;
		description: string;
		link: ICustomLinkProps;
		createdAt: string;
		updatedAt?: string;
		publishedAt: string;
	};
}
