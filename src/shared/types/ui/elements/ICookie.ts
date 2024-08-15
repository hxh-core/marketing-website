import type { ICustomButtonProps, ICustomLinkProps } from '../shared';

export interface ICookie {
	id: number;
	attributes: {
		cookieName: string;
		text: string;
		infoButton?: ICustomLinkProps;
		closeButton?: ICustomButtonProps;
		localizations: {
			data?: Omit<ICookie, 'localizations'>[];
		};
		createdAt: string;
		updatedAt?: string;
	};
}
