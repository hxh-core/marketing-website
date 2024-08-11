export interface ITitle {
	label: string;
	link?: {
		label: React.ReactNode;
		href: string;
		target?: '_blank' | '_self' | '_parent' | '_top';
	};
}
