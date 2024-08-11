import { IIcons } from './IconType';

export interface IContactLink {
	id: number;
	socialNetwork: IIcons;
	label: string;
	href: string;
}
