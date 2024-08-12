import type { HTMLAttributes } from 'react';

interface HeadingByIndexProps {
	children?: React.ReactNode;
	props: HTMLAttributes<HTMLHeadingElement>;
	index: number;
}

export const HeadingByIndex = ({
	children,
	index,
	props,
}: HeadingByIndexProps) => {
	switch (index) {
		case 0:
			return <h1 {...props}>{children}</h1>;
		case 1:
			return <h2 {...props}>{children}</h2>;
		case 2:
			return <h3 {...props}>{children}</h3>;
		default:
			return <h3 {...props}>{children}</h3>;
	}
};
