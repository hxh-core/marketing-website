import type { ISchemaOrg } from '@/shared/types';
import styles from './BlockWithTitle.module.scss';

interface Props extends ISchemaOrg {
	children: React.ReactNode;
	id?: string;
	className?: string;
}

export const BlockWithTitle = ({
	children,
	id,
	className,
	...props
}: Props) => {
	return (
		<div
			className={`${styles.block} ${className ? className : ''}`}
			id={id}
			{...props}
		>
			{children}
		</div>
	);
};
