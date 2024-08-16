import type { ICustomLinkProps, IIcons, ILink } from '../shared';

export interface IService {
	id: number;
	attributes: {
		color: 'primary' | 'secondary';
		hoverTransition?: boolean;
		icon: IIcons;
		slug?: ILink;
		title: string;
		description: string;
		price: IServicePrice;
		oldPrice?: IServicePrice;
		button: ICustomLinkProps;
		createdAt: string;
		updatedAt?: string;
		publishedAt: string;
	};
}

export type IServicePrice =
	| {
			state: 'Фикс';
			amount: number;
			currency: string;
	  }
	| {
			state: 'От';
			amount: number;
			currency: string;
	  }
	| {
			state: 'По договоренности';
	  };
