import type { ISchemaOrg, ITitle } from '@/shared/types';
import { CustomButton } from '../../CustomButton/CustomButton';
import { Container } from '../Container/Container';
import styles from './BlockWithTitle.module.scss';

interface Props extends ISchemaOrg {
	children: React.ReactNode;
	id?: string;
	className?: string;
	title?: ITitle;
}

export const BlockWithTitle = ({
	children,
	id,
	className,
	title,
	...props
}: Props) => {
	return (
		<div
			className={`${styles.block} ${className ? className : ''}`}
			id={id}
			{...props}
		>
			{children}
			{title && title.link && title.link.children && (
				<Container className={styles.container}>
					<div>
						<CustomButton.Link {...title.link} className={styles.moreButton} />
					</div>
				</Container>
			)}
		</div>
	);
};
