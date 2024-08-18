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
	| IServicePriceFixed
	| IServicePriceFrom
	| IServicePriceAgreement;

export interface IServicePriceFixed {
	state: 'Фикс';
	amount: number;
	currency: string;
}

export interface IServicePriceFrom {
	state: 'От';
	amount: number;
	currency: string;
}

export interface IServicePriceAgreement {
	state: 'По договоренности';
	currency: string;
}
